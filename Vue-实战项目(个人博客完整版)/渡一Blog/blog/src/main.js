// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
// Vue 自定义指令
// 自定义改变颜色
//  Vue.directive('rainbow',{
//    bind(el,binding,vnode){
//     //  el：元素标签
//     // binding:绑定
//     // vnode:虚拟节点
//     el.style.color = '#'+ Math.random().toString(16).slice(2,8);
//    }
//  })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth='1260px';
    }else if(binding.value == 'narrow'){
       el.style.maxWidth = "560px";
    }
    // 如果v-theme的参数等于column就执行函数体内的代码
    if(binding.arg == 'column'){
       el.style.background="pink";
       el.style.padding='20px'
    }
  }
})
// 自定义全局过滤器
// 形参value指的是ShowBlog.vue页面中的blog.title
// Vue.filter("to-uppercase",function(value){
//     return value.toUpperCase();
// })
// 自定义过滤器 snipet，作用：让blog.body不要完全展示，只展示一点，当我
// 点击详情页面才完全显示出来
Vue.filter("snipet",function(value){
  // console.log(value)
    return value.slice(0,100)+'...'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
