import React from 'react';
import PropTypes from 'prop-types';


function Activity(props){
  const { name, purpose, duration, requiredEquipment, description, pitfalls } = props.activityList;
  console.log(props.activityList);
  return(
    <div>
      <h3>{name}</h3>
      <h4>{purpose}</h4>
      <h5>{duration}</h5>
      <p>{requiredEquipment}</p>
      <p>{description}</p>
      <p><em>{pitfalls}</em></p>
    </div>
  );
}

Activity.propTypes = {
  activityList: PropTypes.object,
};

export default Activity;
