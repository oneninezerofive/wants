<template>
  <div class="jujia">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in SwipeArr" :key="index">
        <img width="100%" :src="item.item_image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 热门分类 -->
    <img src="http://static.wantscart.com/product/1553067022737_1000_86" alt height="36" />
    <div class="template">
      <div style="width: 25%; float: left" v-for="(item,index) in template1 " :key="index">
        <a data-type="3" data-id="4002" target="_blank" style="float: left;">
          <img :src="item.item_image" width="103" />
        </a>
      </div>
    </div>
    <div class="template">
      <div style="width: 25%; float: left" v-for="(item,index) in template2 " :key="index">
        <a data-type="3" data-id="4002" target="_blank" style="float: left;">
          <img :src="item.item_image" width="103" />
        </a>
      </div>
    </div>
    <!-- 热门排行&最新上架 -->
    <div style="width: 50%; float: left">
      <a data-type="3" data-id="3807" target="_blank" style="float: left;">
        <img src="http://static.wantscart.com/product/1558595736669_500_361" alt height="150" />
      </a>
    </div>
    <div style="width: 50%; float: left">
      <a data-type="3" data-id="3302" target="_blank" style="float: left;">
        <img src="http://static.wantscart.com/product/1558595739763_500_361" alt height="150" />
      </a>
    </div>
    <img
      src="http://static.wantscart.com/product/1554970585167_1000_500"
      alt
      height="207"
      width="100%"
    />
    <img
      src="http://static.wantscart.com/product/1554970923607_1000_500"
      alt
      height="207"
      width="100%"
    />
    <img
      src="http://static.wantscart.com/product/1556162174058_1000_500"
      alt
      height="207"
      width="100%"
    />
    <div class="gundong" style="width:100%;overflow-x:auto">
      <div class="box" style="display:flex;width:1100px">
        <img
          :src="item.item_image"
          alt
          v-for="(item,index) in box1 "
          :key="index"
          height="150"
          style="flex:1"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //轮播图
      SwipeArr: [],
      //热门分类
      template1: [],
      template2: [],
      box1: []
    };
  },
  async created() {
    let result = await this.$axios(
      "https://www.easy-mock.com/mock/5d48fa0e5ea3ee58388d1d01/wants/jujia"
    );
    this.SwipeArr = result.data.blocks[0].block_items;
    this.template1 = result.data.blocks[2].block_items;
    this.template2 = result.data.blocks[3].block_items;
    this.box1 = this.template1.concat(this.template2);
  }
};
</script>
<style>
.gundong::-webkit-scrollbar {
  display: none;
}
</style>

