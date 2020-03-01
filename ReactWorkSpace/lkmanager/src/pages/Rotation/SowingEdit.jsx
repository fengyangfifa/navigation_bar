import React, { Component } from 'react'
import {editSowingData} from '../../api/index'
import {Link} from 'react-router-dom'

const IMG_PRE = 'http://localhost:1688/uploads/';

class SowingEdit extends Component {
  constructor (props) {
    super(props);
    const sowing = this.props.location.state.sowing;
    this.state = {
      id: sowing._id,
      image_title: sowing.image_title,
      image_url: IMG_PRE + sowing.image_url,
      image_small_url: IMG_PRE + sowing.image_small_url,
      image_link: sowing.image_link,
      s_time: sowing.s_time,
      e_time: sowing.e_time
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="body teacher-profile">
          <ol className="breadcrumb">
            <li><Link to="/sowing/list">轮播图管理</Link></li>
            <li className="active">编辑轮播图</li>
          </ol>
          <div className="settings">
            <div className="form-horizontal">
              <div className="form-group">
                <label for="" className="col-md-3 control-label">图片名称</label>
                <div className="col-md-5">
                  <input 
                    ref="image_title" 
                    type="text" 
                    className="form-control input-sm" 
                    placeholder="填写图片名称" 
                    value={this.state.image_title} 
                    onChange={(e) => this._dealInputValue(e, "image_title")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">大图片</label>
                <div className="col-md-2 preview">
                  <img src={this.state.image_url} style={{border: '1px solid #e0e0e0'}} />
                  <input 
                    ref="image_url" 
                    type="file" 
                    id="upfile" 
                    onChange={() => this._previewImg("image_url")}
                  />
                  <div className="cover">
                    <i className="fa fa-upload"></i>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">小图片</label>
                <div className="col-md-2 preview">
                  <img src={this.state.image_small_url} style={{border: '1px solid #e0e0e0'}} />
                  <input 
                    ref="image_small_url" 
                    type="file" 
                    id="upfile" 
                    onChange={() => this._previewImg("image_small_url")}
                  />
                  <div className="cover">
                    <i className="fa fa-upload"></i>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">跳转页面地址</label>
                <div className="col-md-5">
                  <input 
                    ref="image_link" 
                    type="text" 
                    className="form-control input-sm" 
                    placeholder="填写跳转链接" 
                    value={this.state.image_link} 
                    onChange={(e) => this._dealInputValue(e, "image_link")}
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">计划上架时间</label>
                  <div className="col-md-5">
                    <input 
                      ref="s_time" 
                      type="text" 
                      className="form-control input-sm" 
                      placeholder="请填写上架的时间" 
                      value={this.state.s_time.substr(0, 10)} 
                      onChange={(e) => this._dealInputValue(e, "s_time")}
                    />
                  </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-3 control-label">计划下架时间</label>
                  <div className="col-md-5">
                    <input 
                      ref="e_time" 
                      type="text" 
                      className="form-control input-sm" 
                      placeholder="请填写下架的时间" 
                      value={this.state.e_time.substr(0, 10)} 
                      onChange={(e) => this._dealInputValue(e, "e_time")}
                    />
                  </div>
              </div>              
              <div className="form-group">
                <div className="col-md-8">
                  <button onClick={() => this._dealWidthClick()} className="btn btn-danger btn-sm pull-right">确认修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // 处理文本改变的内容
  _dealInputValue (e, type) {
    const value = e.target.value;
    this.setState({
      [type]: value
    });
    // if (type === 'image_title') {
    //   this.setState({
    //     image_title: value
    //   });
    // } else if (type === 'image_link') {
    //   this.setState({
    //     image_link: value
    //   });
    // } else if (type === 's_time') {
    //   this.setState({
    //     s_time: value
    //   });
    // } else if (type === 'e_time') {
    //   this.setState({
    //     e_time: value
    //   });
    // }
  }

  // 处理图片内容的展示
  _previewImg (imgRef) {
    // 根据ref获取用户上传的文件
    let file = this.refs[imgRef].files[0];
    // 修改图片信息
    let src = '';
    const reader = new FileReader();
    if (file) {
      // 读取图片文件, 读取成base64编码
      reader.readAsDataURL(file);
    } else {
      src = '';
    }

    // 阅读器解析完毕
    reader.onloadend = () => {
      src = reader.result;
      this.setState({
        [imgRef]: src
      });
    }
  }

  //点击修改按钮
  _dealWidthClick () {
    // 处理请求的数据
    const {id, image_title, image_link, s_time, e_time} = this.state;

    // 取出图片的原始名称
    const {image_url, image_small_url} = this.props.location.state.sowing;
    
    // 创建formData对象
    let formData = new FormData();
    formData.append('id', id);
    formData.append('image_title', image_title);
    formData.append('image_link', image_link);
    formData.append('s_time', s_time);
    formData.append('e_time', e_time);
    // 如果图片被修改则上传修改后的图片对象、否则上传原来的图片名，表示未被修改
    formData.append('image_url', this.refs.image_url.files[0] || image_url);
    formData.append('image_small_url', this.refs.image_small_url.files[0] || image_small_url);

    // 提交修改申请
    editSowingData(formData).then((res) => {
      if (res.status_code === 200) {
        this.props.history.push('/sowinglist');
      }
    }).catch(() => {
      alert('修改数据失败!');
    });
  }
}

export default SowingEdit;
