import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import LayOut from './components/LayOut/index'
import Login from './pages/User/Login'

import Home from './pages/Home/Home'
import User from './pages/User/User'
import Mine from './pages/Mine/Mine'

import SowingRouter from './pages/Rotation/router'
import CourseRouter from './pages/Course/router'

class App extends Component {
  render() {
    // 主面板
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/sowing" component={SowingRouter}></Route>
          <Route path="/course" component={CourseRouter}></Route>
        </Switch>
      </LayOut>
    );
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" render={props => LayOutRouter}></Route>
          </Switch>
        </Router>
      </Provider>      
    );    
  }
}

export default App;
