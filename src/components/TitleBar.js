import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({ title, description }) => (
  <div className="title-bar ml2 mb3 col-6">
    <h2 className="mt0">{title}</h2>
    {description ? <div className="h5 gray">{description}</div> : null}
  </div>
);

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default TitleBar;
