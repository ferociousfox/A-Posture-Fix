import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';

function Resources(){
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li>...</li>
      </ul>
    </div>
  );
}

export default Resources;
