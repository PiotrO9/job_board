import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filterStore', {
    state: () => ({
        filteringCriterias: {

            Salary: {
                minSalary: 0,
                maxSalary: 50000
            },
            Criterias: {
                Experience: [],
                ContractType: []
            },
            Location: "",
            Title: "",
        },
        filtersInMobileMode: false,
        readyForFiltering: false
    }),
    getters: {
        getFilteringCriterias() {
            return this.filteringCriterias
        },
        getReadinessValue() {
            return this.readyForFiltering
        }
    },
    actions: {
        toggleReadiness() {
            this.readyForFiltering = !this.readyForFiltering
        },
        SetterFiltersInMobileMode(val) {
            this.filtersInMobileMode = val
        },
        ChangeMinSalary(val) {
            this.filteringCriterias.Salary.minSalary = val
        },
        ChangeMaxSalary(val) {
            this.filteringCriterias.Salary.maxSalary = val
        },
        ChangeExperienceCriterias(val) {
            this.filteringCriterias.Criterias.Experience = val
        },
        ChangeContractTypeCriterias(val) {
            this.filteringCriterias.Criterias.ContractType = val
        },
        ChangeLocation(val) {
            this.filteringCriterias.Location = val
        },
        ChangeTitle(val) {
            this.filteringCriterias.Title = val
        }
    }
})