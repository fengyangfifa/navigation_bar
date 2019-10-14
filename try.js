var data = {"请选择省/市":["请选择区/县"],"河北省":["邯郸","廊坊"],"北京":["海淀","朝阳"],"陕西":["延安","西安"]};

function initionProvince(){
        var pro = document.getElementById("province");
        for (var i in data){
                var option_pro = document.createElement("option");
                option_pro.innerHTML = i;
                pro.appendChild(option_pro);
        }        
        pro.onchange = changeCity;
}
initionProvince();

function changeCity() {
        var choice = this.options[this.selectedIndex].innerHTML;
        var city = document.getElementById("city");
        city.options.length = 0;
        for(var i in data[choice]){
                var oprion_city = document.createElement("option");
                oprion_city.innerHTML = data[choice][i]
                city.appendChild(oprion_city);
        }
}