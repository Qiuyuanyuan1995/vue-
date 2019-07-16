import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/components/article/article'
import Miehuoqi from '@/components/huo/miehuoqi'
import Comeplete from '@/components/flexbox/complete'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/article',
      name:'Article',
      component:Article
    },
    {
      path:'/miehuoqi',
      name:'Miehuoqi',
      component:Miehuoqi
    },
    {
      path:'/complete',
      name:'Comeplete',
      component:Comeplete
    }
  ]
})
