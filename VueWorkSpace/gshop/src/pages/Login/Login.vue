<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{'on': loginWay}" @click="loginWayChange(true)">短信登录</a>
          <a href="javascript:;" :class="{'on': !loginWay}" @click="loginWayChange(false)">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <!-- 阻止表单的默认提交，使去执行login方法 -->
        <form @submit.prevent="login">
          <div :class="{'on': loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification" 
              :class="{right_phone: rightPhone && !computeTime}" @click.prevent="getCode">
              {{computeTime ? `已发送(${computeTime}s)` : '获取验证码'}}
              </button>
              <!-- @click.prevent阻止提交表单，在表单内执行click事件都会默认提交表单，
              应该阻止其默认行为-->
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{'on': !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button off" :class="showPwd ? 'on' : 'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{'right': showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : ''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <!-- 此处因为http://localhost:4000/captcha返回的就是图片，可以直接设置链接 -->
                <img class="get_verification" src="http://localhost:4000/captcha" 
                alt="captcha" @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <!-- @closeTip是AlertTip组件自定义的事件 -->
    <!-- 如果事件名为close-tip这种格式，则@close-tip="funname"，funcname名可以任意设置。
    如果事件名为closeTip格式，则@closeTip="funname"，funcname的名字必须和事件名一致
     -->
    <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="closeTip"></AlertTip>
  </section>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip' 
import {reqPwdLogin, reqSmsLogin, reqSendCode} from '../../api'

export default {
  data() {
    return {
      // true代表短信登录，false代表密码登录
      loginWay: true,
      // 手机号
      phone: '', 
      // 计时的时间
      computeTime: 0,
      // 是否显示明文密码
      showPwd: false,
      // 密码
      pwd: '',
      // 短信验证码
      code: '',
      // 用户名
      name: '',
      // 图片验证码
      captcha: '',
      // 提示文本
      alertText: '',
      // 是否显示提示框
      showAlert: false
    }
  },
  methods: {
    loginWayChange (value) {
      this.loginWay = value;
    },
    // 异步获取验证码
    async getCode () {
      // 启动倒计时, 只有没有计时时才启动计时，避免重复启动多个计时器
      if (!this.computeTime) {
        this.computeTime = 30;
        this.IntervalId = setInterval(() => {
          this.computeTime--;
          if (this.computeTime === 0) {
            // 停止计时
            clearInterval(this.IntervalId);
            this.IntervalId = null;
          }
        }, 1000);
        // 发送ajax请求(向指定手机号发送验证码短信)
        const result = await reqSendCode(this.phone);
        if (result.code === 1) {
          // 失败显示提示
          this.showalert(result.msg);
          // 停止计时
          if (this.computeTime) {
            this.computeTime = 0;
            clearInterval(this.IntervalId);
            this.IntervalId = null;
          }
        }
      }
    },
    // 异步登录
    async login () {
      let result = {};
      if (this.loginWay) {
        const {rightPhone ,phone, code} = this;
        if (!rightPhone) {
          // 手机号格式不正确
          this.showalert('手机号格式不正确');
          return undefined;
        } else if (!/^\d{6}$/.test(code)) {
          // 验证码格式不正确
          this.showalert('验证码格式不正确');
          return undefined;
        }
        // 发送AJAX请求，短信登录
        result = await reqSmsLogin(phone, code);
      } else {
        const {name, pwd, captcha} = this;
        if (!name) {
          // 用户名必须指定
          this.showalert('用户名必须指定');
          return undefined;
        } else if (!pwd) {
          // 密码必须指定
          this.showalert('密码必须指定');
          return undefined;
        } else if (!captcha) {
          // 验证码必须指定
          this.showalert('验证码必须指定');
          return undefined;
        }
        // 发送AJAX请求，验证码登录
        result = await reqPwdLogin({name, pwd, captcha});
      }
      // 停止计时
      if (this.computeTime) {
        this.computeTime = 0;
        clearInterval(this.IntervalId);
        this.IntervalId = null;
      }
      // 根据结果处理数据
      if (result.code === 0) {
        const user = result.data;
        // 将user保存到vuex的state中
        this.$store.dispatch('recordUser', user);
        // 跳转到个人中心
        this.$router.replace('/profile');
      } else {
        const msg = result.msg;
        this.getCaptcha();
        this.showalert(msg);
      }
    },
    // 提示信息函数
    showalert (alertText) {
      this.alertText = alertText;
      this.showAlert = true;
    },
    // 关闭提示框
    closeTip () {
      this.alertText = '';
      this.showAlert = false;
    },
    // 获取图片验证码
    getCaptcha () {
      // 通过时间戳改变每次请求的src链接
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now();
    }
  },
  computed: {
    // 判断手机号是否合法
    rightPhone () {
      return /^1\d{10}$/.test(this.phone);
    }
  },
  components: {
    AlertTip
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #02a774
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
            .right_phone
              color black 
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color .3s,border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float left 
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
                &.right
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>