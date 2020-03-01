import React, { Component } from 'react'
import LKHeader from '../Header/LKHeader'
import LKAside from '../Aside/LKAside'

class LayOut extends Component {
  render() {
    return (
      <div>
        <LKHeader />
        <div className="main">
          <LKAside />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default LayOut;

// {
//   routes.map((route, key) => {
//     if (route.exact) {
//       return (
//         <Route
//           key={key}
//           exact
//           path={route.path}
//           render={props => (
//             <route.component {...props} />
//           )}
//         />
//       );
//     } else {
//       return (
//         <Route
//           key={key}
//           path={route.path}
//           render={props => (
//             <route.component {...props} />
//           )}
//         />
//       );
//     }
//   })
// }
