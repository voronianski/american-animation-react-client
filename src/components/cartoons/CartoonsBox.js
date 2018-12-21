import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Preloader from '../Preloader';
import MosaicImage from '../MosaicImage';

import './_cartoons-box.scss';

export const CartoonsBoxQuery = gql`
  query CartoonsBoxQuery($videoIds: [ID!]) {
    allVideos(selectIds: $videoIds) {
      id
      name
      image
      omdb
    }
  }
`;

const CartoonsBox = ({ data: { loading, allVideos }, className }) => {
  return (
    <div className="cartoons-box">
      {loading ? <Preloader width="50" /> : null}

      {allVideos && allVideos.length ? (
        <MosaicImage
          className="rounded"
          images={allVideos.map(video => ({
            id: video.id,
            src: video.image || video.omdb.Poster
          }))}
        />
      ) : null}
    </div>
  );
};

CartoonsBox.propTypes = {
  ids: PropTypes.array
};

CartoonsBox.defaultProps = {
  ids: []
};

export default graphql(CartoonsBoxQuery, {
  options: props => ({
    variables: {
      videoIds: props.ids
    }
  })
})(CartoonsBox);
