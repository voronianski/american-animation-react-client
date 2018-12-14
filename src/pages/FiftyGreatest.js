import React from 'react';

import config from '../config';
import SelectedCartoons from '../components/cartoons/SelectedCartoons';

const FiftyGreatest = () => (
  <div className="fifty-greatest-page">
    <SelectedCartoons ids={config.fiftyGreatestIds} />
  </div>
);

export default FiftyGreatest;
