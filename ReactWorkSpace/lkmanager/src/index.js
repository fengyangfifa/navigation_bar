import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './common/css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'nprogress/nprogress.css'
import 'bootstrap/dist/js/bootstrap'

import {Provider} from 'react-redux'
import store from './store'

ReactDOM.render(
  // 因为在进入app.js时，就需要同步数据。故将Provider store={store}放在本页面
  // 否则将放在index.js中
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
