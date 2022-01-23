import { createRouter,createWebHistory } from 'vue-router';
import HomePage from '~/pages/Home.vue';
import Register from '~/pages/Register.vue';

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
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;