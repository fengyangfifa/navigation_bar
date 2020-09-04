import React, { Component } from "react";
import { Route } from "react-router-dom";

import UserDetail from "./UserDetail";

class User extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route path={`${match.path}/:user`} component={UserDetail} />
        <p>User test</p>
      </div>
    );
  }
}

export default User;
