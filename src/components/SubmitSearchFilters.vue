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
button {
min-width: 250px;
min-height: 50px;
font-family: "Sora";

    &:hover {
        cursor: pointer;
    }
}
</style>