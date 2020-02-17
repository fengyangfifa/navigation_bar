<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <star :size="36" :score="info.serviceScore"></star>
            <span class="title">服务态度</span>
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <star :size="36" :score="info.foodScore"></star>
            <span class="title">商品评分</span>
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}} 分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type">
          <span class="block" :class="{active: selectType === 2}" @click="setSelectType(2)">全部
            <span class="count">{{ratings.length}}</span>
          </span>
          <span class="block" :class="{active: selectType === 0}" @click="setSelectType(0)">满意
            <span class="count">{{positiveSize}}</span>
          </span>
          <span class="block"  :class="{active: selectType === 1}" @click="setSelectType(1)">不满意
            <span class="count">{{ratings.length - positiveSize}}</span>
          </span>
        </div>
        <div class="switch" :class="{on: onlyShowText}" @click="changeOnlyShowText">
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item, index) in filterRatings" :key="index">
            <div class="avatar">
              <img :src="item.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <div class="star-wrapper">
                <star :score="item.score" :size="24"></star>
                <span class="delivery">{{item.deliveryTime}}</span>
              </div>
              <p class="text">{{item.text}}</p>
              <div class="recommend">
                <span class="iconfont" :class="item.rateType === 0 ? 'icon-thumb_up': 'icon-thumb_down'"></span>
                <span class="item" v-for="(recommend, index) in item.recommend" :key="index">
                  {{recommend}}
                </span>
              </div>
              <div class="time">{{item.rateTime | date-format}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Star from 'components/Star/Star'

import {mapState, mapGetters} from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'ShopRatings',
  data() {
    return {
      // 是否只显示有文本的评价
      onlyShowText: true,
      // 选择评价的类型：0-满意，1-不满意，2-全部
      selectType: 2
    }
  },
  components: {
    Star
  },
  computed: {
    ...mapState(['ratings', 'info']),

    // 过滤评论数组，产生符合条件的新数组
    filterRatings () {
      const {ratings, selectType, onlyShowText} = this;
      return ratings.filter(rating => {
        const {rateType, text} = rating;
        return (selectType === 2 || selectType === rateType) && (!onlyShowText || text.length);
      });
    },

    // 评论数组中满意的评价数量
    positiveSize () {
      return this.ratings.reduce((preTotal, rating) => {
        return preTotal + (rating.rateType ? 0 : 1);
      }, 0);
    }
  },
  mounted () {
    // 发送获取评论的请求
    this.$store.dispatch('getShopRatings', () => {
      this.$nextTick(() => {
        new BScroll('.ratings', {
          click: true
        });
      });
    });
  },
  methods: {
    // 修改selectType
    setSelectType (selectType) {
      this.selectType = selectType;
    },

    // 修改onlyShowText
    changeOnlyShowText () {
      this.onlyShowText = !this.onlyShowText;
    }
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.ratings {
  width: 100%;
  overflow: hidden;
  margin-top: 2px;
  height: 471px;
  background-color: #ffffff;
}

.ratings-content .overview {
  width: 100%;
  height: 118px;
  padding: 18px 0;
  position: relative;
}

.overview .overview-left {
  height: 100%;
  width: 138px;
  border-right: 1px solid rgba(7,17,27,0.1);
  padding: 6px 0;
  text-align: center;
  float: left;
}

.overview-left .score {
  line-height: 28px;
  margin-bottom: 6px;
  font-size: 24px;
  color: #f90;
  font-weight: 400;
}

.overview-left .title {
  font-size: 12px;
  color: #07111b;
  margin-bottom: 8px;
  line-height: 12px;
}

.overview-left .rank {
  font-size: 10px;
  color: #93999f;
  line-height: 10px;
}

.overview .overview-right {
  float: left;
  width: 237px;
  height: 100%;
  padding: 6px 0 6px 24px;
}

.score-wrapper {
  margin-bottom: 8px;
}

.score-wrapper .star {
  float: left;
  margin: 0 12px;
}

.score-wrapper .title {
  font-size: 12px;
  color: #07111b;
}

.score-wrapper .score {
  color: #f90;
  font-size: 12px;
}

.delivery-wrapper .title {
  font-size: 12px;
  color: #07111b;
}

.delivery-wrapper .delivery{
  font-size: 12px;
  color: #93999f;
  margin-left: 12px;
}

.ratings-content .split  {
  width: 100%;
  height: 18px;
  border-top: 1px solid rgba(7,17,27,0.1);
  border-bottom: 1px solid rgba(7,17,27,0.1);
  background-color: #f3f5f7;
}

/* .ratings-content .ratingselect {
  width: 100%;
  height: 117px;
} */

.ratingselect .rating-type {
  margin: 0 18px;
  padding: 18px 0;
}

.rating-type .block {
  display: inline-block;
  background-color: rgba(77,85,93,0.2);
  padding: 8px 12px;
  font-size: 12px;
  margin-right: 12px;  
  border-radius: 1px;
  line-height: 16px;
  color: #4d555d;
}

.rating-type .block.active {
  color: #ffffff;
  background-color: #02a774;
}

.rating-type .count {
  font-size: 12px;
  margin-left: 2px;
}

.ratingselect .switch {
  padding: 12px 18px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
  color: #93999f;
}

.switch .icon-check_circle {
  display: inline-block;
  font-size: 24px;
  margin-right: 4px;
  vertical-align: top;
}

.switch .text {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
}

.switch.on .icon-check_circle {
  color: #02a774;
}

.ratings-content .rating-wrapper {
  padding: 0 18px;
}

.rating-wrapper .rating-item {
  padding: 18px 0 17px;
  border-bottom: 1px solid rgba(7,17,27,0.1);
}

.rating-wrapper .rating-item:last-child {
  border: none;
}

.rating-wrapper .rating-item::after {
  content: '';
  display: block;
  clear: both;
}

.rating-item .avatar {
  float: left;
  margin-right: 12px;
  width: 28px;
}

.rating-item .avatar img {
  height: 28px;
  width: 28px;
  border-radius: 50%;
}

.rating-item .content {
  float: left;
  width: 299px;
  position: relative;
}

.rating-item .content .name{
  margin-bottom: 4px;
  line-height: 12px;
  font-size: 10px;
  color: #07111b;
}

.rating-item .star-wrapper {
  font-size: 0;
  margin-bottom: 6px;
}

.star-wrapper .star {
  display: inline-block;
  margin-right: 6px;
}

.star-wrapper .delivery {
  font-size: 10px;
  color: #93999f;
  line-height: 12px;
}

.content .text {
  margin-bottom: 8px;
  line-height: 18px;
  color: #07111b;
  font-size: 12px;
}

.content .recommend {
  line-height: 16px;
  font-size: 0;
}

.recommend .icon-thumb_up {
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
  color: #f5a110;
}

.recommend .icon-thumb_down {
  display: inline-block;
  margin: 0 8px 4px 0;
  font-size: 9px;
  color: #93999f;
}

.recommend .item {
  display: inline-block;
  border: 1px solid rgba(7,17,27,0.1);
  border-radius: 1px;
  color: #93999f;
  background-color: #ffffff;
  padding: 0 6px;
  font-size: 9px;
  margin: 0 8px 4px 0;;
}

.content .time {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: #93999f;
}

</style>
