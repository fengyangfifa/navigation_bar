window.onload = function () {
  let objDemo = document.getElementById("demo");
  // 存放原图的div
  let objSmallBox = document.getElementById("small-box");
  // 漂浮的div
  let objFloatBox = document.getElementById("float-box");
  // 存放大图的div
  let objBigBox = document.getElementById("big-box");
  // 大图
  let objBigBoxImg = objBigBox.getElementsByTagName("img")[0];

  // 绑定鼠标进入objSmallBox的事件
  objSmallBox.onmouseover = function () {
    objFloatBox.style.display = 'block';
    objBigBox.style.display = 'block';
  }

  // 绑定鼠标离开objSmallBox的事件
  objSmallBox.onmouseout = function () {
    objFloatBox.style.display = 'none';
    objBigBox.style.display = 'none';
  }

  // 绑定鼠标在objSmallBox中移动的事件
  objSmallBox.onmousemove = function (ev) {
    // 兼容ie
    let event = ev || window.event;

    // 计算漂浮div相对于父元素的left和top
    let left = event.clientX - objDemo.offsetLeft - objSmallBox.offsetLeft - objFloatBox.offsetWidth / 2;
    let top = event.clientY - objDemo.offsetTop - objSmallBox.offsetTop - objFloatBox.offsetHeight / 2;

    // 不能使漂浮的div在左侧和上侧溢出
    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }

    // 不能使漂浮的div在右侧和下侧溢出
    if (left > objSmallBox.offsetWidth - objFloatBox.offsetWidth) {
      left = objSmallBox.offsetWidth - objFloatBox.offsetWidth;
    }
    if (top > objSmallBox.offsetHeight - objFloatBox.offsetHeight) {
      top = objSmallBox.offsetHeight - objFloatBox.offsetHeight;
    }

    // 设置漂浮div的top、left
    objFloatBox.style.left = left + 'px';
    objFloatBox.style.top = top + 'px';

    // 计算漂浮div对于原图的百分比
    let percentageX = left / (objSmallBox.offsetWidth - objFloatBox.offsetWidth);
    let percentageY = top / (objSmallBox.offsetHeight - objFloatBox.offsetHeight);

    // 根据计算出的百分比，计算原图的top、left。
    // 此处取负数是为了和漂浮div移动一致
    objBigBoxImg.style.left = -percentageX * (objBigBoxImg.offsetWidth - objBigBox.offsetWidth) + 'px';
    objBigBoxImg.style.top = -percentageY * (objBigBoxImg.offsetHeight - objBigBox.offsetHeight) + 'px';
  }
}