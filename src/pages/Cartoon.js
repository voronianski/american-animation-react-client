import React from 'react';

import CartoonDetails from '../components/cartoons/CartoonDetails';

const Cartoon = ({ match }) => {
  const videoId = match.params.id;

  return (
    <div className="cartoon-page container-inner-narrow mx-auto">
      <CartoonDetails id={videoId} />
    </div>
  );
};

export default Cartoon;
