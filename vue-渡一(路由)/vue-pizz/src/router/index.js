import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import About from '../components/about/About.vue'
import Admin from '../components/Admin.vue'
import Login from '../components/Login.vue'
import Regist from '../components/Regist.vue'
//关于我们 二级路由
import Contact from '../components/about/contact.vue'
import Delivery from '../components/about/delivery.vue'
import Historys from '../components/about/history.vue'
import Ordering from '../components/about/ordering.vue'
//联系我们 三级路由
import Phone from '../components/about/contact/Phone.vue'
import personContact from '../components/about/contact/personContact.vue'




Vue.use(Router)
const router = new Router({
  // 作用是路径里没有#
  mode: 'history',
  // 路由的滚动行为函数
  scrollBehavior(to, from, savedPosition) {
    // 坐标
    //  return{x:0,y:100}
    // selector选择器  选择类名为btn的元素即按钮
    // return {
    //   selector: '.btn'
    // }
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    if(savedPosition){
      alert(savedPosition)
       return savedPosition
    }else{
      return{x:0,y:0}
    }
  },
  routes: [{
      path: '/',
      name: 'Home',
      // component:Home 展示单一的组件
      // component: Home
      // components 展示多个组件(router-view 组件复用)
      components: {
        // 默认展示Home组件
        default: Home,
        // 对应的是App.vue页面中name=ordering,delivery,histoty的router-view
        'ordering': Ordering,
        'delivery': Delivery,
        'history': Historys
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      // 二级菜单默认展示的内容
      redirect: '/about/contact',
      // 设置二级路由
      children: [{
          path: '/about/history',
          name: 'historyLink',
          component: Historys
        },
        {
          path: '/about/contact',
          name: 'contactLink',
          component: Contact,
          redirect: '/about/contact/phone',
          // 三级路由
          children: [{
              path: '/about/contact/phone',
              name: 'Phone',
              component: Phone
            },
            {
              path: '/about/contact/personContact',
              name: 'personContact',
              component: personContact
            }
          ]
        },
        {
          path: '/about/ordering',
          name: 'orderingLink',
          component: Ordering
        },
        {
          path: '/about/delivery',
          name: 'deliveryLink',
          component: Delivery
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // 路由独享守卫
      //  beforeEnter:(to,from,next)=>{
      // alert("非登录状态，不能访问此页面！！！")
      // next()
      // if(to.path=='/login' || to.path=='/regist'){
      //   next()
      // }else{
      //   alert('您还没有登陆，请先登陆')
      //   next('/login')
      // }
      // }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    // 如果用户在地址栏里输入一个错误的路由地址，我们自己可以将用户引导到我们指定的界面中来。
    // *是代笔所有的路径都不匹配，我们进行重定向到主页周报过去
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router
// 路由的全局守卫  进入组件之前
// router.beforeEach((to,from,next)=>{
// to:进入到哪个路由去
// from:从哪个路由离开
// next:一个函数
// alert('还没有登陆，请先登陆');
// 调用next() 函数可以看到页面，页面可以正常的展示
// next();
// 判断是否是登陆状态，如果没登陆，则跳转到登陆界面
//判断store.gettes.isLogin === false 
//   console.log(to)
//   if(to.path=='/login' || to.path=='/regist'){
//     next()
//   }else{
//     alert('您还没有登陆，请先登陆')
//     next('/login')
//   }

// })
// 后置钩子  进入组件之后
// router.afterEach((to,from)=>{
//   alert("after each");

// })
// 路由独享守卫
