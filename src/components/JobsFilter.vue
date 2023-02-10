<template>
  <aside :class="{ dark: darkMode }">
    <div class="DisplayStrategyMode">
      <p>Display mode: </p>
      <fa icon="fa-table-cells-large"/>
      <fa icon="fa-table-cells"/>
    </div>
    <section>
        <SalaryFilter />
        <ExperienceFilter />
    </section>
  </aside>
</template>

<script>
import SalaryFilter from "../components/SalaryFilter.vue"
import ExperienceFilter from "../components/ExperienceFilter.vue"
import { state } from '../main.js'


export default {
  computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  components: {
    SalaryFilter,
    ExperienceFilter
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobsFilterStyles.scss";
</style>