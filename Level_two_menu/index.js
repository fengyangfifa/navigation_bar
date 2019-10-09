function byId(id) {
        //判断id的类型，必须为字符串
        return typeof (id) === "string" ? document.getElementById(id) : id;
}

//当前图片索引
var index = 0;
//定时器
var timer = null;
//获取banner下的所有div
var pics = byId("banner").getElementsByTagName("div");
//判断banner下所有div数目
var len = pics.length;
//获得dots下所有span小圆点
var dots = byId("dots").getElementsByTagName("span");
//获取到上一张、下一张按钮的实例
var prev = byId("prev");
var next = byId("next");
//主菜单及其子项
var menu = byId("menu-content");
var menuItems = menu.getElementsByClassName("menu-item");
//子菜单及其子项
var subMenu = byId("sub-menu");
var subMenuItems = subMenu.getElementsByClassName("inner-box");

function setMenu() {
        //遍历主菜单，绑定事件
        for (var i = 0; i < menuItems.length; i++) {
                //为每一个菜单项添加一个自定义的索引属性,因为for循环内的function用i全是最大值,无法具体索引到某一个节点
                menuItems[i].setAttribute("data-index", i);
                //鼠标滑过触发事件
                menuItems[i].onmouseover = function () {
                        //显示子菜单
                        subMenu.style.display = 'block';
                        //显示子菜单项
                        for (var j = 0; j < subMenuItems.length; j++) {
                                subMenuItems[j].style.display = 'none';
                                menuItems[j].style.background = 'none';
                        }
                        var idx = this.getAttribute("data-index");
                        subMenuItems[idx].style.display = 'block';
                        this.style.background = 'rgba(0,0,0,0.1)';
                };

                //鼠标离开整个主菜单触发事件
                menu.onmouseout = function () {
                        //隐藏子菜单
                        subMenu.style.display = 'none';
                };
                //保证鼠标移动到子菜单上，离开主菜单时，子菜单不会消失
                subMenu.onmouseover = function () {
                        this.style.display = 'block';
                };
                //鼠标离开子菜单时，子菜单消失
                subMenu.onmouseout = function () {
                        this.style.display = 'none';
                };
        }
}
setMenu();