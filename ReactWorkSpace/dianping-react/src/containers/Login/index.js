import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import {
  actions as loginActions,
  getUsername,
  getPassword,
  isLogin,
} from "../../redux/modules/login";

class Login extends Component {
  render() {
    const {
      username,
      password,
      isLogin,
      location: { state },
    } = this.props;
    if (isLogin) {
      if (state && state.from) {
        // 跳转到登录页之前的页面
        return <Redirect to={state.from} />;
      }
      return <Redirect to="/user" />;
    }
    return (
      <div className="login">
        <LoginHeader />
        <LoginForm
          username={username}
          password={password}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
  handleChange = (e) => {
    const { loginActions } = this.props;
    if (e.target.name === "username") {
      loginActions.setUsername(e.target.value);
    } else if (e.target.name === "password") {
      loginActions.setPassword(e.target.value);
    }
  };
  handleSubmit = () => {
    this.props.loginActions.login();
  };
}

const mapStateToProps = (state, props) => {
  return {
    username: getUsername(state),
    password: getPassword(state),
    isLogin: isLogin(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
