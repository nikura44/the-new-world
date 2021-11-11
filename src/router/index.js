import Vue from 'vue'
import VueRouter from 'vue-router'
import NoteList from '../views/notes/NoteList.vue'
import Content from '../views/notes/Content.vue'
import nodeHome from '../views/notes/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component : Content
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: nodeHome,
    children :[
      {
        path: '/blog_list',
        name: 'NoteList',
        component : NoteList
      },
      {
        path: '/blog_editor',
        name: 'Content',
        component : Content
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
