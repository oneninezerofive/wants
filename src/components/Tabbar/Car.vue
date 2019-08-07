<template>
  <div class="car">
    <!-- 1.头部 -->
    <header class="head-top rela">
      <div class>
        <a href="http://localhost:8080/#/tabbar/home" class="aback"></a>
        <span class="topbar-title">购物车</span>
        <a href="http://localhost:8080/#/tabbar/home" class="mla"></a>
      </div>
    </header>
    <!-- 2.空购物车 -->
    <!-- <div class="emptydiv">
      <div>
        <span class="u-emtcoupon">&nbsp;</span>
      </div>
      <div class="ftc emttip ft16 c666 mt">您的购物车空空如也</div>
      <div class="emt-a">
        <a href="http://localhost:8080/#/tabbar/home" class="c999 ft16 mr5">随便逛逛</a>
      </div>
    </div>-->
    <div></div>
    <!-- 购物车列表 -->
    <van-card
      :num="nowNum"
      :price="price"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    >
      <div slot="footer">
        <!-- <van-button type="default" size="mini" @click="cut">-</van-button>
        <span class="count" v-text="nowNum"></span>
        <van-button type="default" size="mini" @click="add">+</van-button>-->
        <input type="button" value="-" class="count" @click="cut" />
        <input type="text" :value="nowNum" class="count" />
        <input type="button" value="+" class="count" @click="add" />
        <van-checkbox v-model="checked"></van-checkbox>
      </div>
    </van-card>
    <!-- 订单提交 -->
    <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //多选框状态
      checked: true,
      //当前数量
      nowNum: 1,
      //单价
      price: 50,
      //总格：
      total: 5000
    };
  },
  methods: {
    // 增加数量
    add() {
      if (this.nowNum >= 99) {
        this.nowNum = 99;
      }
      this.nowNum++;
      let price = 50;
      this.total = price * this.nowNum * 100;
    },
    // 减少数量
    cut() {
      if (this.nowNum <= 1) {
        this.nowNum = 1;
      } else {
        this.nowNum--;
        let price = 50;
        this.total = price * this.nowNum * 100;
      }
    },
    // 订单提交
    onSubmit() {}
  }
};
</script>

<style scoped>
.head-top {
  height: 50px;
  line-height: 50px;
  position: relative;
  padding: 0 1em;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
  background: #fff;
  color: #333;
}
.head-top .aback {
  background: url(https://static.epetbar.com/mpet/images/personal-bico1.png)
    no-repeat;
  background-size: 9px 17px;
  display: block;
  width: 22px;
  height: 20px;
  position: absolute;
  margin-top: 16px;
}
.topbar-title {
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  margin: 0 auto;
  font-size: 1.5em;
}
.mla {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-top: 14px;
  position: relative;
  z-index: 100;
  cursor: pointer;
  background: url(https://static.epetbar.com/mpet/images/imgtk-new.png)
    no-repeat;
  background-size: 20px 20px;
  position: absolute;
  top: 0;
  right: 1em;
}
/* 2 */
.emptydiv {
  vertical-align: middle;
  width: 100%;
  margin-top: 35%;
}
.u-emtcoupon {
  display: inline-block;
  margin: 0;
  background: url(https://static.epetbar.com/mpet/images/empty.png) no-repeat
    center center;
  background-size: auto 100%;
  width: 100%;
  height: 110px;
}
/* 您的购物车空空如也 */
.emttip {
  color: #666;
  font-size: 1em;
  margin-top: 1em;
  text-align: center;
}
/* 随便逛逛 */
.emt-a {
  margin-top: 1.3em;
  margin-left: 35%;
}
.emt-a a {
  border: 1px solid #f03e3e;
  color: #f03e3e;
  border-radius: 30px;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  width: 90px;
  font-size: 1em;

  text-align: center;
}
/* 当前数量 */
.count {
  width: 50px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  text-align: center;
  border: 0.5px solid #cccc;
  /* margin-left: 5px; */
}
</style>
