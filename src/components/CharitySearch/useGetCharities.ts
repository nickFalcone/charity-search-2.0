import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { CharityProps } from './CharitySearch';

export const useGetCharities = (
  searchTerm: string,
  ratedOnly: boolean,
): UseQueryResult<CharityProps[], Error> => {
  let rated: 0 | 1;
  if (ratedOnly) {
    rated = 1;
  } else {
    rated = 0;
  }

  return useQuery(
    ['charities', searchTerm, rated],
    () =>
      fetch(
        `https://charity-search-303800.ue.r.appspot.com/?search=${searchTerm}&rated=${rated}`,
      ).then((res) => res.json()),
    {
      staleTime: 1000 * 60 * 30, // 30 minutes
      cacheTime: 1000 * 60 * 30,
      enabled: searchTerm.length > 0,
    },
  );
};
