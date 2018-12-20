import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shuffle from 'lodash.shuffle';

import './_mosaic-image.scss';

const renderImage = (image, index) => {
  const indexClassMap = [
    'absolute top-0 left-0 tl',
    'absolute top-0 right-0 tr',
    'absolute bottom-0 left-0 bl',
    'absolute bottom-0 right-0 br'
  ];
  const imageClassNames = classNames(
    'mosaic-image',
    !isNaN(index) ? indexClassMap[index] : 'single'
  );

  return (
    <div
      key={image.id}
      className={imageClassNames}
      style={{ backgroundImage: `url(${image.src})` }}
    />
  );
};

const MosaicImage = ({ images }) => {
  const imagesLength = images.length;

  return (
    <div className="mosaic-image-container relative">
      {imagesLength < 4
        ? renderImage(images[Math.floor(Math.random() * imagesLength)])
        : shuffle(images)
            .slice(0, 4)
            .map(renderImage)}
    </div>
  );
};

MosaicImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MosaicImage;
