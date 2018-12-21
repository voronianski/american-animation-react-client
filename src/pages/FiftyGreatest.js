import React from 'react';

import config from '../config';
import TitleBar from '../components/TitleBar';
import SelectedCartoons from '../components/cartoons/SelectedCartoons';

const FiftyGreatest = () => (
  <div className="fifty-greatest-page">
    <TitleBar
      className="md-col-6 sm-col-12"
      title={config.fiftyGreatest.title}
      description={config.fiftyGreatest.description}
    />
    <SelectedCartoons ids={config.fiftyGreatest.ids} />
  </div>
);

export default FiftyGreatest;
