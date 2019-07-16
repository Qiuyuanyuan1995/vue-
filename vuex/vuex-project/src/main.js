// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// 引入axios
import axios from 'axios'

Vue.config.productionTip = false
//全局 注册使用 ElementUI
Vue.use(ElementUI);
// 全局使用axios 挂载在vue的原型上
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
