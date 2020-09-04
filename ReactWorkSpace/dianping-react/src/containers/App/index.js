import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AsyncComponent from "../../utils/AsyncComponent";
import ErrorToast from "../../components/ErrorToast";
import { actions as appActions, getError } from "../../redux/modules/app";

import PrivateRoute from "../PrivateRoute";

// import("../ProductDetail"), import是一个运算符, 返回的是一个promise对象
// 按需加载
const Home = AsyncComponent(() => import("../Home"));
const ProductDetail = AsyncComponent(() => import("../ProductDetail"));
const Search = AsyncComponent(() => import("../Search"));
const SearchResult = AsyncComponent(() => import("../SearchResult"));
const Login = AsyncComponent(() => import("../Login"));
const User = AsyncComponent(() => import("../User"));
const Purchase = AsyncComponent(() => import("../Purchase"));
// const Home = () => import("../Home");
// const ProductDetail = () => import("../ProductDetail");
// const Search = () => import("../Search");
// const SearchResult = () => import("../SearchResult");
// const Login = () => import("../Login");
// const User = () => import("../User");
// const Purchase = () => import("../Purchase");

// 首页全部加载
// import Home from "../Home";
// import ProductDetail from "../ProductDetail";
// import Search from "../Search";
// import SearchResult from "../SearchResult";
// import Login from "../Login";
// import User from "../User";
// import Purchase from "../Purchase";

class App extends Component {
  render() {
    const {
      error,
      appActions: { clearError },
    } = this.props;
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute path="/purchase/:id" component={Purchase} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/user" component={User} />
            <Route path="/detail/:id" exact component={ProductDetail} />
            <Route path="/search_result" component={SearchResult} />
            <Route path="/search" component={Search} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
        {error ? <ErrorToast msg={error} clearError={clearError} /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: getError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
