import Vue from 'vue'
import Router from 'vue-router'
//@代表的是src目录  在bulid文件夹中的webpack.base.conf.js中的  resolve: {}配置的
// import Home from "@/pages/home/home"
// import City from "@/pages/city/City"
// import Detail from "@/pages/detail/Detail"
Vue.use(Router)

export default new Router({
  // 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/pages/home/home')
      // 异步组件加载:在打包之后的app.js会把所有页面的业务逻辑代码都放在app.js中，当你加载首页的时候
      // 就已经把所有页面的js都加载完毕。而当项目比较小的时候可能在性能上不会有太大的影响，而当项目比较大的
      // 的时候就会影响性能。所以要对组件进行按需加载（异步加载）
    },
    {
      path: '/city',
      name: 'City',
      component: ()=> import('@/pages/city/City')
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:()=> import('@/pages/detail/Detail')
    }
    
  ],
  // 路由的滚动行为：使用前端路由，当切换到新路由时，想要页面滚到顶部
  // 或者是保持原先的滚动位置，就像重新加载页面那样。
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
