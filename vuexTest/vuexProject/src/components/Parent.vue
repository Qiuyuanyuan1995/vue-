<template>
  <div class="parent">
    <div class="parentContent" style="border:1px solid red;">
      {{ msg }}
      <h6>
        {{info}}
      </h6>
      <h6>
        {{changeNum}}
      </h6>
      <!--若想要改变store中的state的状态，必须通过mutations,而mutations里的方法必须通过commit方法触发-->
      <h2 v-on:click="$store.commit('increment')" style="border:2px solid black;margin-top:200px;">点击更改store.js state的count属性</h2>
      <p style="background:red; color:white;border:1px solid purple">{{getCounts}}</p>
    </div>

    <child></child>
  </div>
</template>

<script>
import child from "./Child";
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      msg: "我是父组件"
    };
  },
  components: {
    child: child
  },
  // 状态管理器store中的数据调用要放在computed函数的原因
  // data 中内容依赖变更时，data 属性不会变更（它的设计目标就是保存组件的局部状态数据而已）。
  // 而 computed 则是通过【依赖追踪】实现的，在 computed 求值时引用的 Vue 变量变化时，会触发对 computed 的重新计算。
  //所以你可以使用 computed 去引用 Vuex 状态变量，从而使得依赖追踪生效。
  // 或者，将 Vuex 状态变量通过 mapStateToComputed 映射为 computed 也是一个很方便的选择。
  //由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。
  computed: {
    info() {
      // return this.$store.state.showFooter;
      //  return  this.$store.getters;
      return  this.$store.getters.isShow
    },
    changeNum(){
      return this.$store.getters.getChangeNum
      console.log(this.$store.getters.getChangeNum)
    },
    getCounts(){
      // 两种方式都可以得到返回值
      // return this.$store.getters.getCount;
      return this.$store.state.count
    }
  },
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parentContent{
  background:lightslategray;
  color:white;
}
h1,
h2 {
  font-weight: normal;
  height: 200px;
  background: pink;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
