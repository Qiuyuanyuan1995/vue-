<template>
    <div>
        <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailBanner>
        <DetailHeader></DetailHeader>
        <div class="content">
            <DetailList :lists="list"></DetailList>
        </div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:"Detail",
    data(){
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    methods:{
        getDetailInfo(){
              this.$axios.get('/api/detail.json?id=' + this.$route.params.id)
               .then((res)=>{
              console.log(res)
               res = res.data;
               if(res.ret && res.data){
                    const data = res.data 
                     this.sightName = data.sightName
                     this.bannerImg = data.bannerImg
                     this.gallaryImgs = data.gallaryImgs
                     this.list = data.categoryList
               }
            })
        }
       
    },
    mounted(){
          this.getDetailInfo()
    }
}
</script>
<style lang="stylus" scoped>
.content{
    height:50rem
}
</style>
