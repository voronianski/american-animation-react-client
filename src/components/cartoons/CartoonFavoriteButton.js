import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CartoonFavoriteButton = ({ videoId, isFavorited, onToggleFavorite }) => {
  const btnClassNames = classNames(
    'cartoon-details-favorites-btn btn col-12 mt2 h4',
    [isFavorited ? 'btn-outline green' : 'btn-primary bg-green']
  );

  return (
    <button
      type="button"
      className={btnClassNames}
      onClick={() => onToggleFavorite(videoId)}
      title={
        isFavorited
          ? 'Click to remove from favorites'
          : 'Click to add to favorites'
      }
    >
      {isFavorited ? (
        <span>
          <span role="img" aria-label="sparkles emoji">
            ✨{' '}
          </span>
          <span>Added to Favorites</span>
        </span>
      ) : (
        <span>
          <span role="img" aria-label="high voltage emoji">
            ⚡️{' '}
          </span>
          <span>Add to Favorites</span>
        </span>
      )}
    </button>
  );
};

CartoonFavoriteButton.propTypes = {
  videoId: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  onToggleFavorite: PropTypes.func.isRequired
};

export default CartoonFavoriteButton;
