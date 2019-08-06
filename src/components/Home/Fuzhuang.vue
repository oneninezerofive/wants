<!-- ============================服装===========================================-->
<template>
  <div>
    <!-- 1.轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in fuzhuangArr1" :key="index">
        <img :src="item.item_image" width="100%" height="188" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 2.专区分类 -->
    <van-image
      width="375"
      height="40"
      src="http://static.wantscart.com/product/1547792199031_1500_160"
    />
    <div class="template_21">
      <div style="width: 25%; float: left" v-for="(item,index) in classifyArr1" :key="index">
        <a data-type="4" data-id="3778" target="_blank" style="float: left;">
          <img :src="item.item_image" alt height="117" />
        </a>
      </div>
    </div>
    <div class="template_21">
      <div style="width: 25%; float: left" v-for="(item,index) in classifyArr2" :key="index">
        <a data-type="4" data-id="3778" target="_blank" style="float: left;">
          <img :src="item.item_image" alt height="117" />
        </a>
      </div>
    </div>
    <!-- 3.其他 -->
    <van-image width="375" height="188" :key="index" v-for="(item,index) in othersArr" :src="item" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      fuzhuangArr1: [], //1.轮播图
      classifyArr1: [], //2.专区分类
      classifyArr2: [], //3.其他
      othersArr: [
        "http://static.wantscart.com/product/1557214929123_2000_1000",
        "http://static.wantscart.com/product/1557215039245_2000_1000",
        "http://static.wantscart.com/product/1557215299112_2000_1000",
        "http://static.wantscart.com/product/1557222555174_1406_700"
      ]
    };
  },
  methods: {},
  async created() {
    let fuzhaungUrl = await this.$axios(
      "https://www.easy-mock.com/mock/5d48fa0e5ea3ee58388d1d01/wants/fuzhuang"
    );
    let fuzhuangData = fuzhaungUrl.data.blocks;
    // 1.轮播图
    this.fuzhuangArr1 = fuzhuangData[0].block_items;
    // 2.专区分类
    this.classifyArr1 = fuzhuangData[2].block_items;
    this.classifyArr2 = fuzhuangData[3].block_items;
  }
};
</script>

