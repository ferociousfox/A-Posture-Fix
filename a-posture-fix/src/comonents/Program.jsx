import React from 'react';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import ActivityList from './ActivityList';

function Program(){
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      <h1>Welcome, lets fix that thing you call your back and neck!</h1>
      <ActivityList />
    </div>
  );
}

export default Program;
