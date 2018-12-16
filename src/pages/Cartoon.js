import React from 'react';
import { connect } from 'react-redux';

import CartoonDetails from '../components/cartoons/CartoonDetails';
import { addFavoritedCartoon, removeFavoritedCartoon } from '../store/actions';

const Cartoon = props => {
  const {
    match,
    isFavorited,
    addFavoritedCartoon,
    removeFavoritedCartoon
  } = props;

  window.scrollTo(0, 0);

  return (
    <div className="cartoon-page container-inner-narrow mx-auto">
      <CartoonDetails
        id={match.params.id}
        isFavorited={isFavorited}
        onToggleFavorite={videoId => {
          if (isFavorited) {
            removeFavoritedCartoon(videoId);
          } else {
            addFavoritedCartoon(videoId);
          }
        }}
      />
    </div>
  );
};

const mapStateToProps = ({ favoritedCartoons }, { match }) => ({
  isFavorited: favoritedCartoons.includes(match.params.id)
});

export default connect(
  mapStateToProps,
  { addFavoritedCartoon, removeFavoritedCartoon }
)(Cartoon);
