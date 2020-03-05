import React, { Component } from 'react'
import RCPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

class LKPagination extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="pagination pull-right">
        <RCPagination 
          {...this.props}
          hideOnSinglePage
          showQuickJumper
        ></RCPagination>
      </div>
    )
  }
}

export default LKPagination;
