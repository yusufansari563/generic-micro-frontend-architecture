import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCharacters = async () => {
    setIsLoading((i)=> !i);
    try {
      const response = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json",
      );
      const data = await response.json();
      setIsLoading((i)=> !i);
      if (!data) return;
      setCharacters(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CharacterList loading={isLoading} error={error} characters={characters} />
  );
};

export default StarWarsCharactersContainer;