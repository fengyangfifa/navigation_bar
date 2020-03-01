import React, { Component } from 'react'
import logo from '../../common/images/logo.jpg'

class Login extends Component {
  render() {
    return (
      <div class="login">
        <div class="login-wrap">
          <div class="avatar">
            <img src={logo} class="img-circle" alt="" />
          </div>
          <form action="" class="col-md-offset-1 col-md-10">
            <div class="input-group input-group-lg">
              <span class="input-group-addon">
                <i class="fa fa-id-card-o"></i>
              </span>
              <input type="text" class="form-control" placeholder="撩课口令" />
            </div>
            <div class="input-group input-group-lg">
              <span class="input-group-addon">
                <i class="fa fa-key"></i>
              </span>
              <input type="password" class="form-control" placeholder="密码" />
            </div>
            <button type="submit" class="btn btn-lg btn-danger btn-block">登 录</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
