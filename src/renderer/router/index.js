import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/index',
      name: 'index',
      component: require('@/components/index').default,
      children: [
        {
          path: '/index/',
          name: 'home',
          component: require('@/components/home').default
        },
        {
          path: '/index/page1',
          name: 'page1',
          component: require('@/components/page1').default
        },
        {
          path: '/index/page2',
          name: 'page2',
          component: require('@/components/page2').default
        }
      ]
    }
    // {
    //   path: '*',
    //   redirect: '/index'
    // }
  ]
})
