import React from 'react';
import { connect } from 'react-redux';

import TitleBar from '../components/TitleBar';
import SelectedCartoons from '../components/cartoons/SelectedCartoons';

export const Favorites = ({ videoIds }) => {
  return (
    <div className="favorites-page">
      <TitleBar title="My Favorites" />
      <SelectedCartoons ids={videoIds} />
    </div>
  );
};

const mapStateToProps = state => ({
  videoIds: state.favoritedCartoons
});

export default connect(mapStateToProps)(Favorites);
