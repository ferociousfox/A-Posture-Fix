import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import ActivityList from './ActivityList';

function Program(props){
  console.log(props.userActivityList);
  console.log(props.activityList);
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      <h1>Welcome, lets fix that thing you call your back and neck!</h1>
      <ActivityList
        userActivityList={props.userActivityList}
        activityList={props.activityList} />
    </div>
  );
}

Program.propTypes = {
  userActivityList: PropTypes.array,
  activityList: PropTypes.object,
};

export default Program;
