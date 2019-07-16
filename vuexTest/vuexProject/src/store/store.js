import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// https://segmentfault.com/a/1190000015782272 博文地址
// 另外一个参考地址:https://segmentfault.com/a/1190000012881956
/*
 *在SPA单页面组件的开发中 Vue的vuex和React的Redux 都统称为统一状态管理，
 *个人的理解是全局状态管理更合适；简单的理解就是你在state中定义了一个数据之后，
 *你可以在所在项目中的任何一个组件里进行获取、进行修改，并且你的修改可以得到全局的响应变更。
 */
// 首先申明一个state变量，并赋值一个空对象给它，里面随意定义两个初始属性值
// 然后再在实例化的vuex.store里面传入一个空对象，并把刚声明的变量
// state扔里面
const state = { //要设置的全局访问的state对象
  // 要设置的初始属性值
  showFooter: true,
  changeableNum: 0,
  count:3
}
/*
 *理想的获取方式；vuex官方API提供了一个getters，
 *和vue计算属性computed一样，来实时监听state值的变化(最新状态)，
 *并把它也仍进Vuex.Store里面
 */
const getters = { //实时监听state值的变化(最新状态)
  isShow(state) { //方法名随意,主要是来承载变化的showFooter的值
    // console.log(state)
    return state.showFooter
  },
  getChangeNum() {
    return state.changeableNum
  },
  getCount(){
    return state.count
  }
}
/*
光有定义的state的初始值，不改变它不是我们想要的需求，
接下来要说的就是mutations了，mutattions也是一个对象，
这个对象里面可以放改变state的初始值的方法，具体的用法
就是给里面的方法传入参数state或额外的参数,然后利用vue
的双向数据驱动进行值的改变，同样的定义好之后也把这个mutations
扔进Vuex.Store里面
mutations只能是同步操作，如果想要异步操作则放在action中去操作
mutations里面的方法都是同步事务，意思就是说：比如这里的一个this. store.commit('newNum',sum)方法
两个组件里用执行得到的值，每次都是一样的，这样肯定不是理想的需求
*/
const mutations = {
  //自定义改变state初始值的方法，这里面的参数除了state之外还可以在
  // 传额外的参数(变量或对象)
  //   show(state) {
  //     state.showFooter = true;
  //   },
  hide(state) {
    state.showFooter = !state.showFooter;
  },
  newNum(state, sum) {
    // console.log(state)
    // console.log(sum)
    state.changeableNum = state.changeableNum + sum;
    // state.changeableNum += sum;
  },
  increment(state){
    state.count++
    // console.log(state.count)
  }
}
/*
 *Actionsyes个对象变量，最大的作用就是里面的Action方法
 *可以包含任意异步操作，这里的方法是用异步触发mutations里面
 *的方法，actions里面自定义的函数接收一个context参数和要变化
 *的形参，context与store实例具有相同的方法和属性，所以它可以
 *执行context.commit(),然后把它扔进Vuex.Store
 */ 
 const actions = {
   hideYiBu(context){//自定义触发mutations里函数的方法，context与store实例具有相同方法和属性
      context.commit('hide')
   },
   getNewNum(context,num){
      context.commit('newNum',num)
   }
 }


// 实例化Vuex
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
// console.log(store)
