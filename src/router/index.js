import Vue from 'vue'
import VueRouter from 'vue-router'
import NoteList from '../views/notes/NoteList.vue'
import Content from '../views/notes/Content.vue'
import nodeHome from '../views/notes/index.vue'
import NoteView from '../views/notes/NoteView.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Content
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: nodeHome,
    children: [{
        path: '/blog_list',
        name: 'NoteList',
        component: NoteList,
        children: [{
          path: 'blog_content',
          name: 'NoteView',
          component: NoteView,
        }]
      },
      {
        path: '/blog_editor',
        name: 'Content',
        component: Content
      }, 
      // {
      //   path: '/blog_content',
      //   name: 'NoteView',
      //   component: NoteView
      // }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router