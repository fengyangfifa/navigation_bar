// 自定义过滤器

import Vue from 'vue'
import format from 'date-fns/format'

// 时间戳格式化
Vue.filter('date-format', function (value, formatStr='yyyy-MM-dd HH:mm:ss') {
  return format(value, formatStr);
});
