<template>
  <div class="car">
    <!--头部 -->
    <header class="head-top rela">
      <div class>
        <a href="###" @click="goTohome()" class="aback"></a>
        <span class="topbar-title">购物车</span>
        <a href="javascript:void(0)" @click="goTohome()" class="mla"></a>
      </div>
    </header>
    <!--空购物车 -->
    <div v-show="bool" class="emptydiv">
      <div>
        <span class="u-emtcoupon">&nbsp;</span>
      </div>
      <div class="ftc emttip ft16 c666 mt">您的购物车空空如也</div>
      <div class="emt-a">
        <a href="javascript:void(0)" @click="goTohome()" class="c999 ft16 mr5">随便逛逛</a>
      </div>
    </div>

    <!-- 商品数据 -->
    <div class="shop-wrap" v-for="(item,index) in dataArr" :key="index" style="margin-bottom:50px">
      <!-- 店铺 -->
      <div class="shop">
        <input checked class="shopstatus" v-on:click="checkshop(index,$event)" type="checkbox" name="checkbox" />
        <div>
          <img src="../../assets/images/shop.png" width="25" alt />
          <span v-text="item.shopname"></span>
          <a v-on:click="del(index,$event)" href="javascript:void(0)" style="color:#000;text-decoration: none;float:right;padding-right:20px">删除</a>
        </div>
      </div>

      <!-- 购物车列表 -->
      <van-card style="margin-top:0" :num="numarr[index]" :price="item.price" :title="item.title" :thumb="item.imgurl">
        <div class="footer" slot="footer">
          <input checked class="checkstatus" v-on:click="checkgoods(index,$event)" type="checkbox" value="shop" name="checkbox" />
          <input type="button" value="-" @click="cut(index)" />
          <input type="text" @keyup="inputnum(index,$event)" v-model.lazy="numarr[index]" />
          <input type="button" value="+" @click="add(index)" />
        </div>
      </van-card>
    </div>

    <!-- 订单提交 -->
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox style="margin-left:15px;" checked-color="#fff034" v-model="checked" @click="allCheck()">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
// import Cookies from "js-cookie";
import { fail } from "assert";
export default {
  data() {
    return {
      checked: true, //多选框状态
      dataArr: [], //总数据
      numarr: [], //动态变化数组
      newArr: [], //计算总价所需数组
      bool: false
    };
  },
  methods: {
    // 增加数量+1
    async add(index) {
      this.numarr[index]++;
      let username = window.localStorage.getItem("username");
      let goodId = this.dataArr[index].goodId;
      let url = await this.$axios("http://10.3.132.218:3000/cart/inc", {
        params: {
          username,
          goodId,
          option: "inc"
        }
      });
      //当数量大于库存量时停止增加
      if (this.numarr[index] >= 9999) {
        this.numarr[index] = 9999;
      }
      this.$forceUpdate();
      this.newArr = this.numarr.slice(0);
    },
    // 减少数量-1
    async cut(index) {
      this.numarr[index]--;
      let username = window.localStorage.getItem("username");
      let goodId = this.dataArr[index].goodId;
      let url = await this.$axios("http://10.3.132.218:3000/cart/inc", {
        params: {
          username,
          goodId,
          option: "dec"
        }
      });
      if (this.numarr[index] < 0) {
        this.numarr[index] = 1;
      }
      this.$forceUpdate();
      this.newArr = this.numarr.slice(0);
    },
    // 手动输入数量
    async inputnum(index, event) {
      let el = event.currentTarget;
      let username = window.localStorage.getItem("username");
      let goodId = this.dataArr[index].goodId;
      if (el.value <= 1) {
        el.value = 1;
      }
      let goodNum = el.value;
      let url = await this.$axios("http://10.3.132.218:3000/cart/input", {
        params: {
          username,
          goodId,
          goodNum
        }
      });
    },
    // 删除一条记录
    async del(index, event) {
      let el = event.currentTarget;
      let res = confirm("您确定要删除吗？");
      let username = window.localStorage.getItem("username");
      let goodId = this.dataArr[index].goodId;
      if (this.dataArr.length == 0) {
        this.bool = true;
      } else if (this.dataArr.length !== 0) {
        this.bool = false;
      }
      if (res) {
        let url = await this.$axios("http://10.3.132.218:3000/cart/del?", {
          params: {
            username,
            goodId
          }
        });
        if (url.data.meg == "删除成功") {
          document
            .getElementsByClassName("car")[0]
            .removeChild(el.parentNode.parentNode.parentNode);
        }
      }
    },
    // 店铺复选框选择
    checkshop(index, event) {
      var el = event.currentTarget;
      document.getElementsByClassName("checkstatus")[index].checked =
        el.checked; //单选框选择的时候商品单选框跟着改变
      let num = 0;
      let len = document.getElementsByClassName("checkstatus").length;
      for (let i = 0; i < len; i++) {
        if (document.getElementsByClassName("checkstatus")[i].checked) {
          ++num;
        }
      }
      if (num == len) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    // 复选框选择
    checkgoods(index, event) {
      var el = event.currentTarget;
      document.getElementsByClassName("shopstatus")[index].checked = el.checked; //单选框选择的时候店铺跟着改变
      let num = 0;
      let len = document.getElementsByClassName("checkstatus").length;
      for (let i = 0; i < len; i++) {
        if (document.getElementsByClassName("checkstatus")[i].checked) {
          ++num;
        }
      }
      if (num == len) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    // 全选
    allCheck() {
      var total = 0;
      this.checked = !this.checked;
      let len = document.getElementsByClassName("checkstatus").length;
      //点击全选勾选所有单选框
      for (let i = 0; i < len; i++) {
        total += this.dataArr[i].price * this.newArr[i];
        document.getElementsByClassName("checkstatus")[
          i
        ].checked = this.checked;
        document.getElementsByClassName("shopstatus")[i].checked = this.checked;
      }
    },
    // 订单提交
    onSubmit() {
      if (this.dataArr.length == 0) {
        alert("您的购物车是空的哦~");
      } else if (this.dataArr.length !== 0) {
        alert("提交成功~请到我的订单完成支付！");
        this.$router.push("/tabbar/mine");
      }
    },
    //返回主页
    goTohome() {
      this.$router.push("/tabbar/home");
    }
  },
  computed: {
    totalPrice() {
      var total = 0;
      for (var i = 0; i < this.dataArr.length; i++) {
        if (this.newArr.length != 0) {
          if (this.checked) {
            total += this.dataArr[i].price * this.newArr[i];
          } else if (
            document.getElementsByClassName("checkstatus")[i].checked
          ) {
            total += this.dataArr[i].price * this.newArr[i];
          }
        } else if (this.checked && this.newArr.length == 0) {
          total += this.dataArr[i].price * this.dataArr[i].goodNum;
        }
      }
      return total * 100;
    }
  },
  async created() {
    let username = window.localStorage.getItem("username");
    let url = await this.$axios(
      "http://10.3.132.218:3000/cart?username=" + username
    );
    this.dataArr = url.data;
    // if (this.dataArr.length == 0) {
    //   this.bool = true;
    // } else if (this.dataArr.length !== 0) {
    //   this.bool = false;
    // }
    for (var i = 0; i < this.dataArr.length; i++) {
      this.numarr.push(this.dataArr[i].goodNum);
    }
    // console.log(this.dataArr); //获取最初数据
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
}
/* margin-left: 5px; */
.footer input {
  width: 30px;
  height: 25px;
  text-align: center;
  border: 0.5px solid #cccc;
  line-height: 20px;
}
.footer input:nth-child(3) {
  width: 40px;
}
.footer input:nth-child(1) {
  width: 16px;
  height: 20px;
  position: absolute;
  left: 20px;
}
/* 店铺 */
.shop {
  background: #fafafa;
  padding-left: 15px;
  border-bottom: 1px solid #eee;
  line-height: 50px;
  height: 50px;
  font-size: 16px;
  margin-top: 10px;
}
.shop input {
  float: left;
  margin: 15px 10px 0 0;
  width: 16px;
  height: 20px;
}
.shop img {
  vertical-align: middle;
  margin-right: 8px;
}
.shop span {
  background: url("../../assets/images/right_arrow.png") right center no-repeat;
  padding-right: 25px;
}
</style>
