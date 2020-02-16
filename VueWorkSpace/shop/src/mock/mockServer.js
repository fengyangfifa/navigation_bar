// 使用mockjs提供mock数据接口

import Mock from 'mockjs'
import data from './data.json'

// 返回foods的接口
Mock.mock('/foods', {code: 0, data: data.goods});

// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings});

// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info});

// 该模块不需要向外界提供什么对象，仅运行起来就行，拦截Ajax请求
