import React from 'react';
import Activity from './Activity';
import PropTypes from 'prop-types';


function ActivityList(props){
  console.log(props.userActivityList);
  console.log(props.activityList);
  return(
    <div>
      {props.userActivityList.map((key, i) => {
        console.log(props.activityList[key]);
        return <Activity
          activityList={props.activityList[key]}
          key={i}/>
      })}
    </div>
  );
}

ActivityList.propTypes = {
  userActivityList: PropTypes.any,
  activityList: PropTypes.any,

};
export default ActivityList;
