import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
import JobOffers from "@/components/job.components/JobOffers.vue";
import JobsFilter from "@/components/job.components/JobsFilter.vue";

library.add(fas)

createApp(App)
.component('fa', FontAwesomeIcon)
.component('JobOffers', JobOffers)
.component('JobsFilter', JobsFilter)
.use(router)
.use(createPinia())
.mount('#app')