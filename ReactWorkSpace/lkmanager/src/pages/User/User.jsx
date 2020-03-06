import React, {Component} from 'react'
import {connect} from 'react-redux'

import LKPagination from '../../components/LKTool/LKPagination'
import {getStudentCountData} from '../../api/index'
import {getStudentDataAction} from '../../store/actionCreators'

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageNum: 1,
      total: 0,
      pageSize: 15,
      flagCount: 0
    }
  }
  UNSAFE_componentWillMount () {
    getStudentCountData().then((res) => {
      this.setState({
        total: res.result
      });
    }).catch(() => {
      alert('获取用户数据失败!');
    });
  }
  render() {
    const {flagCount} = this.state;
    return (
      <div className="container-fluid">
        <div className="body">
          <ol className="breadcrumb">
            <li><a href="javascript:;">用户管理</a></li>
            <li className="active">用户列表</li>
          </ol>
          <div className="panel panel-default user-list">
            <div className="panel-body">
              <form action="" className="form-inline">
                <select name="" className="form-control input-sm">
                  <option value="">按年龄</option>
                </select>
                <select name="" className="form-control input-sm">
                  <option value="">按性别</option>
                </select>
                <select name="" className="form-control input-sm">
                  <option value="">按地区</option>
                </select>
                <select name="" className="form-control input-sm">
                  <option value="">按日期</option>
                </select>
                <button className="btn btn-danger btn-sm">筛选</button>
                <div className="input-group pull-right">
                  <input type="text" className="form-control input-sm" />
                  <span className="input-group-btn">
                    <button className="btn btn-danger btn-sm">搜索</button>
                  </span>
                </div>
              </form>
            </div>
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>注册账号</th>
                  <th>昵称</th>
                  <th>年龄</th>
                  <th>性别</th>
                  <th>地区</th>
                  <th>手机号码</th>
                  <th>积分</th>
                  <th>注册时间</th>
                  <th>登录时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.studentData.map((student, index) => {
                    return (
                      <tr key={index}>
                        <td>{'LK' + (flagCount + index + 1)}</td>
                        <td>{student.reg_account}</td>
                        <td>{student.user_name}</td>
                        <td>{student.user_age}</td>
                        <td>{student.user_sex}</td>
                        <td>{student.area}</td>
                        <td>{student.phone}</td>
                        <td>{student.points}</td>
                        <td>{student.reg_time}</td>
                        <td>{student.last_login_time}</td>
                        <td>
                          <a href="user_center.html" className="btn btn-info btn-xs">查看</a>
                          <a href="javascript:;" className="btn btn-warning btn-xs">锁定</a>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
          <LKPagination 
            current={this.state.pageNum} 
            total={this.state.total}
            pageSize={this.state.pageSize}
            onChange={(pageNum) => this._onPageNumChange(pageNum)}
          ></LKPagination>
        </div>
      </div>
    );  
  }
  componentDidMount () {
    const {pageNum, pageSize} = this.state;
    // 请求初始数据
    this.props.reqStudentList({
      page: pageNum,
      pageSize
    });
  }

  // 请求对应页的数据
  _onPageNumChange (pageNum) {
    this.setState({
      pageNum,
      flagCount: (pageNum - 1) * this.state.pageSize
    }, () => {
      this.props.reqStudentList({
        page: pageNum,
        pageSize: this.state.pageSize
      });
    });
  }
}

const mapStateToProps = (state) => {
  return {
    studentData: state.studentData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    reqStudentList (params) {
      const action = getStudentDataAction(params);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
