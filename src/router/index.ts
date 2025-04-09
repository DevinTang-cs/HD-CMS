import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
// import { mapMenusToRoutes } from '@/utils/map-menus'
// import store from '@/store'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue')
    // children: []
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
    // const userMenus = (store.state as any).login.userMenus
    // const routes = mapMenusToRoutes(userMenus)
    // routes.forEach((route) => {
    //   router.addRoute('main', route)
    // })
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
