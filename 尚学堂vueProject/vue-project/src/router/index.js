import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout'
import Detail from '@/pages/Detail'
import Car from    '@/pages/details/Car'
import Earth from  '@/pages/details/Earth'
import Hill from   '@/pages/details/Hill'
import Loud from   '@/pages/details/Loud'

Vue.use(Router)

export default new Router({
  mode: 'history',  // 去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail,
      // 重定向
      redirect:'/detail/earth',
      // 子路由
      children:[
        {
          name:'car',
          path:'car',
          component:Car
        },
        {
          name:'earth',
          path:'earth',
          component:Earth
        },
        {
          name:'hill',
          path:'hill',
          component:Hill
        },
        {
          name:'loud',
          path:'loud',
          component:Loud
        }
      ]
    }
    
  ]
})
