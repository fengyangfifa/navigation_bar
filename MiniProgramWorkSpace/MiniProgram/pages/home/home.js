// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const types = ['pop', 'new', 'sell'];
const TOP_DISTANCE = 1000;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: {page: 0, list: []},
      new: {page: 0, list: []},
      sell: {page: 0, list: []}
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.请求轮播图以及推荐数据
    this._getMultiData();

    // 2.请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },
  _getMultiData() {
    getMultiData().then(res => {  
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      });
    });
  },
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      const list = res.data.data.list;
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      });
    });
  },
  handleTabClick(event) {
    const index = event.detail.index;
    const type = types[index];
    this.setData({
      'currentType': type
    });
  },
  handleImageLoad() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top;
    }).exec();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 上拉加载更多
    this._getGoodsData(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 监听页面的滚动
  onPageScroll(options) {
    const scrollTop = options.scrollTop;

    // 不要在滚动的函数回调中频繁的调用this.setData
    // 回到顶部按钮
    const flag1 = scrollTop >= TOP_DISTANCE;
    if (flag1 !== this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      });  
    }

    // 控制tab-control吸顶
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 !== this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      });
    }
  }
})