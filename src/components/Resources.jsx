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
        <li><a href="https://gokhalemethod.com">The Gokhale Method</a></li>
        <li><a href="https://www.foundationtraining.com">Foundation Training</a></li>
        <li><a href="https://www.movnat.com">Movnat</a></li>

      </ul>
    </div>
  );
}

export default Resources;
