import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import developer from '@/components/developer.vue'
import display from '@/components/display'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/developer',
      name: 'developer',
      component: developer
    },
    {
      path: '/display',
      name: 'display',
      component: display
    }
  ]
})
