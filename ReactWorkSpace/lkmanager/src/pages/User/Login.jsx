import React, { Component } from 'react'
import logo from '../../common/images/logo.jpg'
import {connect} from 'react-redux'
import {getUserDataAction} from '../../store/actionCreators'
import md5 from 'md5'

const S_KEY = 'WaYjH1314.ItLikE.CoM';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user_name: '',
      user_pwd: ''
    }
  }
  render() {
    return (
      <div className="login">
        <div className="login-wrap">
          <div className="avatar">
            <img src={logo} className="img-circle" alt="" />
          </div>
          <div className="col-md-offset-1 col-md-10">
            <div className="input-group input-group-lg">
              <span className="input-group-addon">
                <i className="fa fa-id-card-o"></i>
              </span>
              <input 
                name = "user_name"
                type="text" 
                className="form-control" 
                placeholder="撩课口令" 
                onChange={e => this._onInputChange(e)}
                onKeyUp={e => this._onInputKeyUp(e)}
              />
            </div>
            <div className="input-group input-group-lg">
              <span className="input-group-addon">
                <i className="fa fa-key"></i>
              </span>
              <input 
                name = "user_pwd"
                type="password" 
                className="form-control" 
                placeholder="密码" 
                onChange={e => this._onInputChange(e)}
                onKeyUp={e => this._onInputKeyUp(e)}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-lg btn-danger btn-block"
              onClick={e => this._onSubmit(e)}
            >登 录</button>
          </div>
        </div>
      </div>
    )
  }
  // 当输入框的内容发生改变
  _onInputChange (e) {
    // 获取数据
    let inputValue = e.target.value;
    let inputName = e.target.name;
    // 跟新数据
    this.setState({
      [inputName]: inputValue
    });
  }

  // 处理回车
  _onInputKeyUp (e) {
    if (e.keyCode === 13) {
      this._onSubmit();
    }
  }

  // 当用户提交表单
  _onSubmit (e) {
    // 获取表单数据
    const {user_name, user_pwd} = this.state;

    // 验证数据
    if (!user_name) {
      alert('用户名不能为空!');
      return ;
    } 
    if (!user_pwd) {
      alert('密码不能为空!');
      return ;
    }

    // MD5处理
    const md5_user_pwd = md5(user_pwd + S_KEY);

    // 发送网络请求
    // 避免服务器端将对象内的所有内容当作键,https://www.bilibili.com/video/av68462458?p=44
    let params = new URLSearchParams();
    params.append('user_name', user_name);
    params.append('user_pwd', md5_user_pwd);

    this.props.reqLogin(params, () => {
      alert('laile');
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reqLogin(data, callback) {
      const action = getUserDataAction(data, callback);
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps)(Login);
