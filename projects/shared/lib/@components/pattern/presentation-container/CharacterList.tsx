// the component is responsible for displaying the characters

import React from "react";


interface CharacterListProps {
  loading: boolean;
  error: boolean;
  characters: any[];
}

const CharacterList = ({
  loading,
  error,
  characters,
}:any) => {
  if (loading && !error) return <div>Loading...</div>;
  if (!loading && error)
    return <div>error occurred.unable to load characters</div>;
  if (!characters) return null;

  return (
    <ul>
      {characters.map((user:any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default CharacterList;