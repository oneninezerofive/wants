<template>
  <div class="home">
    <!-- 1.搜索 -->
    <van-search
      style="padding-left:45px;position:fixed;top:0;width:100%;z-index:9999;"
      background="#fff034"
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
    <van-tabs
      style="margin-top:60px;"
      animated
      line-width="75px"
      line-height="1px"
      :swipe-threshold="navNum"
    >
      <!-- 推荐 -->
      <keep-alive>
        <van-tab :title="navArr[0]">
          <Tuijian />
        </van-tab>
      </keep-alive>
      <!-- 居家 -->
      <keep-alive>
        <van-tab :title="navArr[1]">
          <Jujia />
        </van-tab>
      </keep-alive>
      <!-- 服装 -->
      <keep-alive>
        <van-tab :title="navArr[2]">
          <Fuzhuang />
        </van-tab>
      </keep-alive>

      <!-- 鞋靴 -->
      <keep-alive>
        <van-tab :title="navArr[3]">
          <Shoes />
        </van-tab>
      </keep-alive>

      <!-- 包类 -->
      <keep-alive>
        <van-tab :title="navArr[4]">
          <Bag />
        </van-tab>
      </keep-alive>
    </van-tabs>
    <!-- 尾部 -->
    <PubFooter />
    <!-- 回到顶部 -->
    <div v-show="bool" class="back-top" @click="backTop(100)"></div>
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
      navNum: 5,
      bool: false
    };
  },
  methods: {
    navTo(name) {
      this.$router.push({
        name
      });
    },
    newsTo() {
      this.$router.push("/news");
    },
    // 点击搜索跳转到搜索页
    toSearch() {
      this.$router.push({
        name: "search"
      });
    },
    // 回到顶部
    backTop(speed) {
      var scrollTop = window.scrollY; //目前的滚动距离
      var timer = setInterval(function() {
        scrollTop -= speed;
        if (scrollTop <= 0) {
          clearInterval(timer);
          window.scrollTo(0, 0);
        } else {
          window.scrollTo(0, scrollTop);
        }
      }, 30);
    }
  },
  components: {
    Tuijian,
    PubFooter,
    Shoes,
    Bag,
    Jujia,
    Fuzhuang
  },
  activated() {
    // 回到顶部
    window.onscroll = () => {
      if (window.scrollY >= 80) {
        this.bool = true;
      } else {
        this.bool = false;
      }
    };
  },
  deactivated() {
    window.onscroll = null;
  },
  destoryed() {
    window.onscroll = null;
  }
};
</script>

<style scoped>
/* 回到顶部 */
.back-top {
  position: fixed;
  right: 10px;
  width: 28px;
  height: 28px;
  background: url(../../assets/images/back-top.png);
  background-size: 100% auto;
  z-index: 10;
  bottom: 65px;
}
</style>






