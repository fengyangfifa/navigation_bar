import React from "react";
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

import Home from "./components/Home";
import Mine from "./components/Mine";
import Table from "./components/Table";
import User from "./components/User";
import courses from "./components/courses";

const locs = {
  test: 13
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/base" location={'pathname', '132'}>
        <Switch>
          <Route path="/courses/:id" strict component={courses}></Route>
          <Route path="/" component={Home}></Route>
          <Route path="/table" component={Table}></Route>
          <Route path="/test" component={User}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route component={User} />
          {/* <Redirect to="/table"></Redirect> */}
          {/* <Route path="/mine/add" component={User}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
