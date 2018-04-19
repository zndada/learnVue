import Vue from 'vue'
import Router from 'vue-router'
import inputNumber from '@/components/inputNumber'
import tabPane from '@/components/tabPane'
import clickOutSide from '@/components/clickOutSide'
import time from '@/components/time'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: inputNumber
    },
    {
      path: '/tabPane',
      name: 'index',
      component: tabPane
    },
    {
      path: '/clickOutSide',
      name: 'index',
      component: clickOutSide
    },
    {
      path: '/time',
      name: 'index',
      component: time
    }
  ]
})
