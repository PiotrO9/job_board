<template>
        <button @click="SearchingConfirming">Search</button>
</template>

<script>
import { state } from '../main.js'

export default {
    methods: {
        SearchingConfirming() {
            state.toggleReadiness()
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/SubmitSearchFiltersStyles.scss";
</style>