import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shuffle from 'lodash.shuffle';
import memoize from 'memoize-one';

import './_mosaic-image.scss';

const indexClassMap = [
  'absolute top-0 left-0 tl',
  'absolute top-0 right-0 tr',
  'absolute bottom-0 left-0 bl',
  'absolute bottom-0 right-0 br'
];

class MosaicImageItem extends Component {
  state = {
    loadedImage: false
  };

  componentDidMount() {
    this.preloadImage();
  }

  preloadImage() {
    const img = new Image();
    const done = () =>
      setTimeout(() => {
        this.setState({ loadedImage: true });
      }, 0);

    img.onload = () => done();
    img.onerror = () => done();
    img.src = this.props.source;
  }

  render() {
    const { source, index, length } = this.props;
    const imageClassNames = classNames(
      'mosaic-image',
      length > 4 ? indexClassMap[index] : 'single',
      { loaded: this.state.loadedImage }
    );

    return (
      <div
        className={imageClassNames}
        style={{ backgroundImage: `url(${source})` }}
      />
    );
  }
}

class MosaicImage extends Component {
  getImagesToRender = memoize(images => {
    const imagesLength = images.length;

    if (imagesLength < 4) {
      const randomImage = images[Math.floor(Math.random() * imagesLength)];

      return [randomImage];
    }

    return shuffle(images).slice(0, 4);
  });

  render() {
    const { images, className } = this.props;
    const imagesLength = images.length;
    const imagesToRender = this.getImagesToRender(images);

    return (
      <div className={classNames('mosaic-image-container relative', className)}>
        {imagesToRender.map((image, index) => (
          <MosaicImageItem
            key={image.id}
            source={image.src}
            index={index}
            length={imagesLength}
          />
        ))}
      </div>
    );
  }
}

MosaicImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MosaicImage;
