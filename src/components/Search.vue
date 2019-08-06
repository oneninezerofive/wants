<template>
  <div>
    <!-- 1.头部搜索框 -->
    <div class="search_header" style="left: 0px;">
      <div class="public-auto clear">
        <div id="go_back" class="go_back" @click="goBack('home')">
          <img src="http://w.wantscart.com/static/images/7.jpg" width="30" alt />
        </div>
        <div class="search_header_logo">
          <img src="http://w.wantscart.com/static/images/6.jpg" width="30" alt />
        </div>
        <div class="search_header_txt">
          <input type="search" id="search_header_txt" placeholder="请输入搜索内容" />
        </div>
      </div>
    </div>
    <!-- 2.热门搜索 -->
    <div class="search_content_titlt">
      <p class="public-auto">热门搜索</p>
    </div>
    <!-- 3.搜索类型 -->
    <div class="search_content_subtitle public-auto" id="goodsList">
      <p v-for="(item,index) in searchArr" :key="index">
        <span v-text="item"></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchArr: []
    };
  },
  methods: {
    //点击返回箭头回到首页
    goBack(name) {
      this.$router.push({
        name
      });
    }
  },
  async created() {
    let searchArr = await this.$axios(
      "http://api.wantscart.com/config?key=search_hotwords"
    );
    this.searchArr = searchArr.data[0];
  }
};
</script>

<style scoped>
.public-auto {
  margin: 0 3.3333%;
}
.public-auto div {
  float: left;
}
.go_back {
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.search_header_logo {
  width: 30px;
  height: 30px;
  margin-top: 12px;
  margin-left: 12%;
}
.search_header_txt {
  width: 55vw;
}
.search_header_txt input {
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  font-size: 20px;
  margin-top: 5px;
  outline-style: none;
}
.clear:after {
  clear: both;
  content: "";
  display: block;
}
/* 2.热门搜索 */
.search_content_titlt {
  max-width: 750px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #555;
  background: #fbfbfb;
}
/* 3.搜索分类 */
.search_content_subtitle p {
  float: left;
  line-height: 15px;
  border: 1px solid #000;
  background: #fff465;
  color: #999;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 15px;
  margin: 12px 20px 0 0;
}
</style>
