import 'react-loading-skeleton/dist/skeleton.css';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '@stitches/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { useDebounce } from './useDebounce';
import { useGetCharities } from './useGetCharities';

export type CharityProps = {
  charityName: string;
  charityNavigatorURL: string;
  ein: string;
  mission: string;
};

export const CharitySearch = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [ratedOnly, setRatedOnly] = React.useState(false);
  const { isLoading, isError, error, data } = useGetCharities(debouncedSearch, ratedOnly);
  const handleCheckboxChange = () => setRatedOnly(!ratedOnly);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  // const Label = styled.label`
  //   color: 'white',
  //   font-size: 15,
  //   line-height: 1,
  //   user-select: 'none',
  // `;

  const StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    width: 42,
    height: 25,
    backgroundColor: 'gray',
    borderRadius: '9999px',
    position: 'relative',
    boxShadow: `0 2px 10px black`,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:focus': { boxShadow: `0 0 0 2px black` },
    '&[data-state="checked"]': { backgroundColor: 'black' },
  });

  const StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: 'block',
    width: 21,
    height: 21,
    backgroundColor: 'white',
    borderRadius: '9999px',
    boxShadow: `0 2px 2px black`,
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(19px)' },
  });

  return (
    <>
      <form
        className="search-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}>
        <input
          id="searchTerm"
          className="search-input"
          value={searchTerm}
          placeholder=""
          type="text"
          onChange={handleSearchChange}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        {/* <ClearButton updateSearch={updateSearch} searchTerm={searchTerm} /> */}
        {/* <RatingSelect /> */}
        <br />
        <label htmlFor="searchTerm">Show only rated charities</label>
        <StyledSwitch
          id="searchTerm"
          defaultChecked={false}
          checked={ratedOnly}
          onCheckedChange={handleCheckboxChange}>
          <StyledThumb />
        </StyledSwitch>
      </form>
      {debouncedSearch.length === 0 && <p>Search charities</p>}
      {debouncedSearch.length > 0 && isLoading && (
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <p>
                <Skeleton count={1} />
              </p>
              <p>
                <Skeleton count={Math.floor(Math.random() * 5)} />
              </p>
            </li>
          ))}
        </ul>
      )}
      {isError && error && <p>Error: {error.message}</p>}
      {data && (
        <>
          {data?.length > 0 && <p>Results: {data.length}</p>}
          <ul>
            {data?.map(({ charityName, charityNavigatorURL, ein, mission }) => {
              return (
                <li key={ein}>
                  <a href={charityNavigatorURL}>{charityName}</a>
                  <p>{mission}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
