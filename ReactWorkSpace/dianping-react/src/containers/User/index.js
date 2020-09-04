import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import UserMain from "./containers/UserMain";
import UserHeader from "./components/UserHeader";
import {
  actions as UserActions,
  getOrders,
  getCurrentTab,
} from "../../redux/modules/user";
import { actions as loginActions } from "../../redux/modules/login";

class User extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="user">
        <UserHeader onBack={this.handleBack} onLogout={this.handleLogout} />
        <UserMain data={orders} />
      </div>
    );
  }
  handleBack = () => {
    this.props.history.push("/");
  };
  handleLogout = () => {
    this.props.loginActions.logout();
  };
  componentDidMount() {
    this.props.UserActions.loadOrders();
  }
}

const mapStateToProps = (state, props) => {
  return {
    orders: getOrders(state),
    currentTab: getCurrentTab(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UserActions: bindActionCreators(UserActions, dispatch),
    loginActions: bindActionCreators(loginActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
