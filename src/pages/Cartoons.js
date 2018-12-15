import React from 'react';

import TitleBar from '../components/TitleBar';
import AllCartoons from '../components/cartoons/AllCartoons';

const Cartoons = () => (
  <div className="cartoons-page">
    <TitleBar title="All Cartoons" />
    <AllCartoons />
  </div>
);

export default Cartoons;
