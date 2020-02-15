<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.2</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <star :size="36" :score="4.1"></star>
            <span class="title">服务态度</span>
            <span class="score">4.1</span>
          </div>
          <div class="score-wrapper">
            <star :size="36" :score="4.1"></star>
            <span class="title">商品评分</span>
            <span class="score">4.3</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">28 分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type">
          <span class="block active">全部<span class="count">24</span></span>
          <span class="block">满意<span class="count">18</span></span>
          <span class="block">不满意<span class="count">6</span></span>
        </div>
        <div class="switch on">
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_down"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
          <li class="rating-item">
            <div class="avatar">
              <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <star :score="5" :size="24"></star>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52:44</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Star from 'components/Star/Star'

import BScroll from 'better-scroll'

export default {
  name: 'ShopRatings',
  components: {
    Star
  },
  mounted () {
    new BScroll('.ratings');
  }
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
