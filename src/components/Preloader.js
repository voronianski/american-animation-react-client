import React from 'react';

import preloaderSvg from '../preloader.svg';
import './_preloader.scss';

const Preloader = ({ width }) => (
  <div className="preloader">
    <img
      src={preloaderSvg}
      className="preloader-icon"
      alt="preloader icon"
      width={width}
    />
  </div>
);

export default Preloader;
