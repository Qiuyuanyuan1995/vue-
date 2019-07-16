<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              {{this.currentCity}}
              </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
           v-for="item in hotCities" 
           :key="item.id"
         @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- cities是对象{A:[1,2]} key:代表前面的A，然后对数组进行二次循环 -->
       <div class="area"
            v-for="(list,key) in cities" 
            :key="key"
            :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div  class="item-list"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
          >
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
// 引用better-scroll插件:是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
  name: "CityList",
  computed:{
    ...mapState({currentCity:'city'})
  },
  props:{
    cities:Object,
    hotCities:Array,
    letter:String
  },
  methods:{
    ...mapMutations(['gaiBianCity']),  
    handleCityClick (city) {
      // this.$store.dispatch('changeCity',city)
      // this.$store.commit('gaiBianCity',city)
      this.gaiBianCity(city)
      this.$router.push('/')
    },
  },
  watch:{
     letter(){
        //  console.log(this.letter)
        //调用better-scroll插件scroll.srollToElement(接受的参数必须是dom节点)接口，可实现点击哪一个字母就
        // 出现相应的内容
        if(this.letter){
          const element = this.$refs[this.letter][0]
           this.scroll.scrollToElement(element)
           console.log(element)
        }
     }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>
<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
