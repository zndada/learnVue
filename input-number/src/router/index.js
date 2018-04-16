import Vue from 'vue'
import Router from 'vue-router'
// import inputNumber from '@/components/inputNumber'
import tabPane from '@/components/tabPane'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: tabPane
    }
  ]
})
