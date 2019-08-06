<template>
  <div class="news">
    <div class="head">
      <!-- 返回按钮 -->
      <van-nav-bar title="消息" left-arrow @click-left="goBack" />
    </div>
    <div class="show">
      <van-icon name="orders-o" size="30px" />
      <p>暂无消息</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //返回逻辑
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.head {
  margin: 10px 0 10px 10px;
}
.show,
.news p {
  text-align: center;
}
.show {
  margin-top: 300px;
}
.van-nav-bar .van-icon {
  color: #333;
  font-size: 20px;
}
</style>


