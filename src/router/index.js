import Vue from 'vue'
import Router from 'vue-router'

// 注册路由插件    如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)

// base:"/"路由的前缀
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/excel',
      name: 'excel',
      component: () => import('@/components/Excel')
    },
    {
      path: '/excel2',
      name: 'excel2',
      component: () => import('@/components/Excel2')
    },
    {
      path: '/lesMiserables',
      name: 'lesMiserables',
      component: () => import('@/echarts/lesMiserables')
    }
  ]
})
