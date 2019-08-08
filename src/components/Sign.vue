<template>
  <div class="login">
    <van-nav-bar title="登录" left-arrow @click-left="goBack"></van-nav-bar>
    <div class="zy-tex">
      <p class="text">登录</p>
      <p class="det">如果你是第一次登录，系统将自动创建账号</p>
      <!-- 输入框 -->
      <van-cell-group>
        <van-field v-model="username" placeholder="请输入用户名" type="text" />
        <van-field v-model="pw" placeholder="密码" type="password" />
      </van-cell-group>
      <!-- 大号按钮 -->
      <van-button type="primary" size="large" @click="sign">账号登录</van-button>
      <!-- 提示 -->
    </div>
    <p class="tisi">
      *登录即表示你同意"
      <span style="color:#07c160">用户使用协议</span>"
    </p>
  </div>
</template>

<script>
// import { log } from "util";
export default {
  data() {
    return {
      username: "",
      pw: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    sign() {
      //登录
      // 查看是否是第一次登录
      let status = window.localStorage.getItem("status");
      var obj = {};
      // 第一次登录,发送用户名和密码
      if (status != 1) {
        if (this.username.trim() && this.pw.trim()) {
          obj = {
            username: this.username.trim(),
            password: this.pw.trim()
          };
        } else {
          alert("请输入用户名和密码");
        }
      } else {
        // 第二次登录，发送token
        obj = {
          // tokenCode: Cookies.get("tokenCode")
          tokenCode: window.localStorage.getItem("tokenCode")
        };
      }
      this.$axios.post("http://10.3.132.218:3000/signin/login", obj).then(
        function(response) {
          let data = response.data;
          if (data.status == 1) {
            // 登录成功
            window.localStorage.setItem("status", 1);
            window.localStorage.setItem("username", data.username);
            // window.localStorage.getItem(name);
            if (data.token) {
              window.localStorage.setItem("tokenCode", data.token);
            }
            // Cookies.set("status", 1);
            // Cookies.set("username", data.username);
            // if (data.token) {
            //   Cookies.set("tokenCode", data.token);
            // }
            this.$router.push({
              path: "/"
            });
          } else {
            // 登录失败
            window.localStorage.setItem("status", 0);
            // 清除token和用户名
            window.localStorage.removeItem("tokenCode");
            window.localStorage.removeItem("username");
            // Cookies.remove("tokenCode");
            // Cookies.remove("username");
          }
          alert(data.meg);
          // console.log(this.$router);
        }.bind(this)
      );
    }
  }
};
</script>

<style scoped>
.van-cell-group {
  position: static;
}
.van-nav-bar .van-icon {
  color: #000;
  font-weight: bolder;
}
.zy-tex {
  height: 100%;
  padding: 50px 20px;
}
.text {
  margin-bottom: 10px;
}
.det {
  font-size: 12px;
  margin-bottom: 50px;
}

.van-cell {
  border-bottom: 0.5px solid #ccc;
}
.van-button--large {
  height: 40px;
  line-height: 40px;
  margin-top: 50px;
}
.van-cell:not(:last-child)::after {
  border: none;
}
.tisi {
  position: fixed;
  bottom: 50px;
  font-size: 12px;
  text-align: center;
  width: 100%;
}
</style>
