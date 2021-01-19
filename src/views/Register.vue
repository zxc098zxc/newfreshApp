<template>
  <div class>
    <!--页面主体-->
    <div class="register">
      <h2>新用户注册</h2>
      <ul>
        <!-- 邮箱 -->
        <li>
          <span>邮箱：</span>
          <input type="text" id="uname" placeholder="请输入邮箱名" v-model="email" @blur="checkEmail" />
          <em
            class="icon_error"
            style="display:inline"
            v-if="status_email==2||status_email==3||status_email==4"
          ></em>
          <em class="icon_ok" style="display:inline" v-if="status_email==5"></em>
          <i style="display:inline" v-if="status_email==2">请输入你的注册邮箱</i>
          <i style="display:inline" v-if="status_email==3">请输入正确邮箱格式</i>
          <i style="display:inline" v-if="status_email==4">此邮箱已经被其他用户注册</i>
        </li>
        <!-- 密码 -->
        <li>
          <span>密码：</span>
          <input type="password" id="upwd" placeholder="请输入密码" v-model="passwd" @blur="checkPasswd" />
          <em class="icon_error" style="display:inline" v-if="status_passwd==2||status_passwd==3"></em>
          <em class="icon_ok" style="display:inline" v-if="status_passwd==4"></em>
          <i style="display:inline" v-if="status_passwd==2">请输入你的密码</i>
          <i style="display:inline" v-if="status_passwd==3">密码长度应为6-12位</i>
        </li>
        <!-- 重复密码 -->
        <li>
          <span>重复密码：</span>
          <input
            type="password"
            id="upwd2"
            placeholder="请重复输入密码"
            v-model="repasswd"
            @blur="checkRepasswd"
          />
          <em class="icon_error" style="display:inline" v-if="status_repasswd==2"></em>
          <em class="icon_ok" style="display:inline" v-if="status_repasswd==3"></em>
          <i style="display:inline" v-if="status_repasswd==2">两次密码不一致</i>
        </li>
        <!-- 手机号 -->
        <li>
          <span>手机号：</span>
          <input type="text" id="phone" placeholder="请输入手机号" v-model="phone" @blur="checkPhone" />
          <!-- em强调文本 -->
          <em
            class="icon_error"
            style="display:inline"
            v-if="status_phone==2||status_phone==3||status_phone==4"
          ></em>
          <em class="icon_ok" style="display:inline" v-if="status_phone==5"></em>
          <!-- <i> 定义与文本中其余部分不同的部分，并把这部分文本呈现为斜体文本。 -->
          <i style="display:inline" v-if="status_phone==2">请输入你的手机号</i>
          <i style="display:inline" v-if="status_phone==3">请输入正确手机号</i>
          <i style="display:inline" v-if="status_phone==4">此手机号已经被其他用户注册</i>
        </li>
        <!-- 验证码 -->
        <li>
          <span>验证码：</span>
          <input type="text" class="inp_yzm" placeholder="请输入验证码" v-model="code" />
          <img src="../assets/images/yzm.png" alt />
          <strong class="icon_refresh"></strong>
        </li>
        <li class="li_checkbox">
          <label>
            <!-- checkbox:复选框 -->
            <input type="checkbox" v-model="agree" />
            <span>我已阅读并同意用户注册协议</span>
          </label>
        </li>
        <li class="li_btn">
          <button type="button" v-if="agree" @click="doRegist">提交注册</button>
          <button type="button" disabled class="disabled" v-else>提交注册</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agree: true,
      email: "",
      passwd: "",
      repasswd: "",
      phone: "",
      code: "",
      // 每一个属性的状态值
      status_email: 1,
      status_passwd: 1,
      status_repasswd: 1,
      status_phone: 1,
    };
  },
  methods: {
    doRegist() {
      let url = "user_register.php";
      let params = `uname=${this.email}&upwd=${this.passwd}&phone=${this.phone}`;
      this.axios.post(url, params).then((res) => {
        // 在config里面可以同时拿到uname upwd phone
        // console.log(res.config.data);
        console.log(res.data);
        let { code, uid, uname } = res.data;
        if (code == 1) {
          alert("恭喜你注册成功!即将为你跳转到刚才的页面");
          // 赋值给vuex保存起来
          this.$store.commit("updateUser", { uid, uname, phone: this.phone });
          //直接替换回首页
          this.$router.replace("/");
        } else {
          alert("很遗憾,注册失败!请稍后重试");
        }
      });
    },
    checkPhone() {
      let phone = this.phone.trim();
      // 1普通
      // 2空
      if (phone.length == 0) {
        return (this.status_phone = 2);
      }
      // 3格式错误
      var myreg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
      if (!myreg.test(phone)) {
        return (this.status_phone = 3);
      }
      // 4已注册
      let url = "user_check_phone.php?phone=" + phone;
      this.axios.get(url).then((res) => {
        console.log(res);
        if (res.data.code == 1) {
          this.status_phone = 4;
        } else {
          this.status_phone = 5;
        }
      });
      // 5正确
    },
    checkRepasswd() {
      let repasswd = this.repasswd.trim();
      let passwd = this.passwd.trim();

      //1普通
      //2不一致
      if (this.passwd != this.repasswd) return (this.status_repasswd = 2);
      //3一致
      this.status_repasswd = 3;
    },
    checkPasswd() {
      let passwd = this.passwd;
      // 1普通

      // 2空
      if (passwd.length == 0) {
        return (this.status_passwd = 2);
      }
      // 3长度错误
      if (passwd.length < 6 || passwd.length > 12) {
        return (this.status_passwd = 3);
      }
      // 4正确
      this.status_passwd = 4;
    },
    checkEmail() {
      let email = this.email.trim();
      //状态1 普通状态,什么都不显示
      //状态2 空
      if (email.length == 0) {
        return (this.status_email = 2);
      }
      //状态3 格式错误,依赖于正则表达式
      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!reg.test(email)) {
        return (this.status_email = 3);
      }
      //状态4 已注册
      let url = "user_check_uname.php?uname=" + email;
      this.axios.get(url).then((res) => {
        console.log(res);
        // code1代表以及存在
        // code2代表以及存在
        if (res.data.code == 1) {
          this.status_email = 4; //4表示已注册
        } else {
          this.status_email = 5; //5表示成功
        }
      });
    },
  },
};
</script>

<style>
</style>