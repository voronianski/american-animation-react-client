import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './_cartoons-list-item.scss';

class CartoonsListItem extends Component {
  constructor() {
    super();

    this.state = {
      posterLoaded: false
    };
  }

  componentDidMount() {
    this.loadPoster();
  }

  loadPoster(posterLink) {
    const img = new Image();

    img.onload = () => {
      setTimeout(() => {
        this.setState({ posterLoaded: true });
      }, 0);
    };

    img.src = this.props.cartoon.omdb.Poster;
  }

  render() {
    const { cartoon } = this.props;
    const itemClassNames = classNames(
      'cartoons-list-item col col-6 sm-col-4 md-col-3 lg-col-2 px2',
      {
        'poster-loaded': this.state.posterLoaded
      }
    );

    return (
      <div className={itemClassNames}>
        <div className="cartoons-list-item-inner">
          <div
            className="cartoons-list-item-poster mb1"
            style={{ backgroundImage: `url(${cartoon.omdb.Poster})` }}
          />
          <div className="cartoons-list-item-details">
            <div className="cartoons-list-item-name">{cartoon.name}</div>
            <div className="cartoons-list-item-year">{cartoon.releasedIn}</div>
          </div>
        </div>
      </div>
    );
  }
}

CartoonsListItem.propTypes = {
  cartoon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    releasedIn: PropTypes.number.isRequired,
    omdb: PropTypes.object.isRequired
  }).isRequired
};

export default CartoonsListItem;
