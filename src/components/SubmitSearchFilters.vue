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

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

button {
    min-width: 250px;
    min-height: 50px;
    font-family: $SmallComponentsFontFamily;
    
        &:hover {
            cursor: pointer;
        }
    
    @media (max-width: $OldDesktopWidth) {
        min-width: 200px;
        max-height: 20px;
    }
}
</style>