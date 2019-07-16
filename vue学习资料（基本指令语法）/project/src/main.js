// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 必须要引入animate.min.css这个文件，import 后面的变量名随便取，但必须要有一个引入的css的动作
import animate from '../css/animate.min.css'
import router from './router';
// 全局使用elementUI
Vue.use(ElementUI);
// Vue.use(animated)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
