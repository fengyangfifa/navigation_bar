// 相当于Vue的构造函数
function MVVM(options) {
	// 将配置对象保存到vm实例
	this.$options = options || {};
	var data = this._data = this.$options.data;
	var me = this;

	// 数据代理
	// 实现 vm.xxx -> vm._data.xxx
	Object.keys(data).forEach(function (key) {
		me._proxyData(key);
	});

	this._initComputed();

	observe(data, this);

	// 编译、模板解析、绑定数据监听
	this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
	constructor: MVVM,
	$watch: function (key, cb, options) {
		new Watcher(this, key, cb);
	},

	// 实现指定属性的代理方法
	_proxyData: function (key, setter, getter) {
		var me = this;
		setter = setter ||
			Object.defineProperty(me, key, {
				configurable: false,
				enumerable: true,
				// 当通过vm.xxx读取属性值时调用，从vm._data中读取对应的属性数据返回 代理读操作
				get: function proxyGetter() {
					console.log('proxyGetter');
					return me._data[key];
				},
				// 当通过vm.xxx=yyy修改属性值时调用，把vm._data中读取对应的属性数据修改 代理写操作
				set: function proxySetter(newVal) {
					me._data[key] = newVal;
				}
			});
	},

	_initComputed: function () {
		var me = this;
		var computed = this.$options.computed;
		if (typeof computed === 'object') {
			Object.keys(computed).forEach(function (key) {
				Object.defineProperty(me, key, {
					get: typeof computed[key] === 'function'
						? computed[key]
						: computed[key].get,
					set: function () { }
				});
			});
		}
	}
};