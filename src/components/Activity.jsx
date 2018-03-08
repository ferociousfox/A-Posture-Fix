import React from 'react';
import PropTypes from 'prop-types';


function Activity(props){
  const { name, purpose, duration, requiredEquipment, description, pitfalls } = props.activityList;
  return(
    <div className='flex-card'>
      <h3>{name}</h3>
      <h4>{purpose}</h4>
      <h5>{duration}</h5>
      <p>Required Equipment: {requiredEquipment}</p>
      <p>{description}</p>
      <p><em>{pitfalls}</em></p>
      <style jsx>{`
        .flex-card {
          padding-top: 20px;
        }
      `}</style>
    </div>
  );
}

Activity.propTypes = {
  activityList: PropTypes.object,
};

export default Activity;
