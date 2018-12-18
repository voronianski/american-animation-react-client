import React from 'react';

import TitleBar from '../components/TitleBar';
import AllCharacters from '../components/characters/AllCharacters';

const Characters = () => {
  return (
    <div className="characters-page container-inner-narrow mx-auto">
      <TitleBar title="All Characters" />
      <AllCharacters />
    </div>
  );
};

export default Characters;
