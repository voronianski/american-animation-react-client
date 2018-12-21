import React from 'react';

import config from '../config';
import TitleBar from '../components/TitleBar';
import SelectedCartoons from '../components/cartoons/SelectedCartoons';

const FiftyGreatest = () => (
  <div className="fifty-greatest-page">
    <TitleBar
      className="md-col-6 sm-col-12"
      title={config.texAveryRed.title}
      description={config.texAveryRed.description}
    />
    <SelectedCartoons ids={config.texAveryRed.ids} />
  </div>
);

export default FiftyGreatest;
