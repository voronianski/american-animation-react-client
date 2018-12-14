import React from 'react';

const Studio = ({ match }) => {
  const studioId = match.params.id;

  return <div className="studio-page">Studio details {studioId}...</div>;
};

export default Studio;
