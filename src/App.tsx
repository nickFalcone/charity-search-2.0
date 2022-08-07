import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { CharitySearch } from './components/CharitySearch/CharitySearch';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* HEADER */}
      <CharitySearch />
      {/* FOOTER */}
    </QueryClientProvider>
  );
};
