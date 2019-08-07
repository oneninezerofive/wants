<template>
  <keep-alive>
    <div class="list">
      <!-- 搜索 -->
      <div class="search_header" style="left: 0px;">
        <div class="public-auto clear">
          <div id="go_back" class="go_back" @click="goBack">
            <img src="http://w.wantscart.com/static/images/7.jpg" width="30" alt />
          </div>
          <div class="search_header_logo">
            <img src="http://w.wantscart.com/static/images/6.jpg" width="30" alt />
          </div>
          <div class="search_header_txt">
            <input type="search" id="search_header_txt" placeholder="请输入搜索内容" v-model="con" @keyup.enter="startSearch" />
          </div>
        </div>
      </div>
      <!-- 列表框 -->
      <div>
        <p v-show="isShow" class="none">没有找到记录！换个关键词试试</p>
        <ul class="search_content_goods clear">
          <!-- 单个商品 -->
          <li v-for="(item,index) in listArr" :key="index">
            <a data-type="1" :data-id="index">
              <p><img :src="item.img"></p>
              <p v-text="item.title"></p>
              <p>
                <span>￥{{item.price/100}}</span>
                <span>￥{{item.bigPrice/100}}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </keep-alive>
</template>
<script>
export default {
  data() {
    return {
      // 搜索框
      con: "",
      listArr: [],
      isShow: false
    };
  },
  methods: {
    //点击返回箭头回到首页
    goBack() {
      this.$router.go(-2);
    },
    // 回车键搜索
    async startSearch() {
      //   请求数据
      let keyword = this.con;
      if (keyword.trim()) {
        let result = await this.$axios(
          "https://www.easy-mock.com/mock/5d48fa0e5ea3ee58388d1d01/wants/goodlist"
        );
        //   提取数据
        let data = result.data;
        //   console.log(data[0]);

        let oldArr = [];
        //   var arr3 = arr2.map(function(item) {
        //     return (item * 1.2).toFixed(2);
        //   });
        // 循环
        for (let i = 0; i < data.length; i++) {
          let str = data[i].keywords;
          if (str.indexOf(keyword) != -1) {
            let listObj = {};
            // 图片
            listObj.img = data[i].small_img;
            //标题
            listObj.title = data[i].title;
            //特价
            listObj.price = data[i].price;
            //   标签价
            listObj.bigPrice = data[i].tag_price;
            // 推到数组里面
            if (listObj) {
              oldArr.push(listObj);
            }
          }
        }

        this.listArr = oldArr;
        if (this.listArr.length == 0) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      }
    }
  },
  activated() {
    //渲染
    this.con = this.$store.state.keyword;
    this.startSearch();
  }
};
</script>

<style scoped>
/*头部*/
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
/*列表框*/
.search_content_goods {
  padding-bottom: 60px;
}
.search_content_goods li {
  float: left;
  width: 50%;
}
.search_content_goods li a {
  width: 100%;
}
a {
  text-decoration: none;
  color: #000;
  display: inline-block;
}
.search_content_goods li a p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px 0;
  color: #666;
  font-size: 12px;
  padding: 0 2px;
  box-sizing: border-box;
}
img {
  width: 100%;
  display: block;
}
.search_content_goods li a p span:first-of-type {
  color: #ff405b;
  font-size: 20px;
  margin-right: 5px;
}
.search_content_goods li a p span:last-of-type {
  color: #a8abaf;
  text-decoration: line-through;
}
.none {
  margin: 200px auto;
  text-align: center;
}
</style>


