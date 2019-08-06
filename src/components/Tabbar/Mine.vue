<template>
  <div class="mine">
    <!-- 头部 -->
    <van-nav-bar :left-arrow="false" :border="false">
      <van-icon name="setting-o" slot="left" color="#333" size="1.8rem" @click="goTOset" />
      <van-icon name="comment-o" slot="right" color="#333" size="1.8rem" @click="newsTo" />
    </van-nav-bar>
    <!-- 分割线 -->
    <div style="background:#f9f9f9; height:4px;"></div>
    <!-- 个人卡片 -->
    <div style="display:flex;align-items: center; height: 120px;padding-left:20px;">
      <!-- 头像 -->
      <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <!-- 用户名 -->
      <p style="margin-left: 20px;">新用户-622</p>
    </div>
    <!-- 分割线 -->
    <div style="background:#f9f9f9; height:4px;"></div>
    <!-- 我的订单 -->
    <div class="dingdan">
      <!-- 标题 -->
      <div
        style="display:flex;border-bottom:1px solid #f9f9f9; justify-content: space-between;padding:0 20px;height:40px;align-items: center;"
      >
        <span>我的订单</span>
        <span class="more" style="display:flex; align-items: center;color:#ddd;font-size:14px">
          查看全部
          <van-icon name="arrow" />
        </span>
      </div>
      <!-- 宫格列表 -->
      <van-grid :border="false" style="height: 100px;" class="dingdangongge">
        <van-grid-item
          v-for="(item,value) in dingdanArr"
          :key="value"
          :icon="item.icon"
          :text="item.title"
        />
      </van-grid>
    </div>
    <!-- 分割线 -->
    <div style="background:#f9f9f9; height:4px;"></div>
    <!-- 其他宫格 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item
        v-for="(item,index) in otherArr"
        :key="index"
        :icon="item.icon"
        :text="item.title"
      ></van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dingdanArr: [
        {
          icon: "invition",
          title: "待付款"
        },
        {
          icon: "send-gift",
          title: "待发货"
        },
        {
          icon: "shop-collect",
          title: "待收货"
        },
        {
          icon: "todo-list",
          title: "待评价"
        }
      ],
      otherArr: [
        {
          icon: "coupon",
          title: "优惠券"
        },
        {
          icon: "location",
          title: "收货地址"
        },
        {
          icon: "eye",
          title: "浏览记录"
        },
        {
          icon: "audio",
          title: "线上投诉"
        },
        {
          icon: "phone",
          title: "电话投诉"
        },
        {
          icon: "shop",
          title: "商家入驻"
        }
      ]
    };
  },
  methods: {
    //跳转系统设置
    goTOset() {
      this.$router.push({ name: "setting" });
    },
    //跳转消息页
    newsTo() {
      this.$router.push("/news");
    }
  }
};
</script>

<style scoped>
* {
  color: #333;
}
.more *[data-v-c53f90f8] {
  color: #ddd;
  font-size: 16px;
}
.dingdan .dingdangongge *[data-v-c53f90f8] {
  color: rgba(255, 230, 0, 0.932);
}
</style>
