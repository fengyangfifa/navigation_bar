import React from 'react'
import avatar from './../../common/uploads/avatar.png'

function LKAside() {
  return (
    <div className="aside">
      <div className="profile">
        <div className="avatar img-circle">
          <img src={avatar} />
        </div>
        <h4>旋之华</h4>
      </div>
      <div className="navs">
        <ul className="list-unstyled">
          <li>
            <a href="./index.html" className="active">
              <i className="fa fa-area-chart"></i>
              数据分析
                  </a>
          </li>
          <li>
            <a href="./user_list.html">
              <i className="fa fa-users"></i>
              用户中心
                  </a>
          </li>
          <li>
            <a href="javascript:;">
              <i className="fa fa-object-group"></i>
              课程管理
                      <i className="arrow fa fa-angle-right"></i>
            </a>
            <ul className="list-unstyled">
              <li>
                <a href="./course_add.html">
                  课程添加
                          </a>
              </li>
              <li>
                <a href="./course_list.html">
                  课程列表
                          </a>
              </li>
              <li>
                <a href="./course_category.html">
                  课程分类
                          </a>
              </li>
              <li>
                <a href="./course_topic.html">
                  课程专题
                          </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="docent_list.html">
              <i className="fa fa-bars"></i>
              运营中心
                  </a>
          </li>
          <li>
            <a href="sowing_list.html">
              <i className="fa fa-calculator"></i>
              LK建模中心
                  </a>
          </li>
          <li>
            <a href="javascript:;">
              <i className="fa fa-cog"></i>
              设置中心
                      <i className="arrow fa fa-angle-right"></i>
            </a>
            <ul className="list-unstyled">
              <li><a href="javascript:;">站点设置</a></li>
              <li><a href="javascript:;">用户设置</a></li>
              <li><a href="javascript:;">角色管理</a></li>
              <li><a href="javascript:;">课程设置</a></li>
              <li><a href="javascript:;">运营设置</a></li>
              <li><a href="javascript:;">财务设置</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LKAside;
