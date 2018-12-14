import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

import './_cartoon-video.scss';

class CartoonVideo extends Component {
  constructor() {
    super();

    this.state = {
      ready: false
    };
  }

  render() {
    const { urls } = this.props;

    if (!urls.length) {
      return;
    }

    return (
      <div
        className="cartoon-video"
        style={{
          opacity: this.state.ready ? 1 : 0
        }}
      >
        <ReactPlayer
          url={urls[0]}
          config={{
            dailymotion: {
              params: { 'ui-start-screen-info': false }
            }
          }}
          onReady={() => this.setState({ ready: true })}
          className="video-player"
          width="100%"
          height="100%"
          controls
          pip
        />
      </div>
    );
  }
}

CartoonVideo.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CartoonVideo;
