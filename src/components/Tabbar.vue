<template>
  <div class="tabbar">
    <!-- 第一层路由 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#fff034">
      <van-tabbar-item icon="wap-home" @click="navTo('home')">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o" @click="navTo('car')">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="navTo('mine')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      navArr: ["推荐", "居家", "服装", "鞋靴", "包类"],
      navNum: 5
    };
  },
  methods: {
    onSearch() {},
    navTo(name) {
      // 编程式导航
      this.$router.push({ name });
    }
  }
};
</script>

<style scoped>
</style>



