import Vue from 'vue'
import VueRouter from 'vue-router'
import NoteList from '../views/notes/NoteList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component : NoteList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
