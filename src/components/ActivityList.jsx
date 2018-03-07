import React from 'react';
import Activity from './Activity';
import PropTypes from 'prop-types';


function ActivityList(props){
  return(
    <div>
      {props.userActivityList.map((activity, index) =>
        <Activity
          name={activity.name}
          purpose={activity.purpose}
          duration={activity.duration}
          requiredEquipment={activity.requiredEquipment}
          description={activity.description}
          pitfalls={activity.pitfalls}
          key={index}/>

      )}
    </div>
  );
}

ActivityList.propTypes = {
  userActivityList: PropTypes.any,
};
export default ActivityList;
