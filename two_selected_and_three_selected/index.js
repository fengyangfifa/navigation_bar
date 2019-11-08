var province = document.getElementById("province");
var data = { "请选择省/市": ["请选择区/县"], "河北省": ["邯郸", "廊坊"], "北京": ["海淀", "朝阳"], "陕西": ["延安", "西安"] };

function initialProvince() {
    // 初始化省/市
    for(var i in data){
        new_province = document.createElement("option");
        new_province.innerHTML = i;
        province.appendChild(new_province)
    }
    province.onchange = changeCity;
}

function changeCity() {
    // 修改所属县/区
    var province_value = this.value;
    var city = document.getElementById("city");
    // 将上一个省/市的县/区设置为0,避免影响别的城市
    city.options.length = 0;
    for(var i in data[province_value]){
        new_city = document.createElement("option");
        new_city.innerHTML = data[province_value][i];
        city.appendChild(new_city);
    }
}
initialProvince();
