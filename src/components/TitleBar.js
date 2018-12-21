import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TitleBar = ({ title, description, className }) => (
  <div className={classNames('title-bar px2 mb3', className)}>
    <h2 className="mt0">{title}</h2>
    {description ? <div className="h5 gray">{description}</div> : null}
  </div>
);

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default TitleBar;
