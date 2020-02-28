import React, {Component} from 'react'
import icon from '../../common/images/default.png'

class Mine extends Component{
  render() {
    return (
      <div class="container-fluid">
        <div class="body teacher-profile">
          <div class="settings">
            <form action="" class="form-horizontal">
              <div class="form-group">
                <label for="" class="col-md-3 control-label">姓名</label>
                <div class="col-md-5">
                  <p class="form-control-static">旋之华</p>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">头像</label>
                <div class="col-md-2 preview">
                  <img src={icon} style={{border: '1px solid #e0e0e0'}} />
                  <input type="file" id="upfile" />
                  <div class="cover">
                    <i class="fa fa-upload"></i>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">性别</label>
                <div class="col-md-3">
                  <label class="radio-inline">
                    <input type="radio" checked /> 男
                  </label>
                  <label class="radio-inline">
                    <input type="radio" /> 女
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">用户名</label>
                <div class="col-md-5">
                  <input type="text" class="form-control input-sm" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">手机号码</label>
                <div class="col-md-5">
                  <input type="text" class="form-control input-sm" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">Email</label>
                <div class="col-md-5">
                  <input type="text" class="form-control input-sm" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">加入日期</label>
                <div class="col-md-5">
                  <input type="date" class="form-control input-sm" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">出生日期</label>
                <div class="col-md-5">
                  <input type="date" class="form-control input-sm" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">住址</label>
                <div class="col-md-5">
                  <select name="" class="form-control input-sm">
                    <option value="">安徽省</option>
                    <option value="">江苏省</option>
                    <option value="">广东省</option>
                  </select>
                  <select name="" class="form-control input-sm">
                    <option value="">黄山市</option>
                    <option value="">上海市</option>
                    <option value="">广州市</option>
                  </select>
                  <select name="" class="form-control input-sm">
                    <option value="">徽州区</option>
                    <option value="">徐汇区</option>
                    <option value="">天河区</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-3 control-label">自我介绍</label>
                <div class="col-md-5 ckeditor">
                  <textarea name="" rows="15" class="form-control input-sm"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-8">
                  <a href="course_add_two.html" class="btn btn-danger pull-right">保 存</a>
                  <a href="reset_pwd.html" class="btn btn-link btn-success pull-right">修改密码？</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );  
  }
}

export default Mine;