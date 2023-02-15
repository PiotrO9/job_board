import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

import JobOffers from "@/components/JobOffers.vue";
import JobsFilter from "@/components/JobsFilter.vue";

library.add(fas)

export const state = ({
    darkMode: ref(false),
    toggleDarkMode() {
        this.darkMode.value = !this.darkMode.value
    },
    filteringCriterias: {
        Salary: {
            minSalary: ref(0),
            maxSalary: ref(50000),
        },
        Criterias: {
            Experience: ref([]),
            ContractType: ref([])
        },
        Location: ref(""),
        Title: ref(""),

        ChangeMinSalary(val) {
            this.Salary.minSalary.value = val
        },
        ChangeMaxSalary(val) {
            this.Salary.maxSalary.value = val
        },
        ChangeExperienceCriterias(val) {
            this.Criterias.Experience.value = val
        },
        ChangeContractTypeCriterias(val) {
            this.Criterias.ContractType.value = val
        },
        ChangeLocation(val) {
            this.Location.value = val
        },
        ChangeTitle(val) {
            this.Title.value = val
        }
    },
    readyForFiltering: ref(false),
    toggleReadiness() {
        this.readyForFiltering.value = !this.readyForFiltering.value
    }
})

createApp(App)
.component('fa', FontAwesomeIcon)
.component('JobOffers', JobOffers)
.component('JobsFilter', JobsFilter)
.use(router)
.mount('#app')