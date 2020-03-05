import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import * as constants from '../src/store/actionTypes'

import LayOut from './components/LayOut/index'
import Login from './pages/Mine/Login'
import ErrorPage from './pages/ErrorPage/index'

import Home from './pages/Home/Home'
import User from './pages/User/User'

import SowingRouter from './pages/Rotation/router'
import CourseRouter from './pages/Course/router'
import MineRouter from './pages/Mine/router'

class App extends Component {
  UNSAFE_componentWillMount () {
    this.props.reqLocalData();
  }
  render() {    
    // 主面板
    let LayOutRouter = (
      <LayOut>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/mine" component={MineRouter}></Route>
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
              this.props.userData ? (props) => LayOutRouter : 
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

const mapDispatchToProps = (dispatch) => {
  return {
    // 获取本地存储的userData，在页面刷新时
    reqLocalData () {
      const userData = JSON.parse(sessionStorage.getItem('userData'));
      console.log(userData);
      dispatch({
        type: constants.INIT_USER_DATA,
        userData
      });
    }
  }
};

const mapStateToProps = (state)=>{
  return {
    userData: state.userData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
