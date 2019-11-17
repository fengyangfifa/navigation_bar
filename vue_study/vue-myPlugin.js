// vue的插件库
(function () {
    // 需要向外界暴露的一个插件对象
    var MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log("Vue.myGlobalMethod");
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind(el, binding) {
                el.textContent = binding.value.toUpperCase();
            }
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log("Vue.prototype.$myMethod");
        }
    }
    window.MyPlugin = MyPlugin;
})()
