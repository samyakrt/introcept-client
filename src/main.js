import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}/api/v1`
const app = createApp(App)
app.use(router);
app.mount('#app');
