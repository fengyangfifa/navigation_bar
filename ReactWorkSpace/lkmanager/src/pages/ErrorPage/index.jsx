import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Liao from './images/liao.jpg'

class ErrorPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div style={{
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex',
            flexDirection: 'column'
          }}>
          <img src={Liao} alt="" style={{width: 100}}/>
          <Link to="/">
            <h3 className="text-primary">
              哎呀，迷路了，点我返回首页!
            </h3>
          </Link>
        </div>
      </div>
    )
  }
}

export default ErrorPage;
