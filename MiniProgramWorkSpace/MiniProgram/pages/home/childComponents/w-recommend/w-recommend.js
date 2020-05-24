// pages/home/childComponents/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad() {
      if (!this.data.isLoad) {
        // 抛出图片加载完成事件
        this.triggerEvent('imageLoad', {}, {});
        this.setData({
          isLoad: true
        });
      }
    }
  }
})
