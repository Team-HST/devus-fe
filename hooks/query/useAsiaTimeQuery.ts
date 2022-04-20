import { useQuery, UseQueryOptions } from 'react-query';
import { getAsiaSeoulTimer } from '@/api/time';
import type { LocationTime } from '@/api/time/types';

const useAsiaTimeQuery = <T = LocationTime>(options?: UseQueryOptions<T>) => {
  return useQuery<T>('asiaTime', getAsiaSeoulTimer, { ...options });
};

export default useAsiaTimeQuery;
