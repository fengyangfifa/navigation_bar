import React, { Component } from "react";
import {
  Route,
  Link,
  NavLink,
  useHistory,
  useRouteMatch,
  Prompt,
} from "react-router-dom";

import test from "./test";
import Mine from "./Mine";
import Table from "./Table";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>home</div>
        <Route path="/test" component={test} />
        <Route path="/mine" component={Mine} />
        <Route path="/table" component={Table} />
        <NavLink
          to="/test"
          activeStyle={{ color: "red" }}
          isActive={(match, location) => {
            console.log("match", match);
            console.log("location", location);
            if (match) {
              return true;
            }
          }}
        >
          test
        </NavLink>
        <NavLink to="/mine">mine</NavLink>
        <NavLink to="/table">table</NavLink>
        <Link
          to={{
            pathname: "/courses",
            search: "?sort=name",
            hash: "#the-hash",
            state: {
              fromDashboard: true,
              hash: false,
            },
          }}
        >
          show
        </Link>
        <Prompt
          when={false}
          message={(location) => {
            console.log("message", location);
            return "你确定要跳转?";
            // return isApp ? `你确定要跳转到${location.pathname}吗？` : true;
          }}
        ></Prompt>
      </div>
    );
  }
}

// function Home(props) {
//   // let history = useHistory();

//   // function handleClick() {
//   //   console.log(history);
//   // }
//   // const match = useRouteMatch('/home');
//   // console.log(match);
//   return (
//     // <div onClick={handleClick}>home</div>
//     // match && <p>123</p>
//     <Route
//       path="/h"
//       render={(props) => {
//         console.log(props);
//         return props.match && <p>123</p>;
//       }}
//     ></Route>
//   );
// }
export default Home;
