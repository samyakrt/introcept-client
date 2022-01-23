import { createRouter,createWebHistory } from 'vue-router';
import HomePage from '~/pages/Home.vue';
import Register from '~/pages/Register.vue';
import PageNotFound from '~/pages/errors/404.vue';

const routes = [
    {
        path:'/',
        component: HomePage,
        name: 'home'
    },
    {
        path:'/register',
        component: Register,
        name: 'register'
    },
    // {
    //     path:':pathMatch(.*)*',
    //     component: PageNotFound
    // }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;