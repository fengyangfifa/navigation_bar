import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import SowingAdd from './SowingAdd'
import SowingList from './SowingList'
import SowingEdit from './SowingEdit'

class SowingRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path="/sowing/list" component={SowingList}></Route>
        <Route path="/sowing/add" component={SowingAdd}></Route>
        <Route path="/sowing/edit" component={SowingEdit}></Route>
        <Redirect exact from="/sowing" to="/sowing/list"></Redirect>
      </Switch>
    )
  }
}

export default SowingRouter;
