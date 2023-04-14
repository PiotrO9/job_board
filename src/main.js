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

export const state = ({
    filteringCriterias: ref({
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
            this.Salary.minSalary = val
        },
        ChangeMaxSalary(val) {
            this.Salary.maxSalary = val
        },
        ChangeExperienceCriterias(val) {
            this.Criterias.Experience = val
        },
        ChangeContractTypeCriterias(val) {
            this.Criterias.ContractType = val
        },
        ChangeLocation(val) {
            this.Location = val
        },
        ChangeTitle(val) {
            this.Title = val
        }
    }),
    getFilteringCriterias() {
        return this.filteringCriterias.value
    },
    readyForFiltering: ref(false),
    toggleReadiness() {
        this.readyForFiltering.value = !this.readyForFiltering.value
    },
    filtersInMobileMode: ref(false),
    SetterFiltersInMobileMode(val) {
        this.filtersInMobileMode.value = val
    }
})

createApp(App)
.component('fa', FontAwesomeIcon)
.component('JobOffers', JobOffers)
.component('JobsFilter', JobsFilter)
.use(router)
.use(createPinia())
.mount('#app')