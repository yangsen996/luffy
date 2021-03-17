import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
Vue.use(VueRouter)

//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  }
]


const router = new VueRouter({
  routes,
  mode: 'history'
})

//将router传入vue实例
export default  router
