import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index";
import stores from "@/store/index";

createApp(App).use(router).use(stores).mount('#app')
