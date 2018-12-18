import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import CharactersList from './CharactersList';

export const AllCharactersQuery = gql`
  query AllCharactersQuery($name: String, $orderBy: CharacterOrderBy) {
    allCharacters(name: $name, orderBy: $orderBy) {
      id
      name
      images
      createdIn
      videos {
        id
        image
      }
    }
  }
`;

const AllCharacters = ({ data: { loading, error, allCharacters } }) => {
  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  if (!allCharacters || !allCharacters.length) {
    return <div>Empty</div>;
  }

  return (
    <div className="all-characters">
      <CharactersList characters={allCharacters} />
    </div>
  );
};

export default graphql(AllCharactersQuery, {
  options: props => ({
    variables: {
      orderBy: 'name_ASC'
    }
  })
})(AllCharacters);
