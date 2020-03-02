import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import LayOut from './components/LayOut/index'
import Login from './pages/User/Login'
import ErrorPage from './pages/ErrorPage/index'

import Home from './pages/Home/Home'
import User from './pages/User/User'
import Mine from './pages/Mine/Mine'

import SowingRouter from './pages/Rotation/router'
import CourseRouter from './pages/Course/router'

class App extends Component {
  render() {
    // 取出本地的用户信息
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    // 主面板
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/sowing" component={SowingRouter}></Route>
          <Route path="/course" component={CourseRouter}></Route>
          {/* 没有匹配到路径就进入ErrorPage页面 */}
          <Route component={ErrorPage}></Route>
        </Switch>
      </LayOut>
    );
    return (
      <Router>
        <Switch>
          <Route 
            exact 
            path="/"
            render={
              userData ? (props) => LayOutRouter : 
              () => <Redirect to="/login" push></Redirect>
            }
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" render={props => LayOutRouter}></Route>
        </Switch>
      </Router>
    );    
  }
}

export default App;
