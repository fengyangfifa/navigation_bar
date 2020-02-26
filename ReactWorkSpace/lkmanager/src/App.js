import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import LKHeader from './components/Header/LKHeader'
import LKAside from './components/Aside/LKAside'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <LKHeader />
          <LKAside />
        </div>
      </Router>
    </Provider>      
  );
}

export default App;
