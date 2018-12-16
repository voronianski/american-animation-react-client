import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import CartoonsList from './CartoonsList';

export const SelectedCartoonsQuery = gql`
  query SelectedCartoonsQuery($videoIds: [ID!]) {
    allVideos(selectIds: $videoIds) {
      id
      name
      image
      releasedIn
      omdb
    }
  }
`;

const SelectedCartoons = ({ data: { loading, error, allVideos } }) => {
  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  if (!allVideos || !allVideos.length) {
    return <div>Empty</div>;
  }

  return (
    <div className="selected-cartoons">
      <CartoonsList cartoons={allVideos} />
    </div>
  );
};

SelectedCartoons.propTypes = {
  ids: PropTypes.array.isRequired
};

export default graphql(SelectedCartoonsQuery, {
  options: props => ({
    variables: {
      videoIds: props.ids
    }
  })
})(SelectedCartoons);
