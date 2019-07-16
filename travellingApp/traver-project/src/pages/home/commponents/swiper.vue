<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div style="border:2px solid red" class="swiper-pagination" slot="pagination">111</div>
    </swiper>
  </div>
</template>
<script>
export default {
  // name的名字不能为swiper，因为swiper是插件vue-AweSome-Swiper中的关键字
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        //循环
        loop: true,
        //自动循环播放
        autoplay: true,
        pagination: ".swiper-pagination",
        paginationType : 'bullets'
      },
      // swiperList: [
        // {
        //   id: "1",
        //   imgUrl:
        //     "http://img2.imgtn.bdimg.com/it/u=3487676664,3606552858&fm=26&gp=0.jpg"
        // },
        // {
        //   id: "2",
        //   imgUrl:
        //     "http://img4.imgtn.bdimg.com/it/u=153831961,3655655139&fm=26&gp=0.jpg"
        // },
        // {
        //     id:"3",
        //     imgUrl:"http://img0.imgtn.bdimg.com/it/u=1110018691,770767031&fm=26&gp=0.jpg"
        // }
      // ]
    };
  },
  props:{
     list:Array
  },
  computed:{
    showSwiper(){
      return this.list.length
    }
  }
};
</script>
<style scoped lang='stylus'>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  width: 100%;
  background: #eee;
}

.swiper-img {
  width: 100%;
  height: 184px;
}
</style>
