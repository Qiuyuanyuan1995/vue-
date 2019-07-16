<template>
  <div class>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item in weekendLists" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "weekend",
  data() {
    return {
      // weekendList: [
      //   {
      //     id: "1",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/94/23202a6a5864d8.jpg_r_640x214_92f21625.jpg",
      //     title: "合肥融创主题乐园（原合肥万达主题乐园)",
      //     desc: "主题公园"
      //   },
      //   {
      //     id: "2",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/8b/c2fd277d149df.jpg_r_640x214_81b57b6a.jpg",
      //     title: "海棠花海",
      //     desc: "海棠花海"
      //   },
      //   {
      //     id: "3",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1511/fd/0285e145e82233.jpg_r_640x214_b5f10121.jpg",
      //     title: "合肥海洋世界",
      //     desc: "合肥海洋世界"
      //   }
      // ]
    };
  },
  props:{
    weekendLists:Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()

</style>
