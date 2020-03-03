import React, { Component } from 'react'

class LKTool {
  // 将图片转换为base64编码
  fileToBase64Url(file, callback) {
    let src = '';
    const reader = new FileReader();
    if (file) {
      // 读取图片文件, 读取成base64编码
      reader.readAsDataURL(file);
    } else {
      src = '';
    }

    // 阅读器解析完毕
    reader.onloadend = () => {
      src = reader.result;
      callback && callback(src);
    }
  }
}

export default LKTool;
