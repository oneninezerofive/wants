<template>
  <div class="tuijian" style="margin-bottom:20px;background:#f0f0f0;">
    <!-- 图片列表 -->
    <div v-for="(item,index) in recommendArr" :key="index">
      <!-- 第1行-每日新品 -->
      <div class="wants-clearfix wants-12" style="display:flex;">
        <!-- 第一个 -->
        <div class="wants-clearfix" v-for="(i,j) in item.block_items" :key="j" style="flex:1">
          <div class="wants-left">
            <img @click="toDetail()" :src="i.item_image" alt width="100%" />
          </div>
        </div>
      </div>
    </div>
    <!-- 热卖风格-热门分类-->
    <div>
      <div v-for="(item2,index2) in hotGood" :key="index2">
        <!-- 第1行-每日新品 -->
        <div class="wants-clearfix wants-12" style="display:flex;">
          <!-- 第一个 -->
          <div class="wants-clearfix" v-for="(i2,j2) in item2.block_items" :key="j2" style="flex:1">
            <div class="wants-left">
              <img :src="i2.item_image" alt width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 剩下的 -->
    <div>
      <div v-for="(item2,index2) in leftArr" :key="index2">
        <!-- 第1行-每日新品 -->
        <div class="wants-clearfix wants-12" style="display:flex;">
          <!-- 第一个 -->
          <div class="wants-clearfix" v-for="(i2,j2) in item2.block_items" :key="j2" style="flex:1">
            <div class="wants-left">
              <img :src="i2.item_image" alt width="100%" />
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
      recommendArr: [],
      hotGood: [],
      leftArr: []
    };
  },
  methods:{
    toDetail(){
       this.$router.push({
          name: "detail"
       })
    }
  },
  async created() {
    let result = await this.$axios(
      "http://api.wantscart.com/app/layout/tab/12?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22gender%22%3A%221%22%2C%22os%22%3A%221%22%7D"
    );
    let data = result.data.blocks;
    // 顶部图片列表-好物推荐数据
    this.recommendArr = [...data.slice(0, 6), ...data.slice(9, 14)];
    // 热卖风格-热门分类
    this.hotGood = data.slice(15, 27);
    // 剩下的
    let newArr = [];
    for (let i = 27; i < data.length; i = i + 2) {
      newArr.push(data[i]);
    }
    this.leftArr = newArr;
  }
};
</script>




