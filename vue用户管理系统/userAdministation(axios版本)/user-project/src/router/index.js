import Vue from 'vue'
import Router from 'vue-router'
import Customer from '@/components/Customer'
import About from '@/components/About'
import Add from '@/components/Add'
import CustomerDetail from '@/components/CustomerDetail'
import Edit from '@/components/edit'
Vue.use(Router)

export default new Router({
  mode:"history",
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'Customer',
      component: Customer
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/add',
      name:'Add',
      component:Add
    },
    {
      path:'/customer/:id',
      name:'CustomerDetail',
      component:CustomerDetail
      
    },
    {
      path:'/edit/:id',
      name:'Edit',
      component:Edit
    }
  ]
})
