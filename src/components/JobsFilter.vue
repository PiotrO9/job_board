<template>
  <aside :class="{ dark: darkMode }">
    <div class="DisplayStrategyMode">
      <p>Display mode: </p>
      <fa icon="fa-table-cells-large"/>
      <fa icon="fa-table-cells"/>
    </div>
    <section>
      <article class="SalaryArticle">
        <SalaryFilter />
      </article>
    </section>
  </aside>
</template>

<script>
import SalaryFilter from "../components/SalaryFilter.vue"
import { state } from '../main.js'


export default {
  computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  components: {
    SalaryFilter
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobsFilterStyles.scss";
</style>