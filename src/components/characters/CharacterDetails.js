import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import ShareButtons from '../ShareButtons';
import CartoonsList from '../cartoons/CartoonsList';

export const CharacterDetailsQuery = gql`
  query CharacterDetailsQuery($characterId: ID!) {
    Character(id: $characterId) {
      id
      name
      createdIn
      studios {
        id
        name
      }
      videos(orderBy: releasedIn_ASC) {
        id
        name
        releasedIn
        omdb
      }
    }
  }
`;

const CharacterDetails = props => {
  const {
    data: { loading, error, Character }
  } = props;

  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  if (!Character) {
    return <div>Empty</div>;
  }

  const shareText = `Watch animated cartoons featuring ${
    Character.name
  } here - `;

  return (
    <div className="character-details">
      <div className="character-details-info px2 mb3">
        <h2 className="character-details-title h1 mt0 mb1">
          <span className="character-details-name top-name">
            {Character.name}{' '}
          </span>
          <span className="character-details-year top-year regular h3">
            ({Character.createdIn})
          </span>
        </h2>

        {Character.studios.length ? (
          <div className="character-details-studios dashed-links md-col-8">
            <span className="caps h6">Studios: </span>
            {Character.studios.map(studio => (
              <Link
                key={studio.id}
                className="character-details-studios-link mr1"
                to={`/studios/${studio.id}`}
              >
                {studio.name}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="character-details-share mt2">
          <ShareButtons url={window.location.href} text={shareText} />
        </div>
      </div>

      {Character.videos.length ? (
        <div className="character-details-videos">
          <CartoonsList cartoons={Character.videos} />
        </div>
      ) : null}
    </div>
  );
};

CharacterDetails.propTypes = {
  id: PropTypes.string.isRequired
};

export default graphql(CharacterDetailsQuery, {
  options: props => ({
    variables: {
      characterId: props.id
    }
  })
})(CharacterDetails);
