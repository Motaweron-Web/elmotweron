import '../src/assets/css/fontawesome.css'
import '../src/assets/css/bootstrap.rtl.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/style.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import '@popperjs/core'
import '../src/assets/js/bootstrap'
import '../src/assets/js/wow'
