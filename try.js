var  submenu = document.getElementById("sub-menu");
var innerbox = submenu.getElementsByClassName("inner-box");
var  menucontent = document.getElementById("menu-content");
var  menuitem = menucontent.getElementsByClassName("menu-item");

function setMenu() {
    for (i = 0; i < menuitem.length; i++){
        menuitem[i].setAttribute("data-index", i);
        menuitem[i].onmouseover = function () {
            submenu.style.display = "block";
            for (j = 0; j < menuitem.length; j++){
                menuitem[j].style.background = "none";
                innerbox[j].style.display = "none";
            }
            index = this.getAttribute("data-index");
            innerbox[index].style.display = "block";
            this.style.background = "rgba(0,0,0,0.1)";
        };
        menuitem[i].onmouseout = function () {
            this.style.background = "none";
        }
    }
    submenu.onmouseover = function () {
        this.style.display = "block";
    }
    submenu.onmouseout = function () {
        this.style.display = "none";
    }
    menucontent.onmouseout = function () {
        submenu.style.display = "none";
    }
}
setMenu();