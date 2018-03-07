import React from 'react';
import PropTypes from 'prop-types';

function Presets(props){

  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.purpose}</h4>
      <h5>{props.duration}</h5>
      <p>{props.requiredEquipment}</p>
      <p>{props.description}</p>
      <p><em>{props.pitfalls}</em></p>
      <button onClick={() => props.onAddingNewActivity(props.id)}>Add Activity</button>
    </div>
  );
}
Presets.propTypes = {
  name: PropTypes.string,
  purpose: PropTypes.string,
  duration: PropTypes.string,
  requiredEquipment: PropTypes.string,
  description: PropTypes.string,
  pitfalls: PropTypes.string,
  id: PropTypes.number,
  onAddingNewActivity: PropTypes.func,
};


export default Presets;
