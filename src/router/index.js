import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'
import DynamicView from '@/views/DynamicView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetailView from '../views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },    
    {
      path: '/dynamic',
      name: 'dynamic',
      component: DynamicView
    },    
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView
    }
  ]
})

export default router
