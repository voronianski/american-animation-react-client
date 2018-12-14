import React from 'react';

const Character = ({ match }) => {
  const characterId = match.params.id;

  return (
    <div className="character-page">Character details {characterId}...</div>
  );
};

export default Character;
