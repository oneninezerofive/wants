<template>
  <div class="home">
    <!-- 1.搜索 -->
    <van-search
      style="padding-left:45px;"
      background="#fff034"
      class="fixedSearch"
      v-model="value"
      placeholder=" 潮流新品特卖 "
      show-action
      @click="toSearch()"
      shape="round"
    >
      <div slot="action">
        <img
          src="http://w.wantscart.com/static/images/3.png"
          width="22"
          style="position:absolute;left:10px;top:20px;"
        />
      </div>
      <div slot="action">
        <img
          src="http://w.wantscart.com/static/images/2.png"
          width="22"
          style="margin-top:10px"
          @click="newsTo"
        />
      </div>
    </van-search>
    <!-- 2.标签栏 -->
    <van-tabs animated line-width="75px" line-height="1px" :swipe-threshold="navNum">
      <!-- 推荐 -->
      <van-tab :title="navArr[0]">
        <Tuijian />
      </van-tab>
      <!-- 居家 -->
      <van-tab :title="navArr[1]">
        <Jujia />
      </van-tab>
      <!-- 服装 -->
      <van-tab :title="navArr[2]">
        <Fuzhuang />
      </van-tab>
      <!-- 鞋靴 -->
      <van-tab :title="navArr[3]">
        <Shoes />
      </van-tab>
      <!-- 包类 -->
      <van-tab :title="navArr[4]">
        <Bag />
      </van-tab>
    </van-tabs>
    <!-- 尾部 -->
    <PubFooter />
  </div>
</template>
<script>
// 推荐
import Tuijian from "../Home/Tuijian";
import Fuzhuang from "../Home/Fuzhuang";
// 鞋靴
import Shoes from "../Home/Shoes";
// 包类
import Bag from "../Home/Bag";
// 公共底部
import PubFooter from "../Home/PubFooter";
import Jujia from "../Home/Jujia";
export default {
  data() {
    return {
      value: "", //1.搜索框
      navArr: ["推荐", "居家", "服装", "鞋靴", "包类"],
      navNum: 5
    };
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    },
    newsTo() {
      this.$router.push("/news");
    },
    toSearch(){
       this.$router.push({
          name: "search"
       })
    }
  },
  components: {
    Tuijian,
    PubFooter,
    Shoes,
    Bag,
    Jujia,
    Fuzhuang
  }
};
</script>






