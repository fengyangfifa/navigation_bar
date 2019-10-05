var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");
var seckillNav = document.getElementById("seckillNav");
for (i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}
window.onscroll = function () {
    var scroolTop = document.documentElement.scrollTop;
    if (scroolTop >= 260){
        seckillNav.className = 'seckill-nav seckill-navfixed';
    }
    else{
        seckillNav.className = 'seckill-nav';
    }
}
function showlist() {
    for (i = 0; i < tabs.length; i++){
        if (tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "active clearfix";
        }
        else{
            tabs[i].className = "";
            lists[i].className = "clearfix";
        }
    } 
}
