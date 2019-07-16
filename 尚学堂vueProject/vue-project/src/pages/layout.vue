<template>
  <div class="index-wrap">
    <!-- 左边 -->
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product,index) in productList" :key="product.id">
          <h3>{{product.category}}</h3>
          <ul>
            <li v-for="item in product.list" :key="item.id">
              <a :href="item.url">
                <span>{{item.titile}}</span>
                <span v-if="item.hot" class="hot-tag">Hot</span>
              </a>
            </li>
          </ul>
          <!-- 利用index索引值巧妙的将第二条数据的下划线隐藏 -->
          <div v-if="index%2 !==1" class="hr"></div>
        </div>
      </div>
      <div class="index-left-bloack lastest-news">
        <h2>最新消息</h2>
        <ul>
          <!-- <li v-for="item in news">
            <a href>{{item.authour_name}}</a>
          </li>-->
        </ul>
      </div>
    </div>
    <!-- 右边 -->
    <div class="index-right">
      <div class="swipper-size">
        <!-- 使用swipper插件,来做出轮播图的效果 -->
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
            <img class="swipperImg" src="../assets/slideShow/j1.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="swipperImg" src="../assets/slideShow/j2.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="swipperImg" src="../assets/slideShow/j3.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="swipperImg" src="../assets/slideShow/j4.jpg">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(list,index) in boradList"
          :key="list.id"
          :class="['index-board-'+list.tag,{'line-last':index %2 !==0}]"
        >
          <div class="index-board-item-inner">
            <h2>{{list.titile}}</h2>
            <p>{{list.desc}}</p>
            <div class="index-board-button">
              <!-- <a href="javascript:;" class="button">立即购买</a> -->
              <router-link :to="{path:'/detail/'+list.tag}"  class="button">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-carousel :interval="1000" type="card" height="200px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
         <img :src="item.url">
      </el-carousel-item>
    </el-carousel>-->
  </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return {
      swiperOption: {
        loop: true, //循环
        autoplay: true, //自动播放
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".swiper-pagination"
        },
        // 左右按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      boradList: [
        {
          titile: "开放产品",
          desc: "开放产品是一款开放产品",
          tag: "earth"
        },
        {
          titile: "品牌营销",
          desc: "品牌营销帮助你的产品更好地找到定位",
          tag: "loud"
        },
        {
          titile: "使命必达",
          desc: "使命必达快速迭代永远保持最前端的速度",
          tag: "car"
        },
        {
          titile: "勇攀高峰",
          desc: "帮你勇闯高峰，到达事业的顶峰",
          tag: "hill"
        }
      ],
      news: [],
      productList: [
        {
          category: "手机应用类",
          list: [
            {
              titile: "91助手",
              url: "http://www.wwtliu.com/blog",
              hot: false
            },
            {
              titile: "豌豆荚",
              url: "http://www.wwtliu.com/blog",
              hot: true
            },
            {
              titile: "金山毒霸",
              url: "http://www.wwtliu.com/blog",
              hot: false
            }
          ]
        },
        {
          category: "开发工具",
          list: [
            {
              titile: "webStorm",
              url: "http://www.wwtliu.com/blog",
              hot: false
            },
            {
              titile: "Hbuilder",
              url: "http://www.wwtliu.com/blog",
              hot: true
            },
            {
              titile: "sublime Text",
              url: "http://www.wwtliu.com/blog",
              hot: true
            },
            {
              titile: "Atom",
              url: "http://www.wwtliu.com/blog",
              hot: false
            }
          ]
        }
      ]

      // imgList:[
      //    {url :require("../assets/logo.png"),
      //    },
      //    {
      //        url:require("../assets/1.jpg")
      //    },
      //    {
      //        url:require("../assets/2.jpg")
      //    }
      // ]
    };
  },
  created() {
    this.$axios
      .get("http://www.wwtliu.com/sxtstu/news/juhenews.php", {
        params: {
          count: 10,
          type: "top"
        }
      })
      .then(res => {
        // console.log(res.data)
        this.news = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.swipper-size {
  margin-top: 15px;
}
.swipperImg {
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* layout的样式 */
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  height: 350px;
}
.index-left-block .hr {
  margin-bottom: 20px;
  height: 1px;
  width: 100%;
  background: #ddd;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
  margin-top: 15px;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner {
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-hill .index-board-item-inner {
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 350px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swiperimg {
  width: 100%;
}

.swiper-size {
  margin-top: 15px;
}

.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
