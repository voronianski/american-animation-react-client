import React from 'react';

import config from '../config';
import TitleBar from '../components/TitleBar';
import SelectedCartoons from '../components/cartoons/SelectedCartoons';

const pageDescription = `List of seven animated shorts that were produced during the Golden Age period and feature popular Red character, nightclub singer and dancer created by Tex Avery in MGM studio.`;

const FiftyGreatest = () => (
  <div className="fifty-greatest-page">
    <TitleBar title="Tex Avery's Red" description={pageDescription} />
    <SelectedCartoons ids={config.texAveryRedIds} />
  </div>
);

export default FiftyGreatest;
