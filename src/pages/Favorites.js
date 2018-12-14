import React from 'react';
import { connect } from 'react-redux';

import SelectedCartoons from '../components/cartoons/SelectedCartoons';

export const Favorites = ({ videoIds }) => {
  return (
    <div className="favorites-page">
      <SelectedCartoons ids={videoIds} />
    </div>
  );
};

const mapStateToProps = state => ({
  videoIds: state.favoritedCartoons
});

export default connect(mapStateToProps)(Favorites);
