var data = { "请选择省/市": ["请选择区/县"], "河北省": ["请选择", "邯郸", "廊坊"], "北京": ["请选择", "海淀", "朝阳"], "陕西": ["请选择", "延安", "西安"] };
var village_data = {
	"请选择区/县": ["请选择村/镇"],
	"邯郸": ["请选择", "马头镇", "回隆镇"],
	"廊坊": ["请选择", "燕郊镇", "胜芳镇"],
	"海淀": ["请选择", "中关村", "苏州街"],
	"朝阳": ["请选择", "将台镇", "四元桥"],
	"延安": ["请选择", "云岩镇", "招安镇"],
	"西安": ["请选择", "尚村镇", "前卫镇"],
	"请选择" :["请选择"]
}
function initionProvince() {
	var pro = document.getElementById("province");
	for (var i in data) {
		var option_pro = document.createElement("option");
		option_pro.innerHTML = i;
		pro.appendChild(option_pro);
	}
	pro.onchange = changeCity;
}
initionProvince();

function changeCity() {
	var choice = this.value;
	// var choice = this.options[this.selectedIndex].innerHTML;
	var city = document.getElementById("city");
	city.options.length = 0;
	for (var i in data[choice]) {
		var option_city = document.createElement("option");
		option_city.innerHTML = data[choice][i];
		city.appendChild(option_city);
	}
	if (data[choice][i] == "请选择区/县"){
		city.onchange();
	}
	city.onchange = changeVillage;
}

function changeVillage() {
	var village = document.getElementById("village");
	var choice = this.value;
	village.options.length = 0;
	for(var i in village_data[choice]){
		var option_village = document.createElement("option");
		option_village.innerHTML = village_data[choice][i];
		village.appendChild(option_village);
	}
}
