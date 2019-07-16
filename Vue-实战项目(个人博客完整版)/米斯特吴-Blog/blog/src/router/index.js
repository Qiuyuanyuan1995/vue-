import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import showBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'
Vue.use(Router)

export default new Router({
  mode: 'history',  // 去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'showBlog',
      component: showBlog
    },
    {
      path: '/add-blog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path:"/blog/:id",
      name:'SingleBlog',
      component:SingleBlog
    },
    {
      path:"/edit/:id",
      name:'EditBlog',
      component:EditBlog
    }
    
  ]
})
