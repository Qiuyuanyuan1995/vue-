<template>
  <div class="child">
    <h1>{{msg}}</h1>
    <h2>{{info}}</h2>
    <h3>{{changeNum}}</h3>
    <h4 v-on:click="$store.commit('newNum',9)">commit更改data初始值</h4>
    <p v-on:click="out()">$store输出</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是子组件"
    };
  },
  //   在父组件 子组件都可以调用说明在main.js文件中全局引入是有效的
  computed: {
    info() {
      // return this.$store.state.showFooter;
      //  return  this.$store.getters;
      return this.$store.getters.isShow;
    },
    changeNum() {
      return this.$store.getters.getChangeNum;
    }
  },
  methods: {
      out(){
          //在外部组件里进行全局执行actions里面方法
          this.$store.dispatch('hideYiBu')
        //   console.log(this.$store)
        //   console.log(this.$store.commit)
      },
  },

  
};

</script>
<style scoped>
/* h1 {
  background: burlywood;
  height: 150px;
} */
.child {
  background: chartreuse;
}
</style>


