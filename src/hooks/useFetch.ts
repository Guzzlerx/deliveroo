import { useCallback, useState } from "react";
import { sanityClient } from "api/groq/sanityClient";

export const useFetch = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const request = useCallback(async (url: string, params?: object) => {
    setIsFetching(true);

    try {
      const data = await sanityClient.fetch(url, params);

      setIsFetching(false);
      return data;
    } catch (err: any) {
      setIsFetching(false);
      throw new Error(err.message);
    }
  }, []);

  return { isFetching, request };
};
