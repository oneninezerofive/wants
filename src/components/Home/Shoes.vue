<template>
    <div class="shoes">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in swipeArr" :key="index">
                <img :src="item" width="100%"/>
            </van-swipe-item>
        </van-swipe>
        <!-- 分类 -->
        <div style="overflow:hidden">
            <img 
            v-for="(item,index) in sortArr"
            :key="index"
             :src="item.item_image" 
             style="float:left;width:25%">
        </div>
        <!-- 两张图 -->
        <div>
            <img src="http://static.wantscart.com/product/1557224280268_2000_1000">
            <img src="http://static.wantscart.com/product/1557222816805_2000_1000">
        </div>
        <!-- 板鞋特卖-运动鞋专场 -->
        <div>
            <!-- 第一行 -->
           <div class="template_4" style="padding-bottom: 20px;">
               <!-- 标题 -->
                <div class="template_4_t">
                    <p>板鞋特卖<span class="right" style=""><a data-type="3" data-id="3786">查看更多 &gt;</a></span></p>
                </div>
                <!-- 图片内容 -->
                <div class="template_con" style="overflow-x:auto">
                    <div style="display:flex;width:1000px">
                        <!-- 每一个小框 -->
                        <div class="swiper-slide swiper-slide-active" 
                        style="width: 96.4286px; margin-right: 15px;"
                        v-for="(item,index) in banxieArr" :key="index"
                        >
                            <a data-type="1" data-id="115925">
                                <img :src="item.entity.small_img">
                                <p v-text="item.entity.title"></p>
                                <p class="clear">
                                    <span class="left" style="color: #FF405B">¥{{item.entity.special_price/100}}</span>
                                    <span class="right" style="color: #A8ABAF;text-decoration:line-through;">¥{{item.entity.tag_price/100}}</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                        <!-- 第二行 -->
           <div class="template_4" style="padding-bottom: 20px;">
               <!-- 标题 -->
                <div class="template_4_t">
                    <p>品质鞋靴<span class="right" style=""><a data-type="3" data-id="3786">查看更多 &gt;</a></span></p>
                </div>
                <!-- 图片内容 -->
                <div class="template_con" style="overflow-x:auto">
                    <div style="display:flex;width:1000px">
                        <!-- 每一个小框 -->
                        <div class="swiper-slide swiper-slide-active" 
                        style="width: 96.4286px; margin-right: 15px;"
                        v-for="(item,index) in pinzhiArr" :key="index"
                        >
                            <a data-type="1" data-id="115925">
                                <img :src="item.entity.small_img">
                                <p v-text="item.entity.title"></p>
                                <p class="clear">
                                    <span class="left" style="color: #FF405B">¥{{item.entity.special_price/100}}</span>
                                    <span class="right" style="color: #A8ABAF;text-decoration:line-through;">¥{{item.entity.tag_price/100}}</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                        <!-- 第三行 -->
           <div class="template_4" style="padding-bottom: 20px;">
               <!-- 标题 -->
                <div class="template_4_t">
                    <p>男士皮鞋<span class="right" style=""><a data-type="3" data-id="3786">查看更多 &gt;</a></span></p>
                </div>
                <!-- 图片内容 -->
                <div class="template_con" style="overflow-x:auto">
                    <div style="display:flex;width:1000px">
                        <!-- 每一个小框 -->
                        <div class="swiper-slide swiper-slide-active" 
                        style="width: 96.4286px; margin-right: 15px;"
                        v-for="(item,index) in manArr" :key="index"
                        >
                            <a data-type="1" data-id="115925">
                                <img :src="item.entity.small_img">
                                <p v-text="item.entity.title"></p>
                                <p class="clear">
                                    <span class="left" style="color: #FF405B">¥{{item.entity.special_price/100}}</span>
                                    <span class="right" style="color: #A8ABAF;text-decoration:line-through;">¥{{item.entity.tag_price/100}}</span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                        <!-- 第四行 -->
           <div class="template_4" style="padding-bottom: 20px;">
               <!-- 标题 -->
                <div class="template_4_t">
                    <p>运动鞋专场<span class="right" style=""><a data-type="3" data-id="3786">查看更多 &gt;</a></span></p>
                </div>
                <!-- 图片内容 -->
                <div class="template_con" style="overflow-x:auto">
                    <div style="display:flex;width:1000px">
                        <!-- 每一个小框 -->
                        <div class="swiper-slide swiper-slide-active" 
                        style="width: 96.4286px; margin-right: 15px;"
                        v-for="(item,index) in sportArr" :key="index"
                        >
                            <a data-type="1" data-id="115925">
                                <img :src="item.entity.small_img">
                                <p v-text="item.entity.title"></p>
                                <p class="clear">
                                    <span class="left" style="color: #FF405B">¥{{item.entity.special_price/100}}</span>
                                    <span class="right" style="color: #A8ABAF;text-decoration:line-through;">¥{{item.entity.tag_price/100}}</span>
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
        "http://static.wantscart.com/product/1557222672895_2000_1000",
        "http://static.wantscart.com/product/1557222672895_2000_1000"
      ],
      // 分类
      sortArr: [],
      //板鞋特卖-运动鞋专场
      //板鞋特卖
      banxieArr: [],
      //品质鞋靴
      pinzhiArr: [],
      //男士皮鞋
      manArr: [],
      //运动鞋专场
      sportArr: []
    };
  },
  async created() {
    let result = await this.$axios(
      "http://api.wantscart.com/app/layout/tab/8?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22gender%22%3A%221%22%2C%22os%22%3A%221%22%7D"
    );
    let data = result.data.blocks;
    // 分类
    this.sortArr = data[1].block_items;
    // 板鞋特卖
    let banxie = await this.$axios(
      "http://api.wantscart.com/aggregator/3786/41/entity?limit=10&limit=10"
    );
    this.banxieArr = banxie.data;
    // 品质鞋靴
    let pinzhi = await this.$axios(
      "http://api.wantscart.com/aggregator/3787/41/entity?limit=10&limit=10"
    );
    this.pinzhiArr = pinzhi.data;
    // 男士皮鞋
    let man = await this.$axios(
      "http://api.wantscart.com/aggregator/3788/41/entity?limit=10&limit=10"
    );
    this.manArr = man.data;
    // 运动鞋专场
    let sport = await this.$axios(
      "http://api.wantscart.com/aggregator/3789/41/entity?limit=10&limit=10"
    );
    this.sportArr = sport.data;
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


