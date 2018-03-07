import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Nav from './Nav';
import posture from '../assets/images/evolve.jpg';
import Presets from './Presets';

function SetUp(props){
  return(
    <div>
      <div>
        <Hero heroImage={posture} />
        <Nav/>
      </div>
      {Object.keys(props.activityList).map(function(activityId, key) {
        let activity = props.activityList[activityId];
        return <Presets
          key={key}
          id={parseInt(activityId)}
          name={activity.name}
          purpose={activity.purpose}
          duration={activity.duration}
          requiredEquipment={activity.requiredEquipment}
          description={activity.description}
          pitfalls={activity.pitfalls}
          onAddingNewActivity={props.onAddingNewActivity} />;
      })}
    </div>
  );
}

SetUp.propTypes = {
  activityList: PropTypes.object,
  onAddingNewActivity: PropTypes.func,
};

export default SetUp;
