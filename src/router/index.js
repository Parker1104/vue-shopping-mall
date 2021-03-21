import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载，只有在用户点击相应的路由才会去下载相应的js，并且在webpack打包时会根据不同的router路由模块分离js文件
const home = () => import('views/home')
const category = () => import('views/category')
const cart = () => import('views/cart')
const profile = () => import('views/profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
