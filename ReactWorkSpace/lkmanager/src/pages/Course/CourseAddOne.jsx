import React, { Component } from 'react'

class CourseAddOne extends Component {
  render() {
    return (
      <div class="body course-add">
        <ol class="breadcrumb">
          <li><a href="javascript:;">课程管理</a></li>
          <li class="active">课程添加</li>
        </ol>
        <div class="steps">
          <div class="brief">
            <div class="thumb">
              <img src="./uploads/course.jpg" alt="" />
            </div>
            <dl class="info">
              <dt>从零玩转H5+C3</dt>
              <dd>讲师：叶建华老师</dd>
              <dd>课时：168</dd>
            </dl>
          </div>
          <ul class="forwards list-unstyled">
            <li>
              <a href="./course_add_one.html" class="active">
                <b>1</b>
                基本信息
                      </a>
            </li>
            <li>
              <a href="course_add_two.html">
                <b>2</b>
                课程图片
                      </a>
            </li>
            <li>
              <a href="course_add_three.html">
                <b>3</b>
                课时管理
                      </a>
            </li>
          </ul>
          <div class="content">
            <div class="title">
              <h5>课程信息</h5>
            </div>
            <form action="" class="basic form-horizontal">
              <div class="form-group">
                <label for="" class="col-md-2 control-label">标题</label>
                <div class="col-md-8">
                  <input type="text" class="form-control input-sm" value="从零玩转H5+C3" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-2 control-label">副标题</label>
                <div class="col-md-8">
                  <input type="text" class="form-control input-sm" value="全程案例驱动讲解" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-2 control-label">讲师</label>
                <div class="col-md-8">
                  <select name="" class="form-control input-sm">
                    <option value="">叶建华</option>
                    <option value="">高新强</option>
                    <option value="">王顺子</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-2 control-label">连载状态</label>
                <div class="col-md-8">
                  <select name="" class="form-control input-sm">
                    <option value="">非连载课程</option>
                    <option value="">更新中</option>
                    <option value="">已完结</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-2 control-label">分类</label>
                <div class="col-md-8">
                  <select name="" class="form-control input-sm">
                    <option value="">一级分类</option>
                  </select>
                  <select name="" class="form-control input-sm">
                    <option value="">二级分类</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-2 control-label">课程简介</label>
                <div class="col-md-8 ckeditor">
                  <textarea name="" rows="15" class="form-control input-sm"></textarea>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-md-2 control-label">标签</label>
                <div class="col-md-8">
                  <input type="text" class="form-control input-sm" value="请输入标签" />
                  <p class="help-block">标签将有利于您的课程被学生检索到</p>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-10">
                  <a href="course_add_two.html" class="btn btn-danger btn-sm pull-right">下一步</a>
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