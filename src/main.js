import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import 'primeicons/primeicons.css'

import './assets/css/app.css'
import PrimeVue from 'primevue/config'
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import router from './router'

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(store);
app.mount('#app')
