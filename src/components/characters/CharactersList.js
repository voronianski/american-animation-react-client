import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shuffle from 'lodash.shuffle';

import './_characters-list.scss';

function renderImageMosaic(videos) {
  const renderImage = (video, index) => {
    const indexClassMap = [
      'absolute top-0 left-0 tl',
      'absolute top-0 right-0 tr',
      'absolute bottom-0 left-0 bl',
      'absolute bottom-0 right-0 br'
    ];
    const imageClassNames = classNames(
      'characters-list-item-mosaic-image',
      !isNaN(index) ? indexClassMap[index] : 'single'
    );

    return (
      <div
        key={video.id}
        className={imageClassNames}
        style={{ backgroundImage: `url(${video.image || video.omdb.Poster})` }}
      />
    );
  };
  const len = videos.length;

  if (len < 4) {
    return renderImage(videos[Math.floor(Math.random() * len)]);
  }

  return shuffle(videos)
    .slice(0, 4)
    .map(renderImage);
}

const CharactersList = ({ characters }) => {
  return (
    <div className="characters-list clearfix">
      <div className="characters-list-actions" />
      {characters.map(character => (
        <div
          key={character.id}
          className="characters-list-item col col-6 sm-col-4 md-col-3 px2 mb3"
        >
          <Link
            to={`/characters/${character.id}`}
            className="characters-list-item-inner block p2"
          >
            <div className="characters-list-item-overlay absolute top-0 left-0 right-0 bottom-0 z2" />

            {character.videos.length ? (
              <div className="characters-list-item-mosaic absolute top-0 left-0 right-0 bottom-0 z1">
                {renderImageMosaic(character.videos)}
              </div>
            ) : null}

            <div className="characters-list-item-details relative z3">
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
                  <span>
                    {character.videos.length} cartoon
                    {character.videos.length === 1 ? '' : 's'}
                  </span>
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
