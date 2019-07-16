<template>
     <div>
          <div class="item" v-for="(item,index) in lists" :key="index">
                <div class="item-title border-bottom">
                     <span class="item-title-icon"></span>
                     {{item.title}}
                </div>
                <div v-if="item.children" class="item-chilren">
                    <!-- 递归组件:通过name的名字调用自己 lists要和props传过来的变量要保持一致 -->
                     <detail-list style="border:2px solid red" :lists="item.children">
                         
                     </detail-list>
                </div>
          </div>
     </div>
</template>
<script>
export default {
  // 每个组件中的name的作用 以下情况下都要保证与name属性的名字保持一致
  // 1、递归组件 2.在exclude取消组件缓存的功能 
    name:"DetailList",
    data(){
     return{

     }
    },
    props:{
        lists:Array
    }
}
</script>
<style scoped lang="stylus">
.item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-chilren
    padding: 0 .2rem
</style>
