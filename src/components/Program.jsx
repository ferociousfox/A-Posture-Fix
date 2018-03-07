import React from 'react';
import Proptypes from 'prop-types';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import ActivityList from './ActivityList';

function Program(props){
  console.log(props.userActivityList);
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      <h1>Welcome, lets fix that thing you call your back and neck!</h1>
      <ActivityList userActivityList={props.userActivityList}  />
    </div>
  );
}

Program.propTypes = {
  userActivityList: Proptypes.any.isRequired,
};

export default Program;
