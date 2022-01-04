import { createRouter, createMemoryHistory, Router, RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext} from "vue-router";

let routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/page/home/index.vue')
  }
]

let router: Router = createRouter({
  routes: routes,
  history: createMemoryHistory()
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log('beforeEach----')
  next()
})

export default router