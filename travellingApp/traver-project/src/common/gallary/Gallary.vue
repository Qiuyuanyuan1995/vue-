<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
       </swiper> 
      
    </div>
  </div>
</template>
<script>
export default {
  name: "gallary",
  data() {
    return {
        swiperOption: {
       //循环
        loop: true,
        //自动循环播放
        autoplay: true,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        observeParents:true,//将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observer:true  //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
    },
    };
  },
  props:{
      imgs:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      handleGallaryClick(){
          this.$emit('close') 
      }
  }
};
</script>
<style scoped lang="stylus">
.container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background:lightgray
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      color:#fff
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        font-size:20px
        
</style>
