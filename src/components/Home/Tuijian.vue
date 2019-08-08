<template>
  <div class="tuijian" style="margin-bottom:20px;background:#f0f0f0;">
    <!-- 图片列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有啦~" @load="onLoad">
      <div v-for="(item,index) in recommendArr" :key="index">
        <!-- 第1行-每日新品 -->
        <div class="wants-clearfix wants-12" style="display:flex;">
          <!-- 第一个 -->
          <div class="wants-clearfix" v-for="(i,j) in item.block_items" :key="j" style="flex:1">
            <div class="wants-left">
              <img @click="toDetail(item.block_location,j)" :src="i.item_image" alt width="100%" />
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
            <div
              class="wants-clearfix"
              v-for="(i2,j2) in item2.block_items"
              :key="j2"
              style="flex:1"
            >
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
            <div
              class="wants-clearfix"
              v-for="(i2,j2) in item2.block_items"
              :key="j2"
              style="flex:1"
            >
              <div class="wants-left">
                <img :src="i2.item_image" alt width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendArr: [],
      hotGood: [],
      leftArr: [],
      //列表懒加载
      loading: false,
      finished: false
    };
  },
  methods: {
    toDetail(rowid, colid) {
      this.$router.push({
        name: "detail",
        params: { rowid, colid }
      });
    },
    async onLoad() {
      let result = await this.$axios(
        "https://www.easy-mock.com/mock/5d48fa0e5ea3ee58388d1d01/wants/tuijian"
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
      this.loading = false;
      if (this.recommendArr.length > 10) {
        this.finished = true;
      }
    }
  },
  async created() {
    //首次加载
    this.onLoad();
  }
};
</script>




