import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Case from '@/pages/case'

import caseCon1 from '@/components/case/caseCon1'
import caseCon2 from '@/components/case/caseCon2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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

  ]
})
