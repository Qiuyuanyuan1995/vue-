// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//在 main.js里面引入store，然后再全局注入一下，这样一来就可以在任何一个组件里面使用this.$store了：
import store from './store/store.js';//引入store
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//使用store
  router,
  components: { App },
  template: '<App/>'
})
