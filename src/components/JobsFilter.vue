<template>
  <aside :class="{ dark: darkMode }">
    <div class="DisplayStrategyMode">
      <p>Display mode: </p>
      <fa icon="fa-table-cells-large"/>
      <fa icon="fa-table-cells"/>
    </div>
    <section>
        <SalaryFilter :minSalary=minSal />
        <ExperienceFilter />
        <ContractTypeFilter />
    </section>
    <div class="SearchConfirm">
      <button @click="SearchingConfirming">
      Search
      </button>
    </div>
  </aside>
</template>

<script>
import SalaryFilter from "../components/SalaryFilter.vue"
import ExperienceFilter from "../components/ExperienceFilter.vue"
import ContractTypeFilter from "../components/ContractTypeFilter.vue"
import { state } from '../main.js'

export default {
  data() {
    return {
      minSal: 100,
      maxSalary: 50000
    }
  },
  computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  components: {
    SalaryFilter,
    ExperienceFilter,
    ContractTypeFilter
  },
  methods: {
    SearchingConfirming() {
      state.toggleReadiness()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobsFilterStyles.scss";
</style>