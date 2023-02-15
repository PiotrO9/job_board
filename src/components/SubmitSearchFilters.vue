<template>
        <button @click="SearchingConfirming">
            Search
        </button>
</template>

<script>
import { state } from '../main.js'

export default {
    methods: {
        SearchingConfirming() {
            state.toggleReadiness()
            console.log(state.filteringCriterias.Salary.minSalary.value)
            console.log(state.filteringCriterias.Salary.maxSalary.value)
            console.log(state.filteringCriterias.Criterias.Experience.value)
            console.log(state.filteringCriterias.Criterias.ContractType.value)
            console.log(state.filteringCriterias.Location.value)
            console.log(state.filteringCriterias.Title.value)
        }
    }
}
</script>

<style lang="scss">
button {
min-width: 250px;
min-height: 50px;
font-family: "Sora";

    &:hover {
        cursor: pointer;
    }
}
</style>