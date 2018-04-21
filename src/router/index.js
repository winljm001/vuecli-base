import Vue from 'vue'
import Router from 'vue-router'
// 首页
import home from '../views/home/home'
import movie from '../components/movie/movie'
import music from '../components/music/music'
import book from '../components/book/book'
// 登录
import login from '../views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/home/movie',
      children: [
        {
          path: '/home/movie',
          name: 'movie',
          component: movie
        },
        {
          path: '/home/music',
          name: 'music',
          component: music
        },
        {
          path: '/home/book',
          name: 'book',
          component: book
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: './home'
    }
  ]
})
