import React, { Component } from 'react'

class CourseAddTwo extends Component {
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
              <a href="course_add_one.html" class="done">
                <b class="fa fa-check"></b>
                基本信息
                      </a>
            </li>
            <li>
              <a href="./course_add_two.html" class="active">
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
              <h5>课程封面</h5>
            </div>
            <div class="picture col-md-offset-2">
              <div class="preview">
                <img src="./uploads/course.jpg" alt="" />
              </div>
              <p class="tips">
                可上传jpg, gif, png格式文件, 图片建议尺寸大于400x225，文件大小不能超过2M。
                      </p>
              <div class="col-md-2">
                <a href="course_add_three.html" class="btn btn-danger btn-sm">下一步</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseAddTwo;
