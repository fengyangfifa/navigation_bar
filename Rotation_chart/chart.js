var timer = null;
var index = 0;
var main = byId("main");
var lis = byId("nav").getElementsByTagName("li");
var pics = byId("banner").getElementsByClassName("banner-slide");
var left = byId("left");
var right = byId("right");

function byId(id) {
	return typeof (id) === "string" ? document.getElementById(id) : id;
}

function slideImg() {
	// 点击导航栏切换图片
	for (var i = 0; i < lis.length; i++) {
		lis[i].setAttribute("data-index", i);
		// 给每个li项绑定点击事件
		lis[i].onclick = function () {
			// 获取当前li项的index值
			index = this.getAttribute("data-index");
			changeImg();
		};
	}
}

// 改变轮播图
function changeImg() {
	for (var i = 0; i < lis.length; i++) {
		lis[i].className = "none";
		pics[i].style.display = "none";
	}
	pics[index].style.display = "block";
	lis[index].className = "changeColor";
}

// 暂停播放
function stopAutoPlay() {
	if (timer) {
		clearInterval(timer);
	}
}

// 开始播放轮播图
function startAutoPlay() {
	timer = setInterval(function () {
		index = ++index % lis.length;
		changeImg();
	}, 2000);
}

slideImg();
// 当鼠标放在main范围内时，停止轮播图
main.onmouseover = function () {
	stopAutoPlay();
}
// 当鼠标离开main范围内时，开始轮播图
main.onmouseout = function () {
	startAutoPlay();
}
//页面初始化时，启动轮播图
main.onmouseout();

//上一页
left.onclick = function () {
	if (index == 0) {
		index = 3;
	} else {
		index--;
	}
	changeImg();
}

//下一页
right.onclick = function () {
	index = ++index % lis.length;
	changeImg();
}
