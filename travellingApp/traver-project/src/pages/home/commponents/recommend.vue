<template>
  <div class>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
      :to="'/detail/'+ item.id " 
        tag="li" 
        class="item border-bottom"
        v-for="item in recommendLists"
        :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "recommend",
  // data() {
  //   return {
  //       recommandList:[
  //           {
  //               id:"1",
  //               imgUrl:"http://img1.qunarzz.com/sight/p0/1609/a9/a90f734bbc7b80aea3.water.jpg_200x200_fac101cb.jpg",
  //               title:"合肥融创主题乐园（原合肥万达主题乐园)",
  //               desc:"主题公园"
  //           },
  //           {
  //               id:"2",
  //               imgUrl:"http://img1.qunarzz.com/sight/p0/1803/b0/b089a054d36a4559a3.img.jpg_200x200_226030c5.jpg",
  //               title:"海棠花海",
  //               desc:"海棠花海"
  //           },
  //           {
  //               id:"3",
  //               imgUrl:"http://img1.qunarzz.com/sight/p0/1803/1a/1a5c2c64c3c585efa3.img.jpg_200x200_c1ab806a.jpg",
  //               title:"合肥海洋世界",
  //               desc:"合肥海洋世界"
  //           }
  //       ]
  //   };
  // },
  props: {
    recommendLists: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indet: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item-desc {
  line-height: 0.4rem;
  color: #888;
  ellipsis();
}

.item-button {
  line-height: 0.44rem;
  margin-top: 0.16rem;
  background: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>
