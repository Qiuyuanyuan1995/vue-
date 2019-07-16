import Vue from 'vue'
import Router from 'vue-router'
import DingDan from '@/components/DingDan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DingDan',
      component: DingDan
    }
  ]
})
