import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Movie from '../views/home/movie/Movie'
import Seah from '../views/home/seah/Seah'
import Station from '../views/home/station/Station'
import My from '../views/home/my/My'
import Commend from '@/views/home/movie/Commend'
import Course from '@/views/home/movie/Course'
import Guide from '@/views/home/movie/Guide'
import Upgrade from '@/views/home/movie/Upgrade'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/movie/Commend'
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/movie/Commend',
    
    children: [
      {
        path: '/home/movie',
        component: Movie,
        redirect: '/home/movie/Commend',
        children: [
          {
            path: 'Commend',
            component: Commend
          },
          {
            path: '/Course',
            component: Course
          },
          {
            path: '/Guide',
            component: Guide
          },
          {
            path: '/Upgrade',
            component: Upgrade
          },
        ]
      },
      {
        path: '/home/seah',
        component: Seah
      },
      {
        path: '/home/station',
        component: Station
      },
      {
        path: '/home/my',
        component: My
      }
    ]
  }

]


const router = new VueRouter({
  routes
})

export default router
