// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 引入fastclick 插件 解决在移动端click有300ms的延迟问题
import fastClick from 'fastclick'
import store from './store'
// 为了解决项目在不同手机上出现白屏的问题,这是由于部分手机浏览器不支持promise，无法解析es6新特性
import 'babel-polyfill'
// 使用轮播插件 vue-awesome-swiper 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/rest.css'
// 移动端 1像素边框问题   引入border.css文件
import './assets/styles/border.css'

// 把fastClick绑定到document.body上
fastClick.attach(document.body)
// 使用iconfont 
import './assets/styles/iconfont.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
