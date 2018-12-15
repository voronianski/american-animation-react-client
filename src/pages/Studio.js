import React from 'react';

import StudioDetails from '../components/studios/StudioDetails';

const Studio = ({ match }) => {
  return (
    <div className="studio-page">
      <StudioDetails id={match.params.id} />
    </div>
  );
};

export default Studio;
