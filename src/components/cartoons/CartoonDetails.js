import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import nprogress from 'nprogress';

import ShareButtons from '../ShareButtons';
import CartoonVideo from './CartoonVideo';
import CartoonFavoriteButton from './CartoonFavoriteButton';

import './_cartoon-details.scss';

export const CartoonDetailsQuery = gql`
  query CartoonDetailsQuery($videoId: ID!) {
    Video(id: $videoId) {
      id
      name
      directedBy
      releasedIn
      studio {
        id
        name
      }
      characters {
        id
        name
      }
      links
      imdbUrl
      omdb
    }
  }
`;

const CartoonDetails = props => {
  const {
    data: { loading, error, Video },
    isFavorited,
    onToggleFavorite
  } = props;

  if (loading) {
    nprogress.start();
    return null;
  }

  nprogress.done();

  if (error) {
    return <div>Error!</div>;
  }

  if (!Video) {
    return <div>Empty</div>;
  }

  const shareText = `Watch animated cartoon "${Video.name}" (${
    Video.releasedIn
  }) by ${Video.directedBy} here - `;

  return (
    <div className="cartoon-details">
      <h2 className="cartoon-details-title h1 mt0 mb2">
        <span className="cartoon-details-name top-name">{Video.name} </span>
        <span className="cartoon-details-year top-year regular h3">
          ({Video.releasedIn})
        </span>
      </h2>

      <div className="cartoon-details-inner md-flex">
        <div className="flex-none mr3 mb2">
          <div className="cartoon-details-sidebar">
            {Video.omdb.Poster ? (
              <div className="cartoon-details-poster">
                <img src={Video.omdb.Poster} alt="cartoon poster" />
              </div>
            ) : null}

            {onToggleFavorite ? (
              <CartoonFavoriteButton
                videoId={Video.id}
                isFavorited={isFavorited}
                onToggleFavorite={onToggleFavorite}
              />
            ) : null}

            <div className="cartoon-details-share center mt2">
              <ShareButtons url={window.location.href} text={shareText} />
            </div>
          </div>
        </div>

        <div className="flex-auto">
          <div className="cartoon-details-info h5 dashed-links">
            <div>
              <span className="caps h6">Studio: </span>
              <Link to={`/studios/${Video.studio.id}`}>
                {Video.studio.name}
              </Link>
            </div>

            <div>
              <span className="caps h6">Director: </span>
              <span>{Video.directedBy}</span>
            </div>

            {Video.omdb.Runtime ? (
              <div>
                <span className="caps h6">Runtime: </span>
                <span>{Video.omdb.Runtime}</span>
              </div>
            ) : null}

            {Video.omdb.Released ? (
              <div>
                <span className="caps h6">Released: </span>
                <span>{Video.omdb.Released}</span>
              </div>
            ) : null}

            {Video.characters.length ? (
              <div className="cartoon-details-characters">
                <span className="caps h6">Features: </span>
                {Video.characters.map(character => (
                  <Link
                    key={character.id}
                    className="cartoon-details-characters-link mr1"
                    to={`/characters/${character.id}`}
                  >
                    {character.name}
                  </Link>
                ))}
              </div>
            ) : null}

            {Video.omdb.Plot ? (
              <div className="cartoon-details-plot h4 mt2 gray">
                {Video.omdb.Plot}
              </div>
            ) : null}

            <div className="mt3">
              <CartoonVideo urls={Video.links} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartoonDetails.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  onToggleFavorite: PropTypes.func
};

export default graphql(CartoonDetailsQuery, {
  options: props => ({
    variables: {
      videoId: props.id
    }
  })
})(CartoonDetails);
