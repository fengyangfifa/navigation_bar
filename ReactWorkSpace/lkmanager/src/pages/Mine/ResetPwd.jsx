import React, { Component } from 'react'
import md5 from 'md5'
import {connect} from 'react-redux'

import {editPwdData} from '../../api/index'
import * as constants from '../../store/actionTypes'

const S_KEY = 'WaYjH1314.ItLikE.CoM';

// 获取本地用户数据
const userData = JSON.parse(sessionStorage.getItem("userData"));

class ResetPwd extends Component {
  constructor (props) {
    super(props);
    this.state = {
      token: userData.token || '',
      old_pwd: '',
      new_pwd: '',
      re_pwd: ''
    };
  }
  render () {
    const {old_pwd, new_pwd, re_pwd} = this.state;
    return (
      <div className="container-fluid">
        <div className="body">
          <div className="repass">
            <div className="form-horizontal col-md-offset-2">
              <div className="form-group">
                <label for="" className="col-md-3 control-label">原密码</label>
                <div className="col-md-4">
                  <input 
                    name="old_pwd"
                    type="text" 
                    className="form-control input-sm" 
                    value={old_pwd}
                    onChange={(e) => this._onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">新密码</label>
                <div className="col-md-4">
                  <input 
                    name="new_pwd"
                    type="password" 
                    className="form-control input-sm" 
                    value={new_pwd}
                    onChange={(e) => this._onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">确认密码</label>
                <div className="col-md-4">
                  <input 
                    name="re_pwd"
                    type="password" 
                    className="form-control input-sm" 
                    value={re_pwd}
                    onChange={(e) => this._onInputChange(e)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-7">
                  <button 
                    className="btn btn-success btn-danger  pull-right"
                    onClick={() => this._onSubmit()}
                  >修 改</button>
                  <button 
                    className="btn btn-success btn-warning pull-right" 
                    style={{marginRight: 10}}
                    onClick={() => this.props.history.goBack()}
                  >返 回</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _onInputChange (e) {
    // 获取数据
    let inputName = e.target.name;
    let inputValue = e.target.value;
    this.setState({
      [inputName]: inputValue
    });
  }

  _onSubmit () {
    const {token, old_pwd, new_pwd, re_pwd} = this.state;
    if (new_pwd !== re_pwd) {
      alert('两次输入密码不一致！');
      return ;
    }

    // MD5处理密码
    const md5_old_pwd = md5(old_pwd + S_KEY);
    const md5_new_pwd = md5(new_pwd + S_KEY);
    
    // 调用接口
    let params = new URLSearchParams();
    params.append('token', token);
    params.append('old_pwd', md5_old_pwd);
    params.append('new_pwd', md5_new_pwd);


    editPwdData(params).then((res) => {
      if (res.status_code === 200) {
        alert('密码修改成功!');
        // 清除本地数据
        sessionStorage.removeItem('userData');
        // 清除redux数据
        this.props.refreshLocalUserData(null);
        setTimeout(() => {
          this.props.history.push('/');
        });
      }
    }).catch((error) => {
      alert(error);   
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    refreshLocalUserData (userData) {
      dispatch({
        type: constants.INIT_USER_DATA,
        userData
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(ResetPwd);
