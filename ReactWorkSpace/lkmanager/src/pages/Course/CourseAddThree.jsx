import React, { Component } from 'react'

class CourseAddThree extends Component {
  render() {
    return (
      <div>
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
                <a href="course_add_two.html" class="done">
                  <b class="fa fa-check"></b>
                  课程图片
                      </a>
              </li>
              <li>
                <a href="./course_add_three.html" class="active">
                  <b>3</b>
                  课时管理
                      </a>
              </li>
            </ul>
            <div class="content">
              <div class="title">
                <h5>课时管理</h5>
                <a src="javascript:;" data-toggle="modal" data-target="#lesson" class="btn btn-danger btn-sm pull-right">
                  <i class="fa fa-plus"></i>
                  课时
                      </a>
              </div>
              <div class="lessons">
                <ul class="list-unstyled">
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <span class="order">任务1</span>
                    <span class="name">H5+C3基础-常用标签</span>
                    <span class="duration">12:06</span>
                    <div class="action pull-right">
                      <a href="javascript:;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                      <a href="javascript:;" class="btn btn-primary btn-xs">预览</a>
                      <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <span class="order">任务1</span>
                    <span class="name">H5+C3基础-常用标签</span>
                    <span class="duration">12:06</span>
                    <div class="action pull-right">
                      <a href="javascript:;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                      <a href="javascript:;" class="btn btn-primary btn-xs">预览</a>
                      <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <span class="order">任务1</span>
                    <span class="name">H5+C3基础-常用标签</span>
                    <span class="duration">12:06</span>
                    <div class="action pull-right">
                      <a href="javascript:;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                      <a href="javascript:;" class="btn btn-primary btn-xs">预览</a>
                      <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <span class="order">任务1</span>
                    <span class="name">H5+C3基础-常用标签</span>
                    <span class="duration">12:06</span>
                    <div class="action pull-right">
                      <a href="javascript:;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                      <a href="javascript:;" class="btn btn-primary btn-xs">预览</a>
                      <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                    </div>
                  </li>
                  <li>
                    <i class="fa fa-video-camera"></i>
                    <span class="order">任务1</span>
                    <span class="name">H5+C3基础-常用标签</span>
                    <span class="duration">12:06</span>
                    <div class="action pull-right">
                      <a href="javascript:;" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#lesson">编辑</a>
                      <a href="javascript:;" class="btn btn-primary btn-xs">预览</a>
                      <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="lesson">
          <div class="modal-dialog" style={{width: 800}}>
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">添加任务</h4>
              </div>
              <div class="modal-body">
                <form action="" class="form-horizontal">
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">*标题</label>
                    <div class="col-md-6">
                      <input type="text" class="form-control input-sm" />
                    </div>
                    <div class="col-md-2">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox" /> 免费试学
                                    </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">*视频</label>
                    <div class="col-md-8">
                      <div class="input-group">
                        <input type="text" class="form-control input-sm" placeholder="支持腾讯、爱奇艺、网易的视频页面地址导入" />
                        <span class="input-group-btn">
                          <button class="btn btn-danger btn-sm">获取</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-md-2 control-label">*课程介绍</label>
                    <div class="col-md-8">
                      <textarea name="" rows="5" class="form-control input-sm"></textarea>
                    </div>
                  </div>
                  <div class="form-group form-inline">
                    <label for="" class="col-md-2 control-label">*时长</label>
                    <div class="col-md-8">
                      <input type="text" class="form-control input-sm small" />
                      分
                                <input type="text" class="form-control input-sm small" />
                      秒
                                 <p class="help-block">时长必须为整数。</p>
                    </div>
                  </div>
                  <div class="form-group form-inline">
                    <label for="" class="col-md-2 control-label">建议学习时长</label>
                    <div class="col-md-8">
                      <input type="text" class="form-control input-sm small" />
                      小时
                                 <p class="help-block">（如未设置，则默认学习时长为视频时长2倍取整。）</p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-link btn-sm" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger btn-sm"> 添 加 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseAddThree;
