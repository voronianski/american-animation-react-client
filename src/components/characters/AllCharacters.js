import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import MinimalList from '../MinimalList';

export const AllCharactersQuery = gql`
  query AllCharactersQuery($name: String, $orderBy: CharacterOrderBy) {
    allCharacters(name: $name, orderBy: $orderBy) {
      id
      name
      createdIn
      videos {
        id
        omdb
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
      <MinimalList
        data={allCharacters}
        source="characters"
        renderYears={character => character.createdIn}
      />
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
