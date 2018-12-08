import Vue from 'vue'
import Router from 'vue-router'

/**
 * 组件页面路由（及其子路由）配置
 */
import compo from "../pages/compo"
import header from "../components/allContents/basic/Head"
import footer from "../components/allContents/basic/Footer"
import goodlistmenu from "../components/allContents/menu/GoodListMenu"
import slideupmenu from "../components/allContents/menu/SlideUpMenu"
import swiperMenu from "../components/allContents/menu/SwiperMenu"
import classifyMenu from "../components/allContents/menu/ClassifyMenu"
import navMenu from "../components/allContents/menu/NavMenu"
import Login from "../components/allContents/loginRegister/Login"
import Register from "../components/allContents/loginRegister/Register"
import index from '@/pages/index'
import team from '@/pages/team'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/compo',
      component: compo,
      children:[
        {path: '', redirect: 'header'},
        /**
         * 基本组件子路由
         */
        {path: 'header', component: header},
        {path: 'footer', component: footer},
        /**
         * 商品列表组件子路由
         */
        {path: 'goodlistmenu', component: goodlistmenu},
        {path: 'slideupmenu', component: slideupmenu},
        {path: 'swiperMenu', component: swiperMenu},
        {path: 'classifyMenu', component: classifyMenu},
        {path: 'navMenu', component: navMenu},
        /**
         * 登陆注册组件子路由
         */
        {path: 'Login', component: Login},
        {path: 'Register', component: Register},
      ]
    },
    {
      path: '/',
      redirect:"index",
      component: index
    },
    {
      path: '/index',
      name:"index",
      component: index
    },
    {
      path: '/team',
      name:"team",
      component: team
    }
  ]
})
