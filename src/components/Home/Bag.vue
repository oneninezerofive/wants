<template>
  <div class="shoes">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in swipeArr" :key="index">
        <img :src="item" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分类 -->
    <div style="overflow:hidden">
      <img
        v-for="(item,index) in sortArr"
        :key="index"
        :src="item.item_image"
        style="float:left;width:25%"
      />
    </div>
    <!-- 一张图 -->
    <div>
      <img src="http://static.wantscart.com/product/1551667153609_1000_500" />
    </div>
    <!-- 新品上架-运动鞋专场 -->
    <div>
      <!-- 新品上架 -->
      <div class="template_4" style="padding-bottom: 20px;">
        <!-- 标题 -->
        <div class="template_4_t">
          <p>
            新品上架
            <span class="right" style>
              <a data-type="3" data-id="3786">查看更多 &gt;</a>
            </span>
          </p>
        </div>
        <!-- 图片内容 -->
        <div class="template_con" style="overflow-x:auto">
          <div style="display:flex;width:1000px">
            <!-- 每一个小框 -->
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 96.4286px; margin-right: 15px;"
              v-for="(item,index) in banxieArr"
              :key="index"
            >
              <a data-type="1" data-id="115925">
                <img :src="item.entity.small_img" />
                <p v-text="item.entity.title"></p>
                <p class="clear">
                  <span class="left" style="color: #FF405B">¥{{item.entity.special_price/100}}</span>
                  <span
                    class="right"
                    style="color: #A8ABAF;text-decoration:line-through;"
                  >¥{{item.entity.tag_price/100}}</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 钱包卡包 -->
      <div class="template_4" style="padding-bottom: 20px;">
        <!-- 标题 -->
        <div class="template_4_t">
          <p>
            钱包卡包
            <span class="right" style>
              <a data-type="3" data-id="3786">查看更多 &gt;</a>
            </span>
          </p>
        </div>
        <!-- 图片内容 -->
        <div class="template_con" style="overflow-x:auto">
          <div style="display:flex;width:1000px">
            <!-- 每一个小框 -->
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 96.4286px; margin-right: 15px;"
              v-for="(item,index) in pinzhiArr"
              :key="index"
            >
              <a data-type="1" data-id="115925">
                <img :src="item.entity.small_img" />
                <p v-text="item.entity.title"></p>
                <p class="clear">
                  <span class="left" style="color: #FF405B">¥{{item.entity.special_price/100}}</span>
                  <span
                    class="right"
                    style="color: #A8ABAF;text-decoration:line-through;"
                  >¥{{item.entity.tag_price/100}}</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 轮播图
      swipeArr: [
        "http://static.wantscart.com/product/1556438080153_1000_500",
        "http://static.wantscart.com/product/1553929626351_1000_500"
      ],
      // 分类
      sortArr: [],
      //新品特价
      banxieArr: [],
      //鞋包卡包
      pinzhiArr: []
    };
  },
  async created() {
    let result = await this.$axios(
      "https://www.easy-mock.com/mock/5d48fa0e5ea3ee58388d1d01/wants/bag"
    );
    let data = result.data.blocks;
    // 分类
    this.sortArr = data[1].block_items;
    // 新平上架
    let banxie = await this.$axios(
      "http://api.wantscart.com/aggregator/4043/41/entity?limit=10&limit=10"
    );
    this.banxieArr = banxie.data;
    // 鞋包卡包
    let pinzhi = await this.$axios(
      "http://api.wantscart.com/aggregator/3794/41/entity?limit=10&limit=10"
    );
    this.pinzhiArr = pinzhi.data;
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
/*  标题  */
.template_4_t p {
  font-size: 14px;
  padding: 25px 15px;
}
.template_4_t p .right {
  color: #a8abaf;
}
.right {
  float: right;
}
a {
  text-decoration: none;
  color: #000;
  display: inline-block;
}
/* 内容*/
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}
.template_con .swiper-slide a {
  display: block;
  height: 100%;
}
.template_con::-webkit-scrollbar {
  display: none;
}
.template_con .swiper-slide a p {
  font-size: 12px;
  padding: 5px 4px;
}
.template_con .swiper-slide a p:first-of-type {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>


