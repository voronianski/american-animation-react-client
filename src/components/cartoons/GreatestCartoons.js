import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import config from '../../config';
import CartoonsList from './CartoonsList';

export const GreatestCartoonsQuery = gql`
  query GreatestCartoonsQuery($videoIds: [ID!]) {
    allVideos(selectIds: $videoIds) {
      id
      name
      releasedIn
      omdb
    }
  }
`;

const GreatestCartoons = ({ data: { loading, error, allVideos } }) => {
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
    <div className="greatest-cartoons">
      <CartoonsList cartoons={allVideos} />
    </div>
  );
};

export default graphql(GreatestCartoonsQuery, {
  options: () => ({
    variables: {
      videoIds: [...config.fiftyGreatestIds]
    }
  })
})(GreatestCartoons);
