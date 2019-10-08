var alllist = document.getElementById("tabs").getElementsByTagName("li");
var allul = document.getElementById("ullist").getElementsByTagName("ul");
var seckillNav = document.getElementById("seckillNav");

for (i = 0; i < alllist.length; i++){
    alllist[i].onclick = function () {
        for (i = 0; i < alllist.length; i++){
            if (alllist[i] === this){
                alllist[i].className = "active";
                allul[i].className = "clearfix active";
            }else{
                alllist[i].className = "";                
                allul[i].className = "clearfix";
            }
        }
    }
}
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 260){
        seckillNav.className = "seckillNav seckill-navfixe";
    }else{
        seckillNav.className = "seckillNav"
    }
}