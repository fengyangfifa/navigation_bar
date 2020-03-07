import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class CourseCategory extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="body course-category">
          <ol className="breadcrumb">
            <li><Link to="/course">课程管理</Link></li>
            <li className="active">课程分类</li>
          </ol>
          <div className="page-title">
            <Link to="/course/category_add" className="btn btn-danger btn-sm pull-right">添加分类</Link>
          </div>
          <div className="panel panel-default">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="18%">分类名称</th>
                  <th>课程数量</th>
                  <th>是否显示</th>
                  <th>排序</th>
                  <th width="10%">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr className="active">
                  <td className="text-left">Web大前端</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├ HTML/CSS</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├ Javascript</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├ Vue+项目实战</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr className="active">
                  <td className="text-left">JavaEE+大数据</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├ Spring</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├ Oricon</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr className="active">
                  <td className="text-left">数据库</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├ Mysql</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├  MongoDB</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├  Oracle</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr className="active">
                  <td className="text-left">Python+人工智能</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├  大数据</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
                <tr>
                  <td className="text-left">&nbsp;&nbsp;├  云计算</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <Link to="/course/category_add" className="btn btn-info btn-xs">编辑</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );    
  }
}

export default CourseCategory;