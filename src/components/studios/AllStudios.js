import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import MinimalList from '../MinimalList';

export const AllStudiosQuery = gql`
  query AllStudiosQuery($name: String, $orderBy: StudioOrderBy) {
    allStudios(name: $name, orderBy: $orderBy) {
      id
      name
      foundedIn
      defunctIn
      videos {
        id
        image
        omdb
      }
    }
  }
`;

const AllStudios = ({ data: { loading, error, allStudios } }) => {
  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  if (!allStudios || !allStudios.length) {
    return <div>Empty</div>;
  }

  return (
    <div className="all-studios">
      <MinimalList
        data={allStudios}
        source="studios"
        renderYears={studio => studio.foundedIn}
      />
    </div>
  );
};

export default graphql(AllStudiosQuery, {
  options: props => ({
    variables: {
      orderBy: 'name_ASC'
    }
  })
})(AllStudios);
