<template>
  <div class="Detail">
    <!-- 1.返回按钮 -->
    <div class="header">
      <van-icon name="arrow-left" size="30px" @click="goBack" />
    </div>
    <!-- 2.轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="red" style="background:#eee">
      <van-swipe-item v-for="(item,index) in interfaceAddress.imgs" :key="index">
        <img :src="item" width="375" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 3.标题 -->
    <div class="d_detail">
      <div class="tit" v-text="interfaceAddress.title"></div>
      <div class="price">
        {{'￥'+price}}
        <span v-text="'￥'+delprice"></span>
        <span id="discount"></span>
      </div>
      <div class="lable"></div>
    </div>
    <!-- 4.品牌介绍 -->
    <div class="d_brand">
      <p class="d_tit">品牌介绍</p>
      <div class="d_img" v-if="interfaceAddress.brand">
        <img id="brand_img" src width="25" height="25" style="width: 25px" />
        <span class="font" v-text="interfaceAddress.brand.name"></span>
      </div>
      <p id="d_detail" class="d_deta"></p>
    </div>
    <!-- 5.商品详情页 -->
    <div class="titile">商品详情图</div>
    <div class="d_detail2" v-html="interfaceAddress.detail"></div>
    <!-- 6.底部商品导航 -->
    <van-goods-action class="buy">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goToCar()" :info="num" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        style="background:#333333"
        @click="joinButton"
        class="joinBtn"
      />
      <van-goods-action-button
        type="default"
        text="立即购买"
        style="background:#fff034"
        @click="buyButton"
      />
    </van-goods-action>

    <!-- 当处于为登录状态时，弹出显示层 -->
    <van-popup v-model="show" v-show="show2">
      <div class="new-alert">
        <div class="no-login">
          <span>你当前未登录</span>
        </div>
        <a class="gre-btn" @click="goSign()">我有wants账号，去登录&gt;&gt;</a>
        <a class="gre-btn" @click="goSign()">去注册&gt;&gt;</a>
        <a href="javascript:;" @click="close()">
          <div class="thisxclose">×</div>
        </a>
      </div>
    </van-popup>
  </div>
</template>

<script>
// import Cookies from "js-cookie";
export default {
  data() {
    return {
      interfaceAddress: [], //接口地址
      //传给后端的数据price、shopname、imgurl、title
      price: "",
      shopname: "",
      imgurl: "",
      title: "",

      delprice: "",
      rowid: 0, //行id
      colid: 0, //列id
      num: 0, //购物车上标数量

      bool: false,
      show: false,
      show2: true
    };
  },
  methods: {
    //返回按钮
    goBack() {
      this.$router.go(-1);
    },
    //跳转登录页
    goSign() {
      this.$router.push("/sign");
    },
    // 加入购物车
    joinButton() {
      let userName = window.localStorage.getItem("username");
      let goodsId = this.rowid.toString() + this.colid.toString(); //获取行与列的id传给后端查询数据

      //未登录
      if (userName == undefined) {
        this.show = true; //显示登陆弹出层
      } else {
        //已登录
        this.$axios
          .get("http://47.107.134.140:3000/cart/insert?", {
            params: {
              username: userName,
              goodId: goodsId,
              shopname: this.shopname,
              price: this.price,
              imgurl: this.imgurl,
              title: this.title
            }
          })
          .then(res => {
            // console.log(res);
          });
        this.num++;
      }
    },
    //立即购买
    buyButton() {
      // console.log("立即购买");
    },
    // 点击显示层关闭按钮
    close() {
      this.show2 = false;
      this.show = false;
    },
    goToCar() {
      this.$router.push("/tabbar/car");
    }
  },
  async activated() {
    let url = this.$route.path; //获取当前页面网址
    this.rowid = url.substr(-3, 1) - 1; //获取网址传过来的行id
    this.colid = url.substr(-1) * 1; //获取网址传过来的列id

    let urlArr = [
      [
        "http://api.wantscart.com/product/144074/",
        "http://api.wantscart.com/product/142651/",
        "http://api.wantscart.com/product/150465/"
      ],
      [
        "http://api.wantscart.com/product/140523/",
        "http://api.wantscart.com/product/145474/",
        "http://api.wantscart.com/product/142382/"
      ],
      [
        "http://api.wantscart.com/product/144062/",
        "http://api.wantscart.com/product/144596/",
        "http://api.wantscart.com/product/139963/"
      ],
      [
        "http://api.wantscart.com/product/139255/",
        "http://api.wantscart.com/product/147711/",
        "http://api.wantscart.com/product/147707/"
      ],
      [
        "http://api.wantscart.com/product/131316/",
        "http://api.wantscart.com/product/144948/",
        "http://api.wantscart.com/product/144948/"
      ],
      [
        "http://api.wantscart.com/product/142205/",
        "http://api.wantscart.com/product/145307/",
        "http://api.wantscart.com/product/145305/"
      ]
    ];
    let interfaceUrl = await this.$axios(urlArr[this.rowid][this.colid]); //urlArr[id]:接口地址
    this.interfaceAddress = interfaceUrl.data;

    //价格处理
    //在售价格
    let price = this.interfaceAddress.price.toString();
    this.price = price.slice(0, -2);
    //现售价
    let delprice = this.interfaceAddress.tag_price.toString();
    this.delprice = delprice.slice(0, -2);

    //传给后端的数据
    this.shopname = this.interfaceAddress.creator.name;
    this.imgurl = this.interfaceAddress.small_img;
    this.title = this.interfaceAddress.title;
  }
  // deactivated() {
  //   let url = ""; //清除地址，否则要刷新才能出现第二次跳转后的详情页
  // },
  // destoryed() {
  //   let url = "";
  // }
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
  height: 30px;
  line-height: 20px;
  z-index: 9999;
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
.Detail {
  overflow-x: hidden;
}

/* 弹出层 */
.new-alert {
  width: 320px;
  border-radius: 0.5em;
  background: #fff;
  position: relative;
  overflow: hidden;
  padding: 1em;
  text-align: center;
}

.no-login {
  font-size: 20px;
  padding: 1em;
  text-align: center;
}
span {
  vertical-align: middle;
  color: #000;
}
.gre-btn {
  background: #26c269;
  width: 95%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 3%;
  color: #fff;
  display: block;
  text-align: center;
}

.thisxclose {
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  background: #f8f8f8;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 27px;
  color: #666;
  font-size: 2.4em;
}
</style>
