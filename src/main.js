import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import './assets/FEaST_CSS.css'
import './assets/boostrap.min.css'

import './assets/js/all.min.js'
import './assets/js/boostrap.min.js'
import './assets/js/jquery-3.6.1.min.js'
import './assets/js/popper.min.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
