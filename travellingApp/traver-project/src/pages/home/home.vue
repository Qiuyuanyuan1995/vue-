<template>
<div class="home">
 <home-header></home-header>
 <home-swiper :list="swiperList"></home-swiper>
 <home-icon    :iconLists="iconList"></home-icon>
 <home-recommend :recommendLists="recommendList"></home-recommend>
 <home-weekend :weekendLists="weekendList"></home-weekend>
</div>
</template>
<script>
import HomeHeader from './commponents/header'
import HomeSwiper from './commponents/swiper'
import HomeIcon from './commponents/icon'
import HomeRecommend from './commponents/recommend'
import HomeWeekend from './commponents/weekend'
import {mapState} from 'vuex'
export default {
    name:"home",
    computed:{
       ...mapState(['city'])
    },
    data(){
       return{
      lastCity:'',
        //由于home组件由5个小组件组成，那么每个小组件都要获取数据，那么
        //每个小组件都要发送请求的话，会造成网页的性能不是很好，所以在父组件home组件发送请求
       //city:"合肥",
       swiperList:[],
       iconList:[],
       recommendList:[],
       weekendList:[]

       }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeekend
    },
    methods:{
       getHomeInfo(){
        //  this.city指的是   ...mapState(['city'])
           this.$axios.get('/api/index.json?city=' + this.city)
           .then((res)=>{
                 console.log(res)
                 res = res.data
                //  console.log(res)
                 if(res.ret && res.data){
                    
                     this.swiperList = res.data.swiperList
                     this.iconList = res.data.iconList
                     this.recommendList = res.data.recommendList
                     this.weekendList = res.data.weekendList
                    //  console.log(res.data.iconList)

                 }
           })
           .catch((err)=>{
                console.log('请求失败...')
           })
       },
    //    getHomeCity(){
    //         this.$axios.get('/api/city.json')
    //         .then((res)=>{
    //             //   console.log(res)
    //            var resCity = res.data.data
    //            var cityData = resCity.cities.A
    //         //    console.log(this.city)
    //               cityData.forEach((item)=>{
    //                    this.city.push(item.name)
    //               })


    //         })
    //    }

    },
    mounted(){
         this.getHomeInfo()
        //  this.getHomeCity()
        // console.log('mounted')
        this.lastCity = this.city
    },
    // 在使用keep-alive标签中有效，每次进入都会执行钩子中的函数
    activated(){
    //   console.log('activated')
    if(this.lastCity != this.city){
        this.lastCity = this.city
         this.getHomeInfo()
    }
    }
}
</script>
<style scoped>

</style>
