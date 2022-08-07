import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

import { useGetCharities } from './useGetCharities';

export type CharityProps = {
  charityName: string;
  charityNavigatorURL: string;
  ein: string;
  mission: string;
};

export const CharitySearch = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [ratedOnly, setRatedOnly] = React.useState(false);
  const { isLoading, isError, error, data } = useGetCharities(searchTerm, ratedOnly);
  const handleCheckboxChange = () => setRatedOnly(!ratedOnly);
  return (
    <>
      <form
        className="search-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <label htmlFor="searchTerm">
          {/* <span className="ada-hidden">Input, Search 501c3 charities</span> */}
          <input
            id="searchTerm"
            className="search-input"
            value={searchTerm}
            placeholder=""
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
        {/* <ClearButton updateSearch={updateSearch} searchTerm={searchTerm} /> */}
        {/* <RatingSelect /> */}
        <input
          type="checkbox"
          id="rated"
          name="rated"
          defaultChecked={ratedOnly}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="rated">Show rated charities only</label>
      </form>
      {isLoading && <p>Loading...</p>}
      {isError && error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map(({ charityName, charityNavigatorURL, ein, mission }) => {
            return (
              <li key={ein}>
                <a href={charityNavigatorURL}>{charityName}</a>
                <p>{mission}</p>
              </li>
            );
          })}
        </ul>
      )}
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
