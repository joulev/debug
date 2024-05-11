import { useEffect, useState } from "react";

export function useDebouncedAction(
  callback: () => void | Promise<void>,
  delay = 500
) {
  useEffect(() => {
    const timeout = setTimeout(
      () => void Promise.resolve(callback()).catch(console.error),
      delay
    );
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export function useDebounce<T>(initialValue: T, value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  useDebouncedAction(() => setDebouncedValue(value), delay);
  return debouncedValue;
}
