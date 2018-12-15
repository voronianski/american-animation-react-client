import React from 'react';

import CharacterDetails from '../components/characters/CharacterDetails';

const Character = ({ match }) => {
  return (
    <div className="character-page">
      <CharacterDetails id={match.params.id} />
    </div>
  );
};

export default Character;
