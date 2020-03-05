import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSowingDataAction} from '../../store/actionCreators'
import {removeSowingData} from '../../api/index'
import {Link} from 'react-router-dom'

const IMG_PRE = 'http://localhost:1688/uploads/';

class SowingList extends Component {
  render() {
    const {sowingData} = this.props;
    return (
      <div className="container-fluid">
        <div className="body advert">
          <ol className="breadcrumb">
            <li><a href="javascript:;">轮播图管理</a></li>
            <li className="active">轮播图列表</li>
          </ol>
          <div className="page-title">
            <Link to="/sowing/add" className="btn btn-danger btn-sm pull-right">添加轮播图</Link>
          </div>
          <div className="panel panel-default">
            <table className="table table-bordered">
                <thead>
                  <tr>
                    <td>序号</td>
                    <th>图片名称</th>
                    <th>大图</th>
                    <th>小图</th>
                    <th>跳转链接</th>
                    <th>上架时间</th>
                    <th>下架时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    sowingData.map((sowing, index) => {
                      return (
                        <tr key={index}>
                          <td>LK00{index + 1}</td>
                          <td>{sowing.image_title}</td>
                          <td><img src={IMG_PRE + sowing.image_url} alt="" style={{width: 200, height: 50, margin: 'auto'}} /></td>
                          <td><img src={IMG_PRE + sowing.image_small_url} alt="" style={{width: 200, height: 50, margin: 'auto'}} /></td>
                          <td>{sowing.image_link}</td>
                          <td>{sowing.s_time.substr(0, 10)}</td>
                          <td>{sowing.e_time.substr(0, 10)}</td>
                          <td>
                            <Link 
                              to={{
                                pathname: '/sowing/edit', 
                                state: {sowing}
                              }} 
                              className="btn btn-primary btn-xs"
                            >编辑</Link>
                            <button onClick={() => this._removeSowing(sowing._id)} className="btn btn-danger btn-xs">删除</button>
                          </td>
                        </tr>    
                      );
                    })
                  }
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );  
  }
  componentDidMount () {
    this.props.reqSowingData();
  }

  // 根据id删除对应的数据
  _removeSowing (id) {
    removeSowingData(id).then((res) => {
      if (res.status_code === 200) {
        // 删除成功，重新获取轮播图数据
        this.props.reqSowingData();
      }
    }).catch(() => {
      alert('删除数据失败!');
    });
  }
}

const mapStateToProps = (state) => {
  return {
    sowingData: state.sowingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reqSowingData () {
      const action = getSowingDataAction();
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SowingList);
