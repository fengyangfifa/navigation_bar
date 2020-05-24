import request from './network.js'
import {baseUrl} from './config.js'


export function getMultiData() {
  return request({
    url: baseUrl + '/home/multidata'
  });
}

export function getGoodsData(type, page) {
  return request({
    url: baseUrl + '/home/data',
    data: {
      type,
      page
    }
  });
}
