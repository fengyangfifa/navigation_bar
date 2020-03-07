import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class CourseAddOne extends Component {
  render() {
    return (
      <div className="body course-add">
        <ol className="breadcrumb">
          <li><a href="javascript:;">课程管理</a></li>
          <li className="active">课程添加</li>
        </ol>
        <div className="steps">
          <ul className="forwards list-unstyled">
            <li>
              <Link to="/course/add_one" className="active">
                <b>1</b>
                基本信息
              </Link>
            </li>
            <li>
              <Link to="/course/add_two">
                <b>2</b>
                课程图片
              </Link>
            </li>
            <li>
              <Link to="/course/add_three">
                <b>3</b>
                课时管理
              </Link>
            </li>
          </ul>
          <div className="content">
            <div className="title">
              <h5>课程信息</h5>
            </div>
            <form action="" className="basic form-horizontal">
              <div className="form-group">
                <label for="" className="col-md-2 control-label">标题</label>
                <div className="col-md-8">
                  <input type="text" className="form-control input-sm" value="从零玩转H5+C3" />
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-2 control-label">副标题</label>
                <div className="col-md-8">
                  <input type="text" className="form-control input-sm" value="全程案例驱动讲解" />
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-2 control-label">讲师</label>
                <div className="col-md-8">
                  <select name="" className="form-control input-sm">
                    <option value="">叶建华</option>
                    <option value="">高新强</option>
                    <option value="">王顺子</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-2 control-label">连载状态</label>
                <div className="col-md-8">
                  <select name="" className="form-control input-sm">
                    <option value="">非连载课程</option>
                    <option value="">更新中</option>
                    <option value="">已完结</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-2 control-label">分类</label>
                <div className="col-md-8">
                  <select name="" className="form-control input-sm">
                    <option value="">一级分类</option>
                  </select>
                  <select name="" className="form-control input-sm">
                    <option value="">二级分类</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-2 control-label">课程简介</label>
                <div className="col-md-8 ckeditor">
                  <textarea name="" rows="15" className="form-control input-sm"></textarea>
                </div>
              </div>
              <div className="form-group">
                <label for="" className="col-md-2 control-label">标签</label>
                <div className="col-md-8">
                  <input type="text" className="form-control input-sm" value="请输入标签" />
                  <p className="help-block">标签将有利于您的课程被学生检索到</p>
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-10">
                  <Link to="/course/add_two" className="btn btn-danger btn-sm pull-right">下一步</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseAddOne;