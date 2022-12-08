import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/css/FEaST_CSS.css'

/* Import fontawesome stuff & things */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import entire fa library icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(fas, faLinkedin, faInstagram, faGithub)

const app = createApp(App)

export const checkLogin = reactive({
    check: false
})

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

