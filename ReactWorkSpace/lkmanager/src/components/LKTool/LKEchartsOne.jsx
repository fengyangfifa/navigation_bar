import React, { Component } from 'react'
import echarts from 'echarts'
import {connect} from 'react-redux'

class LKEchartsOne extends Component {
  render() {
    return (
      <div id="main1" style={{height:400}}></div>
    )
  }
  componentWillUpdate (nextProps, nextState, nextContent) {
    let order_counter = nextProps.order_counter;
    if (order_counter !== undefined) {
      let main1 = echarts.init(document.getElementById('main1'));
      let option = {
          title: {
              text: '订单统计'
          },
          tooltip: {},
          legend: {
              data:['购买数量']
          },
          xAxis: {
              data: Object.keys(order_counter)
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: Object.values(order_counter)
          }]
      };
      main1.setOption(option);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    order_counter: state.homeData.order_counter
  }
}


export default connect(mapStateToProps, null)(LKEchartsOne);
