import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index'
import Navs from '@/components/navs/nav'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path:'/navs',
      name:'Navs',
      component:Navs
    }
  ]
})
