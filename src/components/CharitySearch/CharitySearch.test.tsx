/* eslint-disable @typescript-eslint/no-empty-function */
// ./test-utils.tsx sets up a custom render that could be
// used to access global context providers, data stores etc.
// https://testing-library.com/docs/react-testing-library/setup#custom-render

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';

import { screen } from '../../../test-utils';
import { handlers } from '../../mocks/handlers';
import { CharitySearch } from './CharitySearch';

// Mock ResizeObserver
// https://github.com/ZeeCoder/use-resize-observer/issues/40#issuecomment-644536259
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// https://testing-library.com/docs/react-testing-library/example-intro/#full-example

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/greeting', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ greeting: 'hello there' }));
  }),
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

afterEach(() => {
  queryCache.clear();
});

describe('Charity list', () => {
  window.ResizeObserver = ResizeObserver;
  test('it renders 100 charities from the mock', async () => {
    server.use(...handlers);

    render(
      <QueryClientProvider client={queryClient}>
        <CharitySearch />
      </QueryClientProvider>,
    );
    const searchTerm = screen.getByRole('textbox', { name: /Search charities/i });
    act(() => {
      userEvent.type(searchTerm, 'test');
    });
    await waitFor(async () => {
      const charityList = screen.getByTestId('charityList');
      const charities = await within(charityList).findAllByRole('listitem');
      expect(charities.length).toBe(100);
    });
  });
});
