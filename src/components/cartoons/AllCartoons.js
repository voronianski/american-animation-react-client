import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import CartoonsList from './CartoonsList';

export const AllCartoonsQuery = gql`
  query AllCartoonsQuery($name: String, $orderBy: VideoOrderBy) {
    allVideos(name: $name, orderBy: $orderBy) {
      id
      name
      image
      releasedIn
      omdb
    }
  }
`;

const AllCartoons = ({ data: { loading, error, allVideos } }) => {
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
    <div className="all-cartoons">
      <CartoonsList cartoons={allVideos} />
    </div>
  );
};

export default graphql(AllCartoonsQuery, {
  options: props => ({
    variables: {
      orderBy: 'name_ASC'
    }
  })
})(AllCartoons);
