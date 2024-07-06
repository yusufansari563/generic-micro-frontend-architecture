// importing the custom hook to a component and fetch the characters

import React from "react";
import { useFetchStarWarsCharacters } from "./useFetchStarWarsCharacters";
import { CharacterList } from "shared";

const StarWarsCharactersContainer: React.FC = () => {
  const [characters, isLoading, error, abort, getCharacters] =
    useFetchStarWarsCharacters();

  return (
    <>
      <button
        onClick={()=>getCharacters()}
      >
        call
      </button>
      <br/>
      <button onClick={()=>abort()}>abort</button>
      <CharacterList
        loading={isLoading}
        error={error}
        characters={characters}
      />
    </>
  );
};

export default StarWarsCharactersContainer;
