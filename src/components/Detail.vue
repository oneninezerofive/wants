<template>
  <div class="Detail">
    <!-- 返回按钮 -->
    <div class="header">
      <van-icon name="arrow-left" size="30px" @click="goBack" />
      <van-icon name="apps-o" size="30px" style="float:right" />
    </div>
    <!-- 1.轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="red" style="background:#eee">
      <van-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 2.标题 -->
    <div class="d_detail">
      <div class="tit" v-text="title"></div>
      <div class="price" v-text="price">
        <span v-text="delprice"></span>
        <span id="discount"></span>
      </div>
      <div class="lable"></div>
    </div>
    <!-- 3.品牌介绍 -->
    <div class="d_brand">
      <p class="d_tit">品牌介绍</p>
      <div class="d_img">
        <img id="brand_img" src width="25" height="25" style="width: 25px" />
        <span class="font" v-text="brand"></span>
      </div>
      <p id="d_detail" class="d_deta"></p>
    </div>
    <!-- 4.商品详情页 -->
    <div class="titile">商品详情图</div>
    <div class="d_detail2">
      <img v-for="(item,index) in detail" :key="index" :src="item" alt />
    </div>
    <!-- 商品导航 -->
    <div class="buy">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" :info="num" @click="goTOcar" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          style="background:#333333"
          @click="joinButton"
        />
        <van-goods-action-button
          type="default"
          text="立即购买"
          style="background:#fff034"
          @click="buyButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
// import detaildata from '../assets/detailData/data'
export default {
  data() {
    return {
      // imgs:detaildata.imgs,
      // title:detaildata.title,
      // price:detaildata.price,
      // brand:detaildata.brand,
      // detail:detaildata.detail

      num: 1, //当前购买数量
      imgs: [
        "http://static.wantscart.com/product/1560233565496_750_1000",
        "http://static.wantscart.com/product/1560234495420_750_783",
        "http://static.wantscart.com/product/1560234502298_750_884"
      ],
      title: "小蜜蜂情侣小白鞋板鞋A1",
      price: "¥126",
      delprice: "￥258",
      brand: "CLADECL",
      detail: [
        "http://static.wantscart.com/product/1560234639592_750_356",
        "http://static.wantscart.com/product/1560238361099_743_207",
        "http://static.wantscart.com/product/1560234282157_750_555",
        "http://static.wantscart.com/product/1560234640721_790_131",
        "http://static.wantscart.com/product/1560234639729_750_518",
        "http://static.wantscart.com/product/1560234278714_750_884",
        "http://static.wantscart.com/product/1560234272336_750_764",
        "http://static.wantscart.com/product/1560234272787_750_1036",
        "http://static.wantscart.com/product/1560234279020_750_1204",
        "http://static.wantscart.com/product/1560234303189_750_599",
        "http://static.wantscart.com/product/1560234293560_750_1131",
        "http://static.wantscart.com/product/1560234283418_750_946",
        "http://static.wantscart.com/product/1560234298680_750_824",
        "http://static.wantscart.com/product/1560234301813_750_783",
        "http://static.wantscart.com/product/1560234307616_750_1086",
        "http://static.wantscart.com/product/1560234296373_750_1343",
        "http://static.wantscart.com/product/1560234297102_750_1120",
        "http://static.wantscart.com/product/1560234289057_750_928",
        "http://static.wantscart.com/product/1560234291162_750_725",
        "http://static.wantscart.com/product/1560234288868_750_578",
        "http://static.wantscart.com/product/1533195277716_790_553"
      ]
    };
  },
  methods: {
    //返回按钮
    goBack() {
      this.$router.go(-1);
    },
    joinButton() {
      // 加入购物车
    },
    buyButton() {
      //立即购买
    },
    //跳转购物车
    goTOcar() {
      this.$router.push({ path: "tabbar/car" });
    }
  }
};
</script>

<style scoped>
.Detail {
  background: #eee;
  /* height: 2000px; */
}
.header {
  width: 100%;
  background: #eee;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 20px;
}
.d_detail {
  padding: 25px 0;
  background: #fff;
}
.d_detail .tit {
  width: 90%;
  margin: auto;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
}
.d_detail .price {
  padding: 10px 0;
  text-align: center;
  font-size: 18px;
  color: rgba(253, 64, 91, 1);
}
.d_detail .price span:first-child {
  text-decoration: line-through;
}
.d_detail .price span {
  font-size: 14px;
  color: #999;
  margin-left: 5px;
}
/* 品牌介绍 */
.d_brand {
  width: 100%;
  margin: 16px 0;
  border: 1px solid #ccc;
  background: #fff;
}
.d_brand .d_tit {
  border-bottom: 1px solid #eee;
  margin: 5px 0;
  line-height: 20px;
  padding: 10px;
  color: #484848;
}
.d_brand .d_img {
  margin: 2px 10px;
  padding: 2% 0;
}
.d_brand #brand_img {
  margin: 2px 15px;
}
.font {
  color: #484848;
  line-height: 30px;
  display: inline-block;
  margin-top: -20px;
  vertical-align: middle;
}
.d_brand .d_deta {
  margin: 0 15px;
  line-height: 40px;
  color: #a4a4a4;
}
/* 商品详情页 */
.titile {
  text-align: left;
  font-size: 14px;
  padding: 11px;
  border-top: 1px solid #eee;
  background: #fff;
  margin-top: 16px;
}
.d_detail2 {
  width: 100%;
  background: #fff;
  padding: 25px 0;
}
.d_detail2 img {
  width: 100%;
  margin: -3px;
}
</style>
