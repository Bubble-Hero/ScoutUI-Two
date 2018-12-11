import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//案例页面
import Case from '@/pages/case'
import caseCon1 from '@/components/case/caseCon1'
import caseCon2 from '@/components/case/caseCon2'
import caseDetail from '@/pages/caseDetail'
import caseAnswer from '@/pages/caseAnswer'
import caseAnswerCon1 from '@/components/caseAnswer/caseAnswerCon1'
import caseAnswerCon2 from '@/components/caseAnswer/caseAnswerCon2'
import caseAnswerCon3 from '@/components/caseAnswer/caseAnswerCon3'

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
import menunav from "../components/allContents/pc-nav/MenuNav"
import sidenav from "../components/allContents/pc-nav/SideNav"
import slidenav from "../components/allContents/pc-nav/SlideNav"
import form from "../components/allContents/pc-table/Form"
import input from "../components/allContents/pc-table/Input"
import chart from "../components/allContents/pc-table/Chart"

/**
 * 登录注册子路由
 */
import login1 from "../components/allContents/loginRegister/LoginSubCompon/loginComponCon1"
import login2 from "../components/allContents/loginRegister/LoginSubCompon/LoginComCon2"
import login3 from "../components/allContents/loginRegister/LoginSubCompon/MeSectionCon3"
import loginCom from "../components/allContents/loginRegister/LoginSubCompon/loginCompon"


import index from '@/pages/index'
import team from '@/pages/team'

import  logwebapp from '../components/log/logwebapp'
import  logpc from '../components/log/logpc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'index',
      component: index
    },
    {
      path: '/case',
      name: 'case',
      component: Case,
      children:[
        {path: '', redirect: 'caseCon1'},
        {path: 'caseCon1', name: 'caseCon1', component: caseCon1},
        {path: 'caseCon2', name: 'caseCon2', component: caseCon2},
      ]

    },
    {
      path: '/caseDetail',
      name: 'caseDetail',
      component: caseDetail,
    },
    {path: '/compo',
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
        {path: 'Login', component: Login,
          children:[
            {path: '', redirect: "login1"},
            {path: 'login1', component: login1},
            {path: 'login2', component: login2},
            {path: 'login3', component: login3}
          ]
        },
        {path: 'Register', component: Register},

        /**
         * pc端 导航组件
         */
        {path: 'menunav', component: menunav},
        {path: 'sidenav', component: sidenav},
        {path: 'slidenav', component: slidenav},
        /**
         * pc端 列表组件
         */
        {path: 'form', component: form},
        {path: 'input', component: input},
        {path: 'chart', component: chart},
      ]
    },
    {
      path: '/index',
      name:"index",
      component: index,
      children:[
        {path:'',redirect:"logwebapp"},
        {path: 'logwebapp', name: 'logwebapp', component: logwebapp},
        {path: 'logpc', name: 'logpc', component: logpc},
      ]
    },
    {
      path: '/team',
      name:"team",
      component: team
    },
    {
      path: '/caseAnswer',
      name:"caseAnswer",
      component: caseAnswer,
      children:[
        {path:'',redirect:"caseAnswerCon1"},
        {path: 'caseAnswerCon1', name: 'caseAnswerCon1', component: caseAnswerCon1},
        {path: 'caseAnswerCon2', name: 'caseAnswerCon2', component: caseAnswerCon2},
        {path: 'caseAnswerCon3', name: 'caseAnswerCon3', component: caseAnswerCon3},
      ]
    }
  ]
})
