import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Mine from './Mine'
import ResetPwd from './ResetPwd'

class MineRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path="/mine/main" component={Mine}></Route>
        <Route path="/mine/reset" component={ResetPwd}></Route>
        <Redirect exact from="/mine" to="/mine/main"></Redirect>
      </Switch>
    )
  }
}

export default MineRouter;
