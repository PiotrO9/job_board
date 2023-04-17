<template>
        <button @click="SearchingConfirming">Search</button>
</template>

<script>
import { useFilterStore } from '@/stores/FilterStore';

export default {
    computed: {
        filterState() {
            return useFilterStore()
        }
    },
    methods: {
        SearchingConfirming() {
            this.filterState.toggleReadiness()
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