import { useCallback, useEffect, useState } from 'react';

const useAsync = <T, E>(
  asyncFunction: () => Promise<T>,
  callbackFn: (res: any) => void,
  callbackError: (err: any) => void,
  immediate = true
) => {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle');

  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((res: any) => {
        setValue(res);
        setStatus('success');
        callbackFn(res);
      })
      .catch((err: any) => {
        setStatus('error');
        setError(err);
        callbackError(err);
      });
  }, [asyncFunction, callbackError, callbackFn]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    execute,
    status,
    value,
    error,
  };
};

export default useAsync;
