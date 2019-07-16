// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)
// 自定义全局 过滤器
Vue.filter("to-uppercase",function(value){
  // value 形参代表的是 showBlog.vue页面的blog.title
  // toUpperCase 小写转为大写
   return value.toUpperCase();
})
Vue.filter("snippet",function(value){
  return value.slice(0,100) + "..."
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
