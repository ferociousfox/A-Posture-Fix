import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import ActivityList from './ActivityList';

function Program(props){
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      <h1>Your Program</h1>
      <div className='flex-container'>
        <ActivityList
          userActivityList={props.userActivityList}
          activityList={props.activityList} />
      </div>
      <style jsx>{`
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify content: space-around;
          flex-direction: column;
          margin: 30px;
        }
      `}</style>
    </div>
  );
}

Program.propTypes = {
  userActivityList: PropTypes.array,
  activityList: PropTypes.object,
};

export default Program;
