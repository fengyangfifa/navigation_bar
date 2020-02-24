// 当页面加载完成后，执行setImg函数
$(document).ready(function () {
  setImg();
});

// 当页面窗口发生变化时，执行setImg函数
$(window).on('resize', function () {
  setImg();
})

function setImg() {
  // 获取所有imp图片标签
  let allImg = $('img');
  const imgWidth = allImg[0].width + 20;
  const bodyWidth = $('body').width();
  // 每行展示图片的个数
  const cols = parseInt(bodyWidth / imgWidth);
  let allHeight = [];
  [].slice.call(allImg).forEach((item, index) => {
    if (index < cols) {
      // 第一行的图片直接放置
      $(item).css({
        'position': 'absolute',
        'top': 0,
        'left': index * imgWidth,
        'transition': 'all .4s'
      });
      allHeight.push(item.height);      
    } else {
      // 除了第一行的图片，后面放置的图片要计算出上一行图片中height最小的节点
      // 然后将放置在对应的下面
      minHeight = Math.min(...allHeight);
      minIndex = allHeight.indexOf(minHeight);      
      $(item).css({
        'position': 'absolute',
        'top': minHeight + 20,
        'left': minIndex * imgWidth,
        'transition': 'all .4s'
      });
      allHeight[minIndex] += item.height + 20;
    }
  });
  maxHeight = Math.max(...allHeight);
  $(".waterfall").css({
    'position': 'relative',
    'height': maxHeight + 20 + 'px'
  });
}
