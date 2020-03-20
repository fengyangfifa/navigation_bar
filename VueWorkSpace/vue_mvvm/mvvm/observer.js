function Observer(data) {
	// 保存data
	this.data = data;
	// 开时对数据的劫持
	this.walk(data);
}

Observer.prototype = {
	constructor: Observer,
	walk: function (data) {
		var me = this;
		Object.keys(data).forEach(function (key) {
			// 对data的属性进行劫持
			me.convert(key, data[key]);
		});
	},
	convert: function (key, val) {
		// 实施劫持函数
		this.defineReactive(this.data, key, val);
	},

	defineReactive: function (data, key, val) {
		var dep = new Dep();
		var childObj = observe(val);

		Object.defineProperty(data, key, {
			enumerable: true, // 可枚举
			configurable: false, // 不能再define
			get: function () {
				if (Dep.target) {
					// 建立dep和watcher之间的关系
					dep.depend();
				}
				return val;
			},
			set: function (newVal) {
				if (newVal === val) {
					return;
				}
				val = newVal;
				// 新的值是object的话，进行监听
				childObj = observe(newVal);
				// 通知订阅者
				dep.notify();
			}
		});
	}
};

function observe(value, vm) {
	// 被观察的必须时一个对象
	if (!value || typeof value !== 'object') {
		return;
	}

	// 创建一个Observer对象,观察者
	return new Observer(value);
};


var uid = 0;

function Dep() {
	this.id = uid++;
	this.subs = [];
}

Dep.prototype = {
	// 添加watcher到dep中
	addSub: function (sub) {
		this.subs.push(sub);
	},

	// 建立dep和watcher之间的关系
	// Dep.target其实是一个watcher实例,在Watcher函数中赋值的 
	depend: function () {
		Dep.target.addDep(this);
	},

	removeSub: function (sub) {
		var index = this.subs.indexOf(sub);
		if (index != -1) {
			this.subs.splice(index, 1);
		}
	},

	notify: function () {
		// 遍历所有的watcher,通知watcher更新
		this.subs.forEach(function (sub) {
			sub.update();
		});
	}
};

Dep.target = null;