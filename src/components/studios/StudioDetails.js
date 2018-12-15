import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import ShareButtons from '../ShareButtons';
import CartoonsList from '../cartoons/CartoonsList';

export const StudioDetailsQuery = gql`
  query StudioDetailsQuery($studioId: ID!) {
    Studio(id: $studioId) {
      id
      name
      foundedIn
      defunctIn
      wikiUrl
      characters {
        id
        name
      }
      videos(orderBy: releasedIn_ASC) {
        id
        name
        poster
        releasedIn
        omdb
      }
    }
  }
`;

const StudioDetails = props => {
  const {
    data: { loading, error, Studio }
  } = props;

  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  if (!Studio) {
    return <div>Empty</div>;
  }

  const shareText = `Watch animated cartoons produced by ${
    Studio.name
  } here - `;

  console.log(Studio);

  return (
    <div className="studio-details">
      <div className="studio-details-info md-col-6 px2 mb3">
        <h2 className="studio-details-title h1 mt0 mb1">
          <span className="studio-details-name top-name">{Studio.name} </span>
          <span className="studio-details-year top-year regular h3">
            ({Studio.foundedIn} - {Studio.defunctIn || '...'})
          </span>
        </h2>

        {Studio.characters.length ? (
          <div className="studio-details-characters dashed-links">
            <span className="caps h6">Characters: </span>
            {Studio.characters.map(character => (
              <Link
                key={character.id}
                className="studio-details-characters-link mr1"
                to={`/characters/${character.id}`}
              >
                {character.name}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="studio-details-share mt2">
          <ShareButtons url={window.location.href} text={shareText} />
        </div>
      </div>

      {Studio.videos.length ? (
        <div className="studio-details-videos">
          <CartoonsList cartoons={Studio.videos} />
        </div>
      ) : null}
    </div>
  );
};

StudioDetails.propTypes = {
  id: PropTypes.string.isRequired
};

export default graphql(StudioDetailsQuery, {
  options: props => ({
    variables: {
      studioId: props.id
    }
  })
})(StudioDetails);
