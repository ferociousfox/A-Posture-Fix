import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import Config from './Config';

function Setup(){
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      <Config />
    </div>
  );
}

export default Setup;
