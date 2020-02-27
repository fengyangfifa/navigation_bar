import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import routes from './router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import LKHeader from './components/Header/LKHeader'
import LKAside from './components/Aside/LKAside'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <LKHeader />
          <div className="main">
            <LKAside />
            {
              routes.map((route, key) => {
                if (route.exact) {
                  return (
                    <Route
                      key={key} 
                      exact
                      path={route.path} 
                      render={props => (
                        <route.component {...props}/>
                      )}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={key} 
                      path={route.path} 
                      render={props => (
                        <route.component {...props}/>
                      )}
                    />
                  );
                }
              })
            }
          </div>
        </div>
      </Router>
    </Provider>      
  );
}

export default App;
