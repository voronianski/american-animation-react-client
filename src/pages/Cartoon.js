import React from 'react';

import CartoonDetails from '../components/cartoons/CartoonDetails';

const Cartoon = ({ match }) => {
  const personId = match.params.id;

  return (
    <div className="cartoon-page">
      <CartoonDetails id={personId} />
    </div>
  );
};

export default Cartoon;
