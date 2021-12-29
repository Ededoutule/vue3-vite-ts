import { createRouter, createMemoryHistory, Router } from "vue-router";

let routes = [
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

export default router