import React, { Component } from 'react'
import echarts from 'echarts'
import {connect} from 'react-redux'

class LKEchartsTwo extends Component {
	render() {
		return (
			<div id="main2" style={{ height: 400 }}></div>
		)
	}
	componentWillUpdate(nextProps, nextState, nextContent) {
		let order_counter = nextProps.order_counter;

		if (order_counter !== undefined) {
			let left_data = Object.keys(order_counter);
			let total_data = [];
			for (let i = 0; i < left_data.length; i++) {
				let obj = {};
				obj.name = left_data[i];
				obj.value = order_counter[left_data[i]];
				total_data.push(obj);
			}
			console.log(total_data);
			
			let main2 = echarts.init(document.getElementById('main2'));
			let option = {
					tooltip: {
							trigger: 'item',
							formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					legend: {
							orient: 'vertical',
							left: 10,
							data: left_data
					},
					series: [
							{
									name: '学科订单来源',
									type: 'pie',
									radius: ['50%', '70%'],
									avoidLabelOverlap: false,
									label: {
											normal: {
													show: false,
													position: 'center'
											},
											emphasis: {
													show: true,
													textStyle: {
															fontSize: '30',
															fontWeight: 'bold'
													}
											}
									},
									labelLine: {
											normal: {
													show: false
											}
									},
									data: total_data
							}
					]
			};
			main2.setOption(option);	
		}
	}
}
const mapStateToProps = (state) => {
	return {
		order_counter: state.homeData.order_counter
	}
}


export default connect(mapStateToProps, null)(LKEchartsTwo);
