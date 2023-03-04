<template>
    <div class="NoResultContainer" :class="{ dark: darkMode }">
        <p class="NoResultContainer__MainText">No results</p>
    </div>
</template>

<script>
import { state } from '../main.js'

export default {
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/NoResultsStyles.scss";
</style>