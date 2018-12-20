import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MosaicImage from './MosaicImage';

import './_minimal-list.scss';

const MinimalList = ({ data, source, renderYears }) => {
  return (
    <div className="minimal-list clearfix">
      {data.map(item => {
        const videosLength = item.videos.length;

        return (
          <div
            key={item.id}
            className="minimal-list-item col col-6 sm-col-4 md-col-3 px2 mb3"
          >
            <Link
              to={`/${source}/${item.id}`}
              className="minimal-list-item-inner block p2"
            >
              <div className="minimal-list-item-overlay absolute top-0 left-0 right-0 bottom-0 z2" />

              {videosLength ? (
                <div className="minimal-list-mosaic absolute top-0 left-0 right-0 bottom-0 z1">
                  <MosaicImage
                    images={item.videos.map(video => ({
                      id: video.id,
                      src: video.image || video.omdb.Poster
                    }))}
                  />
                </div>
              ) : null}

              <div className="minimal-list-item-details relative z3">
                <h3 className="minimal-list-item-title h4 mt0">
                  <span className="minimal-list-item-name">{item.name} </span>
                  <span className="minimal-list-item-year regular h6">
                    ({renderYears(item)})
                  </span>
                </h3>

                {videosLength ? (
                  <div className="minimal-list-item-video-counter caps">
                    <span role="img" aria-label="high voltage emoji">
                      ⚡️
                    </span>
                    <span>
                      {videosLength} cartoon
                      {videosLength === 1 ? '' : 's'}
                    </span>
                  </div>
                ) : null}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

MinimalList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  source: PropTypes.string.isRequired,
  renderYears: PropTypes.func.isRequired
};

MinimalList.defaultProps = {
  data: []
};

export default MinimalList;
