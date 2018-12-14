import React from 'react';

import config from '../config';
import TitleBar from '../components/TitleBar';
import SelectedCartoons from '../components/cartoons/SelectedCartoons';

const pageDescription = `List of animated shorts from the Golden Age period that were mentioned in the book "The 50 Greatest Cartoons: As Selected by 1,000 Animation Professionals" by Jerry Beck (1994).`;

const FiftyGreatest = () => (
  <div className="fifty-greatest-page">
    <TitleBar title="The 50 Greatest Cartoons" description={pageDescription} />
    <SelectedCartoons ids={config.fiftyGreatestIds} />
  </div>
);

export default FiftyGreatest;
