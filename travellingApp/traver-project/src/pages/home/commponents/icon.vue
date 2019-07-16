<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-imgContent"
              :src="item.imgUrl"
              alt
            >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      
    </swiper>
  </div>
</template>
<script>
export default {
  name: "icon",
  data() {
    return {
      swiperOption: {
        //循环
        loop: true,
        //自动循环播放
        autoplay: false,
        pagination: ".swiper-pagination"
      },
      //  iconList:[
      //      {
      //          id:"1",
      //          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
      //          desc:"景点门票"
      //      },
      //      {
      //          id:"2",
      //          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
      //          desc:"游乐场"
      //      },
      //      {
      //          id:"3",
      //          imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
      //          desc:"合肥必游"
      //      },
      //      {
      //          id:"4",
      //          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
      //          desc:"亲子游"
      //      },
      //      {
      //          id:"5",
      //          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
      //          desc:"踏青赏花"
      //      },
      //      {
      //          id:"6",
      //          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/51916fbd2017181f28110473eafcf5c7.png",
      //          desc:"洛阳牡丹会"
      //      },
      //      {
      //          id:"7",
      //          imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
      //          desc:"西递宏村"
      //      },
      //      {
      //          id:"8",
      //          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/51916fbd2017181f28110473eafcf5c7.png",
      //          desc:"洛阳牡丹会"
      //      },
      //      {
      //          id:"9",
      //          imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/51916fbd2017181f28110473eafcf5c7.png",
      //          desc:"武大樱花节"
      //      },
      //   ]
      }
  },
  props:{
    iconLists : Array
  },
  computed:{
      pages(){
          const pages = []
          this.iconLists.forEach((item,index)=>{
              // console.log(item)
            //page页码
                const page = Math.floor(index/8)
                if(!pages[page]){
                    // 如果pages数组中没有page,则将pages[page]为一个空数组
                    pages[page] = []
                }
                pages[page].push(item)
          })
          return pages
      }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons >>> .swiper-container 
  height: 0
  padding-bottom: 50%
  .icons
      margin-top:.1rem
    .icon 
      position: relative
      overflow: hidden
      width: 25%
      height: 0
      float: left
      padding-bottom: 25%
      .icon-img 
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0.44rem
        padding: 0.1rem
      .icon-imgContent 
        height: 100%
        display: block
        margin: 0 auto
      .icon-desc 
        position: absolute
        bottom: 0
        left: 0
        right: 0
        line-height: 0.44rem
        height: 0.44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>
