import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  NavLink,
  Link,
  HashRouter,
  MemoryRouter,
  withRouter,
  matchPath
} from "react-router-dom";

class courses extends Component {
  render() {
    const match = matchPath(this.props.match.url, {
      path: "/courses/:id"
    });
    console.log(match);
    console.log(this.props.location);
    return (
      <div>
        <div className="">courses</div>
      </div>
    );
  }
}

export default courses;