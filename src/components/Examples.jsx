import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import Tools from './Tools';


function Examples(){
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
        <h1>Here are some Examples of Great Posture</h1>
      </div>
      <Tools/>
    </div>
  );
}

export default Examples;
