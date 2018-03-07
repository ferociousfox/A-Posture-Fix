import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Program from './Program';
import SetUp from './SetUp';
import Examples from './Examples';
import Resources from './Resources';
import masterList from './data';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activitiesById: masterList,
      userActivities: []
    };
    this.handleAddingNewActivity = this.handleAddingNewActivity.bind(this);
    console.log(this.state);
  }

  handleAddingNewActivity(activityId){
    let newUserActivities = this.state.userActivities;
    newUserActivities.push(activityId);
    console.log(newUserActivities);
    this.setState({userActivities: newUserActivities});


  }
  render(){
    return(

      <div>
        <Switch>
          <Route exact path='/' render={() =>
            <Program userActivityList={this.state.userActivities} /> }/>
          <Route path='/setup' render={() =>
            <SetUp
              activityList={this.state.activitiesById}
              onAddingNewActivity={this.handleAddingNewActivity}/> }/>
          <Route path='/examples' component={Examples}/>
          <Route path='/resources' component={Resources}/>
        </Switch>
      </div>
    );

  }
}

export default App;
