// ajax请求模块
import axios from 'axios'

export default function ajax (url, data = {}, type = "GET") {
  return new Promise((resovle, reject) => {
    // axios返回的是promise对象
    let promise;
    if(type === "GET") {
      let dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    promise.then(response => {
      resovle(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}
