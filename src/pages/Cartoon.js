import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartoonDetails from '../components/cartoons/CartoonDetails';
import { addFavoritedCartoon, removeFavoritedCartoon } from '../store/actions';

class Cartoon extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      match,
      isFavorited,
      addFavoritedCartoon,
      removeFavoritedCartoon
    } = this.props;

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
  }
}

const mapStateToProps = ({ favoritedCartoons }, { match }) => ({
  isFavorited: favoritedCartoons.includes(match.params.id)
});

export default connect(
  mapStateToProps,
  { addFavoritedCartoon, removeFavoritedCartoon }
)(Cartoon);
