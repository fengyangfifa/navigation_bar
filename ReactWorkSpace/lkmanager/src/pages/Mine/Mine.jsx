import React, {Component} from 'react'
import icon from '../../common/images/default.png'
import {connect} from 'react-redux'
import LKTool from '../../components/LKTool/LKTool'
import {editUserData} from '../../api/index'
import * as constants from '../../store/actionTypes'

// 实例化
const _tool = new LKTool();

// 获取本地用户数据
const userData = JSON.parse(sessionStorage.getItem("userData"));
const IMG_PRE = 'http://localhost:1688/uploads/';

class Mine extends Component{
  constructor (props) {
    super(props);
    this.state = {
      token: userData.token || '',
      real_name: userData.real_name || '',
      user_name: userData.user_name || '',
      icon_url: IMG_PRE + userData.icon_url || '',
      sex: userData.sex || '',
      phone: userData.phone || '',
      e_mail: userData.e_mail || '',
      join_time: userData.join_time || '',
      intro_self: userData.intro_self || ''
    }
  }
  render() {
    const {real_name, user_name, icon_url, sex, phone, e_mail, join_time, intro_self} = this.state;
    return (
      <div class="container-fluid">
        <div class="body teacher-profile">
          <div class="settings">
            <div class="form-horizontal">
              <div class="form-group">
                <label for="" class="col-md-3 control-label">姓名</label>
                <div class="col-md-5">
                <input 
                  name="real_name"
                  type="text" 
                  class="form-control input-sm"
                  value={real_name} 
                  onChange={(e) => this._onInputChange(e)}
                />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">头像</label>
                <div class="col-md-2 preview">
                  <img src={icon_url.includes('undefined') ? icon: icon_url } style={{border: '1px solid #e0e0e0'}} />
                  <input 
                    name="icon_url"
                    type="file"
                    ref="icon_url"
                    className="form-control input-sm"
                    onChange={(e) => this._onInputChange(e, 'file')}
                  />
                  <div class="cover">
                    <i class="fa fa-upload"></i>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">性别</label>
                <div class="col-md-3">
                  <label class="radio-inline">
                    <input 
                      name="sex"
                      type="radio" 
                      checked={sex === '男'} 
                      onChange={(e) => this._onInputChange(e, '男')} 
                    /> 男
                  </label>
                  <label class="radio-inline">
                    <input 
                      name="sex"
                      type="radio"
                      checked={sex === '女'} 
                      onChange={(e) => this._onInputChange(e, '女')} 
                    /> 女
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">用户名</label>
                <div class="col-md-5">
                  <input name="user_name" type="text" class="form-control input-sm" disabled value={user_name}/>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">手机号码</label>
                <div class="col-md-5">
                  <input 
                    name="phone"
                    type="text" 
                    class="form-control input-sm" 
                    value={phone} 
                    onChange={(e) => this._onInputChange(e)}
                  />    
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">Email</label>
                <div class="col-md-5">
                <input 
                  name="e_mail"
                  type="text" 
                  class="form-control input-sm" 
                  value={e_mail} 
                  onChange={(e) => this._onInputChange(e)}
                />    
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">加入日期</label>
                <div class="col-md-5">
                <input
                  name="join_time"
                  type="date" 
                  class="form-control input-sm" 
                  value={join_time} 
                  onChange={(e) => this._onInputChange(e)}
                />    
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">自我介绍</label>
                <div class="col-md-5 ckeditor">
                  <textarea 
                    name="intro_self" 
                    rows="15" 
                    class="form-control input-sm"
                    value={intro_self}
                    onChange={(e) => this._onInputChange(e)}
                  ></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-8">
                  <button onClick={() => this._onSubmit()} class="btn btn-danger pull-right">保 存</button>
                  <a href="reset_pwd.html" class="btn btn-link btn-success pull-right">修改密码？</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );  
  }
  // 输入框内容发送改变
  _onInputChange (e, flag) {
    // 获取用户输入的数据
    let inputVlaue = e.target.value;
    let inputName = e.target.name;

    // 处理性别
    if (flag === '男') {
      inputVlaue = '男';
    } else if (flag === '女') {
      inputVlaue = '女';
    }
    // 处理头像
    if (flag === 'file') {
      inputVlaue = '';
      _tool.fileToBase64Url(e.target.files[0], (src) => {
        inputVlaue = src;
        // 因为图片上传是异步操作，故在里面还得this.setState
        this.setState({
          icon_url: inputVlaue
        });
      });
    }
    // 更新state
    this.setState({
      [inputName]: inputVlaue
    })
  }

  // 提交数据
  _onSubmit () {
    const {token, real_name, user_name, sex, phone, e_mail, join_time, intro_self} = this.state;
    const {icon_url} = userData;

    let formData = new FormData();
    formData.append('token', token);
    formData.append('real_name', real_name);
    formData.append('user_name', user_name);
    formData.append('sex', sex);
    formData.append('phone', phone);
    formData.append('e_mail', e_mail);
    formData.append('join_time', join_time);
    formData.append('intro_self', intro_self);
    // 如果图片被修改则上传修改后的图片对象、否则上传原来的图片名，表示未被修改
    formData.append('icon_url', this.refs.icon_url.files[0] || icon_url);

    // 发送请求
    editUserData(formData).then((res) => {
      if (res.status_code === 200) {
        // 保存数据到本地
        this.props.refreshLocalUserData(res.result);
        this.props.history.push('/');
      }
    }).catch(() => {
      alert('保存用户信息失败!');
    });
  }
}

// const mapStateToProps = (state) => {
//   return {
//     userData: state.userData
//   }
// };

const mapDispatchToProps = (dispatch) => {
  return {
    refreshLocalUserData (userData) {
      dispatch({
        type: constants.INIT_USER_DATA,
        userData
      });
    }
  }
};
export default connect(null, mapDispatchToProps)(Mine);