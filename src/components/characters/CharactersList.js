import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './_characters-list.scss';

const CharactersList = ({ characters }) => {
  return (
    <div className="characters-list clearfix">
      <div className="characters-list-actions" />
      {characters.map(character => (
        <div
          key={character.id}
          className="characters-list-item col col-6 sm-col-4 md-col-3 lg-col-2 px2 mb3"
        >
          <Link
            to={`/characters/${character.id}`}
            className="characters-list-item-inner block p2 rounded"
            style={{ backgroundImage: `url(${character.images[0]})` }}
          >
            <div className="characters-list-item-overlay absolute top-0 left-0 right-0 bottom-0 z1 rounded" />
            <div className="characters-list-item-details relative z2">
              <h3 className="characters-list-item-title h4 mt0">
                <span className="characters-list-item-name">
                  {character.name}{' '}
                </span>
                <span className="characters-list-item-year regular h6">
                  ({character.createdIn})
                </span>
              </h3>
              {character.videos.length ? (
                <div className="characters-list-item-videos caps">
                  <span role="img" aria-label="high voltage emoji">
                    ⚡️
                  </span>
                  <span>{character.videos.length} cartoons</span>
                </div>
              ) : null}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
};

CharactersList.defaultProps = {
  characters: []
};

export default CharactersList;
