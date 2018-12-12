import React from 'react';
import PropTypes from 'prop-types';

import CartoonsListItem from './CartoonsListItem';

const CartoonsList = ({ cartoons }) => {
  return (
    <div className="cartoons-list clearfix">
      {cartoons.map(cartoon => (
        <CartoonsListItem key={cartoon.id} cartoon={cartoon} />
      ))}
    </div>
  );
};

CartoonsList.propTypes = {
  cartoons: PropTypes.arrayOf(PropTypes.object)
};

CartoonsList.defaultProps = {
  cartoons: []
};

export default CartoonsList;
