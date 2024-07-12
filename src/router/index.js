import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReleaseView from '@/views/ReleaseView.vue'
import ArticleView from '@/views/ArticleView.vue'
import ReactionView from '@/views/ReactionView.vue'
import Personal from '@/components/Personal.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Admiration from '@/components/Admiration.vue'
import Others from '../components/OthersDetailPages.vue'
import ArtticleDetailPages from '@/components/ArtticleDetailPages.vue'
import BookDtail from '../components/BookDetailPages.vue'
import chart from '../components/charts.vue'
import start from '../components/StartChallenge.vue'
import challenge from '../components/Challenge.vue'
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
    },
    {
      path:'/personal',
      name:'personal',
      component:Personal
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/admiration',
      name:'admiration',
      component:Admiration
    },
    {
      path:'/others/:name',
      name:'others',
      component:Others,
      props:true
    },
    {
      path:'/articledetail/:id',
      name:'articledetail',
      component:ArtticleDetailPages,
      props: true
    },
    {
      path:'/bookdetail/:id',
      name:'bookdetail',
      component:BookDtail,
      props: true
    },
    {
      path:'/charts',
      name:'charts',
      component:chart
    },
    {
      path:'/start',
      name:'start',
      component:start
    },
    {
      path:'/challenge',
      name:'challenge',
      component:challenge

    }
  ]
})

export default router
