import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router  from './router'

const pinia = createPinia()


import './css/style.css'
import 'material-icons/iconfont/material-icons.css';



import axios from 'axios';




createApp(App).use(router).use(pinia).mount('#app')
