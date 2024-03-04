import { useEffect, useState } from "react";

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export default function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: signal, ...options });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = (await response.json()) as T;
        if (!signal.aborted) setData(data);
      } catch (error) {
        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, loading, error };
}
