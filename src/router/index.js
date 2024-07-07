import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReleaseView from '@/views/ReleaseView.vue'
import ArticleView from '@/views/ArticleView.vue'
import ReactionView from '@/views/ReactionView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/release',
      name: 'release',
      //加入发布页面的路由
      component: ReleaseView
    },
    {
      path: '/article',
      name: 'article',
      //加入文章页面的路由
      component: ArticleView
    },
    {
      path: '/reaction',
      name: 'reaction',
      //加入文学互动页面的路由
      component: ReactionView
    }
  ]
})

export default router
