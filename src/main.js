import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import JobOffers from "@/components/JobOffers.vue";
import JobsFilter from "@/components/JobsFilter.vue";

library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
.component('JobOffers', JobOffers)
.component('JobsFilter', JobsFilter)
.use(router)
.mount('#app')
