import {createRouter, createWebHistory} from "vue-router"

const routes = [
  { path: '/', component: () => import("@/views/Home.vue")},
  { path: '/carta', component: () => import("@/views/CardPage.vue")},
  { path: '/carret', component: () => import("@/views/CartPage.vue")},
  { path: '/login', component: () => import("@/views/LoginPage.vue")},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
