// see: https://usehooks-ts.com/react-hook/use-debounce
import { useEffect, useState } from 'react';
// TODO: is there already a debounce for React available on NPM?
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
    // Cancel timeout if value changes (also on delay change or unmount)
    // to prevent debounced value from updating if value is changed within delay
    // Clear and restart timeout.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
