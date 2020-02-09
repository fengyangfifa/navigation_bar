<template>
  <div class="login-container">
    <div class="login">
      <div class="login-header">
        <h1 class="login-logo">硅谷外卖</h1>
        <div class="login-header-title">
          <a href="javascript:;" :class="{'on': loginWay}" @click="loginWayChange">短信登录</a>
          <a href="javascript:;" :class="{'on': !loginWay}" @click="loginWayChange">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form @submit.prevent="login">
          <div :class="{'on': loginWay}">
            <section class="login-message">
              <input type="tel" placeholder="手机号" maxlength="11" v-model="phone">
              <button class="get-verification" :disabled="!rightPhone" :class="{'on': rightPhone && !computeTime}"
              @click.prevent="getCode">
              {{computeTime ? `已发送(${computeTime}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login-verification">
              <input type="tel" placeholder="验证码" maxlength="8" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{'on': !loginWay}">
            <section class="login-message">
              <input type="text" placeholder="手机/邮箱/用户名" maxlength="11" v-model="name">
            </section>
            <section class="login-verification">
              <input type="password" placeholder="密码" maxlength="8" v-if="!showPwd" v-model="pwd">
              <input type="text" placeholder="密码" maxlength="8" v-model="pwd" v-else>
              <div class="switch-button" :class="showPwd ? 'on' : 'off'" @click="showPwd = !showPwd">
                <div class="switch-circle" :class="{'right': showPwd}"></div>
                <div class="switch-text">{{showPwd ? 'abc' : ''}}</div>
              </div>
            </section>
            <section class="login-message">
              <input type="text" placeholder="验证码" maxlength="11" v-model="captcha">
              <img src="http://localhost:4000/captcha" alt="captcha" class="get-verification" ref="captcha">
            </section>
          </div>
          <button class="login-submit">登录</button>
          <a href="javascript:;" class="about">关于我们</a>
        </form>
      </div>
      <a href="javascript:;" class="go-back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { reqSendCode, reqSmsLogin, reqPwdLogin } from 'api'
import { Dialog } from 'vant'

export default {
  name: 'Login',
  data() {
    return {
      // 登录方式
      loginWay: true,
      // 是否明文显示密码
      showPwd: false,
      // 手机号
      phone: '',
      // 短信验证码
      code: '',
      // 发送验证码的时间
      computeTime: 0,
      // 定时器code
      intervalCode: null,
      // 用户名
      name: '',
      // 密码
      pwd: '',
      // 图片验证码
      captcha: ''
    }
  },
  methods: {
    // 改变验证码
    getCaptcha () {
      // 通过时间戳改变每次请求的src链接, 实现更新图片验证码
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now();
    },
    // 改变登录方式
    loginWayChange () {
      this.loginWay = !this.loginWay;
    },
    // 异步获取验证码
    async getCode () {
      // 如果还在上次发送验证码的等待时间内,不允许再次发送验证码
      if (!this.intervalCode) {
        // 重新发送短信验证码的等待时间
        this.computeTime = 30;
        this.intervalCode = setInterval(() => {
            this.computeTime--;
            if (this.computeTime === 0){
            // 时间结束,取消setInterval函数
            clearInterval(this.intervalCode);
            this.intervalCode = null;
          }
        }, 1000);

        // 发送验证码请求
        const result = await reqSendCode(this.phone);
        if (result.code === 1) {
          // 失败显示提示
          Dialog({message: '短信验证码发送失败'});
          // 停止计时
          if (this.computeTime > 0) {
            this.computeTime = 0;
            clearInterval(this.intervalCode);
            this.intervalCode = null;
          }
        }
      }
    },
    // 登录函数
    async login () {
      let result = {};
      if (this.loginWay) {
        const {rightPhone, phone, code} = this;
        if (!rightPhone) {
          // 手机号格式不正确
          this.showAlertText('手机号格式不正确');
          return undefined;
        } else if (!(/^\d{6}$/.test(code))) {
          // 验证码格式不正确
          this.showAlertText('验证码格式不正确');
          return undefined;
        }

        // 发送AJAX请求，短信验证码登录
        result = await reqSmsLogin(phone, code);
      } else {
        const {name, pwd, captcha} = this;
        if (!name) {
          // 用户名不能为空
          this.showAlertText('用户名不能为空');
          return undefined;
        } else if (!pwd) {
          // 密码不能为空
          this.showAlertText('密码不能为空');
          return undefined;
        } else if (!captcha) {
          // 验证码不能为空
          this.showAlertText('验证码不能为空');
          return undefined;
        }
        // 发送AJAX请求，用户密码登录
        result = await reqPwdLogin(name, pwd, captcha);
      }
      // 停止计时
      if (this.computeTime > 0) {
        this.computeTime = 0;
        clearInterval(this.intervalCode);
        this.intervalCode = null;
      }
      if (result.code === 0) {
        // 登录成功
        const user = result.data;
        // 做持久化处理
        
        // 跳转到个人中心
        this.$router.push('/profile');
      } else {
        // 登录失败
        const msg = result.msg;
        this.showAlertText(msg);
        if (!this.loginWay) {
          // 刷新验证码
          this.getCaptcha();
        }
      }
    },
    // 信息提示框
    showAlertText (message) {
      Dialog({message});
    }
  },
  computed: {
    // 验证电话号码是否合法
    rightPhone () {
      return /^1[3456789]\d{9}$/.test(this.phone);
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.login-container {
  width: 375px;
  height: 667px;
  background-color: #ffffff;
}

.login {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}

.login-logo {
  text-align: center;
  color: #02a774;
  font-weight: bold;
  font-size: 40px;
}

.login-header-title {
  padding-top: 40px;
  text-align: center;
}

.login-header-title a {
  color: #333333;
  font-size: 14px;
  padding-bottom: 4px;
}

.login-header-title .on {
  color: #02a774;
  border-bottom: 2px solid #02a774;
  font-weight: 700;
}

.login-header-title a:first-child {
  margin-right: 40px;
}

.login-message,
.login-verification {
  margin-top: 16px;
  position: relative;
  height: 48px;
  font-size: 14px;
  background-color: #ffffff;
}

.login-content input {
  width: 100%;
  height: 100%;
  padding: 0 0 0 10px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid #dddddd;
  font: 400 14px Arial;
}

.login-content input:focus {
  border: 1px solid #02a774;
}

.get-verification {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  border: 0;
  color: #cccccc;
  font-size: 14px;
  background-color: transparent;
  outline: 0;
}

.get-verification.on {
  color: black;
}

.login-hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}

.login-hint a {
  color: #02a774;
}

.login-submit {
  height: 42px;
  width: 100%;
  background-color: #4cd96f;
  border: 0;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  outline: 0;
}

.about {
  font-size: 12px;
  text-align: center;
  color: #999;
  display: block;
  margin-top: 20px;
}

.switch-button {
  position: absolute;
  width: 44px;
  height: 18px;
  border: 1px solid #dddddd;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border-radius: 8px;
  padding: 0 6px;
  font-size: 12px;
  line-height: 16px;
}

.switch-button.on {
  background-color: #02a774;
}

.switch-circle {
  position: absolute;
  width: 18px;
  height: 18px;
  border: 1px solid #dddddd;
  border-radius: 50%;
  top: -1px;
  left: -1px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  transition: all 0.3s;
  background-color: #ffffff;
}

.switch-circle.right {
  transform: translateX(26px);
}

.switch-text {
  color: #ffffff;
}

.login-content > form > div {
  display: none;
}

.login-content .on {
  display: block;
}

.go-back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}

.go-back i {
  font-size: 20px;
  color: #999;
}
</style>
