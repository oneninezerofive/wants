<template>
  <div class="setting">
    <!-- 返回头部 -->
    <div class="van-nav-bar">
      <van-icon name="arrow-left" @click="goBack" />
      <span>系统设置</span>
      <div></div>
    </div>
    <!-- 清楚缓存 -->
    <div class="option">
      <span>清除缓存</span>
      <van-icon name="arrow" />
    </div>
    <!-- 关于 -->
    <div class="option">
      <span>关于WANTS</span>
      <van-icon name="arrow" />
    </div>
    <!-- 注销 -->
    <div class="option">
      <span>注销账户</span>
      <van-icon name="arrow" />
    </div>
    <!-- 退出登录 -->
    <div class="option button" @click="showPopup">
      <span>退出登录</span>
    </div>
    <van-popup v-model="show" round :style="{ height: '15%',width:'70%' }">
      <div class="tanchu">
        <div class="meg">确定退出登录？</div>
        <div class="btn">
          <span @click="canl">取消</span>
          <span @click="comfQiut">确定</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 引入js-cookie
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    // 返回
    goBack() {
      this.$router.go(-1);
    },
    // 弹出框
    showPopup() {
      this.show = true;
    },
    // 取消
    canl() {
      this.show = false;
    },
    // 确定退出跳转首页
    comfQiut() {
      // 清除cookie中的登录信息
      // Cookies.set("status", 0);
      // Cookies.remove("tokenCode");
      // Cookies.remove("username");
      // 清除localStorage
      window.localStorage.clear();
      // 隐藏弹出层
      this.show = false;
      // 跳转首页
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
.setting {
  height: 100%;
  background: rgb(249, 249, 249);
}
.van-nav-bar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 10px;
}
.van-nav-bar .van-icon {
  color: #000;
}
.van-popup::-webkit-scrollbar {
  display: none;
}
.option {
  display: flex;
  padding: 0 20px;
  margin: 5px 10px;
  justify-content: space-between;
  background: #fff;
  height: 50px;
  align-items: center;
  color: #333;
}
.button {
  color: rgb(245, 245, 117);
  justify-content: center;
  font-size: 18px;
}
.tanchu {
  width: 100%;
  height: 100%;
}
.tanchu > div {
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.meg {
  font-size: 18px;
  border-bottom: 1px solid rgb(249, 249, 249);
}
.btn {
  display: flex;
}
.btn > span {
  flex: 1;
  text-align: center;
  color: #ddd;
}
.btn > span:last-child {
  border-left: 1px solid rgb(249, 249, 249);
  color: #ffd01e;
}
</style>


