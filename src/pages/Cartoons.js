import React from 'react';
import GreatestCartoons from '../components/cartoons/GreatestCartoons';

/*
  Top bar:
  - input - search field by name
  - select - choose list:
    - suggested cartoons (based on 50 greatest) - default
    - my favorites
  - select - filter by studio
    - mgm
    - warner
    - etc.
  - select - filter by character
    - mgm
    - warner
    - etc.
*/

const Cartoons = () => (
  <div className="cartoons-page">
    <GreatestCartoons />
  </div>
);

export default Cartoons;
