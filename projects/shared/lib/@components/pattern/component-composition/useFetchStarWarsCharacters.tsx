// creating a custom hook that fetches star wars characters

import { useEffect, useState, useCallback } from "react";

export const useFetchStarWarsCharacters = ():any => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const controller = new AbortController();

  const getCharacters =async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json",
        {
          method: "GET",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          signal: controller.signal,
        }
      );
      const data = await response.json();
      setIsLoading(false);
      if (!data) return;
      setCharacters(data);
    } catch (err) {
      setError(true);
    }
  }

  // useEffect(() => {
  //   getCharacters();
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  const abort = () => {
    controller.abort();
  }

  return [characters, isLoading, error, abort, getCharacters];
};
