<template>
  <div :class="{ dark: darkMode }" class="JobsFilter">
    <h1>JobsFilter</h1>
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
@import "../assets/Styles/ComponentStyles/JobsFilterStyles.scss";
</style>