function Compile(el, vm) {
  this.$vm = vm;
  this.$el = this.isElementNode(el) ? el : document.querySelector(el);

	// 编译模板的三步
  if (this.$el) {
			// 取出el元素中的所有子节点，保存到fragment对象中
			this.$fragment = this.node2Fragment(this.$el);
			// 编译fragment中所有层次子节点，同时绑定数据监听
			this.init();
			// 将编译好的fragment添加到页面的el元素中
      this.$el.appendChild(this.$fragment);
  }
}

Compile.prototype = {
  constructor: Compile,
  node2Fragment: function(el) {
      var fragment = document.createDocumentFragment(),
          child;

      // 将原生节点拷贝到fragment
      while (child = el.firstChild) {
          fragment.appendChild(child);
      }

      return fragment;
  },

  init: function() {
      this.compileElement(this.$fragment);
  },

  compileElement: function(el) {
      var childNodes = el.childNodes,
          me = this;

      [].slice.call(childNodes).forEach(function(node) {
          var text = node.textContent;
          var reg = /\{\{(.*)\}\}/;

          if (me.isElementNode(node)) {
							// 编译解析指令
              me.compile(node);

          } else if (me.isTextNode(node) && reg.test(text)) {
							// 编译大括号表达式文本节点 
              me.compileText(node, RegExp.$1.trim());
          }

					// 如果当前节点含有子节点，则递归编译子节点
          if (node.childNodes && node.childNodes.length) {
              me.compileElement(node);
          }
      });
  },

  compile: function(node) {
			// 获取节点的属性节点
      var nodeAttrs = node.attributes,
          me = this;

      [].slice.call(nodeAttrs).forEach(function(attr) {
					var attrName = attr.name;
					// 判断属性是否为指令
          if (me.isDirective(attrName)) {
              var exp = attr.value;
              var dir = attrName.substring(2);
							// 事件指令
							// 判断指令是否为事件指令
              if (me.isEventDirective(dir)) {
                  compileUtil.eventHandler(node, me.$vm, exp, dir);
                  // 普通指令
              } else {
                  compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
							}
							
							// 移除已经解析的指令属性
              node.removeAttribute(attrName);
          }
      });
  },

  compileText: function(node, exp) {
      compileUtil.text(node, this.$vm, exp);
  },

  isDirective: function(attr) {
      return attr.indexOf('v-') == 0;
  },

  isEventDirective: function(dir) {
      return dir.indexOf('on') === 0;
  },

  isElementNode: function(node) {
      return node.nodeType == 1;
  },

  isTextNode: function(node) {
      return node.nodeType == 3;
  }
};

// 指令处理集合
var compileUtil = {
	// 解析v-text和{{}}
  text: function(node, vm, exp) {
      this.bind(node, vm, exp, 'text');
  },

	// 解析v-html
  html: function(node, vm, exp) {
      this.bind(node, vm, exp, 'html');
  },
	// 解析v-model
  model: function(node, vm, exp) {
      this.bind(node, vm, exp, 'model');

      var me = this,
          val = this._getVMVal(vm, exp);
      node.addEventListener('input', function(e) {
          var newValue = e.target.value;
          if (val === newValue) {
              return;
          }

          me._setVMVal(vm, exp, newValue);
          val = newValue;
      });
  },

	// 解析v-class(vue中没有这个写法,这里为了使编码简单采用)
  class: function(node, vm, exp) {
      this.bind(node, vm, exp, 'class');
  },

  bind: function(node, vm, exp, dir) {
			// 得到更新节点的对应函数
      var updaterFn = updater[dir + 'Updater'];

      updaterFn && updaterFn(node, this._getVMVal(vm, exp));

      new Watcher(vm, exp, function(value, oldValue) {
          updaterFn && updaterFn(node, value, oldValue);
      });
  },

  // 事件处理
  eventHandler: function(node, vm, exp, dir) {
			// 得到事件名和回调函数
      var eventType = dir.split(':')[1],
          fn = vm.$options.methods && vm.$options.methods[exp];

      if (eventType && fn) {
					// 使用fn.bind,将fn函数的this替换成vm实例.
					// 给元素节点绑定事件监听
          node.addEventListener(eventType, fn.bind(vm), false);
      }
  },

	// 从vm中获取表达式对应的值
  _getVMVal: function(vm, exp) {
      var val = vm;
			exp = exp.split('.');
			// 可能多层调用(vm.a.b.c),故采用forEach方法获取结果
      exp.forEach(function(k) {
          val = val[k];
      });
      return val;
  },

  _setVMVal: function(vm, exp, value) {
      var val = vm;
      exp = exp.split('.');
      exp.forEach(function(k, i) {
          // 非最后一个key，更新val的值
          if (i < exp.length - 1) {
              val = val[k];
          } else {
              val[k] = value;
          }
      });
  }
};

// 更新节点的工具对象
var updater = {
	// 更新节点的textContent属性值
  textUpdater: function(node, value) {
      node.textContent = typeof value == 'undefined' ? '' : value;
  },

	// 更新节点的innerHTML属性值
  htmlUpdater: function(node, value) {
      node.innerHTML = typeof value == 'undefined' ? '' : value;
  },

	// 更新节点的className属性值
  classUpdater: function(node, value, oldValue) {
      var className = node.className;
      className = className.replace(oldValue, '').replace(/\s$/, '');

      var space = className && String(value) ? ' ' : '';

      node.className = className + space + value;
  },

	// 更新节点的value属性值
  modelUpdater: function(node, value, oldValue) {
      node.value = typeof value == 'undefined' ? '' : value;
  }
};