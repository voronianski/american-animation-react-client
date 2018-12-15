import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from 'react-share';

import './_share-buttons.scss';

const ShareButtons = ({ url, text }) => (
  <span className="share-buttons">
    <span className="share-buttons-facebook inline-block mr1">
      <FacebookShareButton url={url} quote={text} className="share-buttons-btn">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </span>
    <span className="share-buttons-twitter inline-block mr1">
      <TwitterShareButton url={url} title={text} className="share-buttons-btn">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </span>
    <span className="share-buttons-email inline-block">
      <EmailShareButton
        url={url}
        subject={text}
        body={url}
        className="share-buttons-btn"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </span>
  </span>
);

ShareButtons.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ShareButtons;
