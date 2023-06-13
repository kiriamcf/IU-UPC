import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '', name: 'home', component: () => import("@/views/Home.vue")},
    {path: '/carta', name: 'carta', component: () => import("@/views/CardPage.vue")},
    {path: '/carret', name: 'carret', component: () => import("@/views/CartPage.vue")},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router