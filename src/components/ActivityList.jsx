import React from 'react';
import Activity from './Activity';
import PropTypes from 'prop-types';


function ActivityList(props){
  return(
    <div>
      {props.userActivityList.map((key, i) => {
        return <Activity
          activityList={props.activityList[key]}
          key={i}/>;
      })}
    </div>
  );
}

ActivityList.propTypes = {
  userActivityList: PropTypes.any,
  activityList: PropTypes.any,

};
export default ActivityList;
