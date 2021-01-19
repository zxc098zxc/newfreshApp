<template>
  <div class>
    <!--页面主体-->
    <div class="login_box">
      <div class="container">
        <div class="login">
          <h2>用户登录</h2>
          <dl class="clearfloat">
            <dt>
              <span
                class="tips"
                id="uname_prompt_text"
                style="display:block"
                v-if="showErr"
              >用户名或者密码不正确</span>用户名：
            </dt>
            <dd>
              <input
                type="text"
                id="uname"
                @blur="showErr=false"
                placeholder="邮箱/手机号"
                v-model="uname"
              />
              <em class="icon_user"></em>
              <i class="icon_error" id="uname_prompt_icon"></i>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="tips" id="pwd_prompt_text">请输入密码</span>密码：
            </dt>
            <dd>
              <input type="password" id="pwd" placeholder="密码" v-model="upwd" />
              <em class="icon_pwd"></em>
              <i class="icon_error" id="pwd_prompt_icon"></i>
            </dd>
          </dl>
          <p>
            <label>
              <!-- <option value="自动登录2"></option> -->
              <input type="checkbox" />
              <span>自动登录</span>
            </label>
          </p>
          <button type="button" id="login" @click="doLogin">立 即 登 录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      // 放一个值来存储开始是否显示错误
      showErr: false,
    };
  },
  methods: {
    doLogin() {
      //   post接口 和参数分开写
      let url = "user_login.php";
      let params = `unameOrPhone=${this.uname}&upwd=${this.upwd}`;
      this.axios.post(url, params).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          // 固定写法.commit就是专门来触发vuex中的updateUser方法
          this.$store.commit('updateUser',res.data)
          // 登录成功uid就有值,未登录的默认值是null 
          // this.$router.push('/index')
          // 跳转回到之前的页面
          this.$router.go(-1);
        } else {
          this.showErr = true;
        }
      });
    },
  },
};
</script>

<style>
</style>