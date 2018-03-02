import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Program from './Program';
import Setup from './Setup';
import Examples from './Examples';
import Resources from './Resources';

function UIContainer(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Program}/>
        <Route path='/setup' component={Setup}/>
        <Route path='/examples' component={Examples}/>
        <Route path='/resources' component={Resources}/>
      </Switch>
    </div>
  );
}

export default UIContainer;
