import React from 'react';

import TitleBar from '../components/TitleBar';
import AllStudios from '../components/studios/AllStudios';

const Studios = () => {
  return (
    <div className="studios-page container-inner-narrow mx-auto">
      <TitleBar title="All Studios" />
      <AllStudios />
    </div>
  );
};

export default Studios;
