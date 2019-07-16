import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // order表示订单信息
    order: {
      "counter": 1,
      "downmenu": 1,
      "radios": 1
    },
    totalPrice: 0
  },
  mutations: {
    updateOrder(state, data) { //data = {key：value}形式
      // state.order[data[0]]代表的是对象order中的"counter","downmenu","radios"
      // data[1] 则代表counter、downmenu、radios的值
      state.order[data[0]] = data[1]
      // console.log(data)
      // console.log(state.order)
    },
    updatePrice(state,price){
        state.totalPrice = price
    }
  },
  actions: {
    updateOrder(context, data) {
      context.commit("updateOrder", data)
    },
    updatePrice(context,price){
       context.commit("updatePrice",price)
    }
  },
  getters: {
    getOrder(state) {
      return state.order ? state.order : {}
    },
    getTotalPrice(state){
     
      return state.totalPrice > 0 ? '￥'+ state.totalPrice : 0
    }
  }
})
