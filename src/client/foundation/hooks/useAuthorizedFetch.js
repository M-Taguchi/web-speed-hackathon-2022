import { useCallback, useEffect, useMemo, useState } from "react";

import { useAuth } from "../contexts/AuthContext";

/**
 * @template T
 * @typedef {object} ReturnValues
 * @property {T | null} data
 * @property {Error | null} error
 * @property {boolean} loading
 * @property {() => void} revalidate
 */

/**
 * @template T
 * @param {string} apiPath
 * @param {(apiPath: string, userId: string) => Promise<T>} fetcher
 * @returns {ReturnValues<T>}
 */
export function useAuthorizedFetch(apiPath, fetcher) {
  const { loggedIn, userId } = useAuth();

  const [result, setResult] = useState({
    data: null,
    error: null,
    loading: true,
  });

  const fetch = () => {
    if (!loggedIn) {
      return;
    }

    const promise = fetcher(apiPath, userId);

    promise.then((data) => {
      setResult((cur) => ({
        ...cur,
        data,
        loading: false,
      }));
    });

    promise.catch((error) => {
      setResult((cur) => ({
        ...cur,
        error,
        loading: false,
      }));
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    result,
    revalidate: fetch,
  };
}
