import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Emails from '../views/test/Emails.vue'
import Users from '../views/test/Users.vue'
import Test from '../views/test/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      Side: Emails,
      Top: Users
    }
  },
  {
    path: '/User',
    name: 'User',
    components: {
      default: Home,
      Side: Emails,
      Top: Users
    },
    children:[
      {
        path: 'test',
        name: 'Test',
        component: Test
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
