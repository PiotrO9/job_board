<template>
  <aside :class="{ dark: darkMode }">
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
        },
        filtersInMobileMode() {
            return state.filtersInMobileMode.value
        }
  },
  components: {
    SalaryFilter,
    ExperienceFilter,
    ContractTypeFilter
  },
  watch: {
    filtersInMobileMode() {
      const aside = document.getElementsByTagName("aside")[0]
      if(this.filtersInMobileMode) {
        aside.classList.add("ShowMobileFilters")
      }
      else {
        aside.classList.remove("ShowMobileFilters")
      }
    }
  },
  methods: {
    SearchingConfirming() {
      state.toggleReadiness()
    },
    SetTwoColumnsDisplayMode() {
      this.DisableActiveDisplayModes()
      const TwoColumnsDisplayMode = document.getElementById("TwoColumnsDisplayMode").classList.add("ActiveDisplayMode")
      state.setDisplayMode(false)
      console.log(state.ThreeColumnDisplayMode)
    },
    SetThreeColumnsDisplayMode() {
      this.DisableActiveDisplayModes()
      const ThreeColumnsDisplayMode = document.getElementById("ThreeColumnsDisplayMode").classList.add("ActiveDisplayMode")
      state.setDisplayMode(true)
      console.log(state.ThreeColumnDisplayMode)
    },
    DisableActiveDisplayModes() {
      const TwoColumnsDisplayMode = document.getElementById("TwoColumnsDisplayMode")
      const ThreeColumnsDisplayMode = document.getElementById("ThreeColumnsDisplayMode")
      
      TwoColumnsDisplayMode.classList.remove("ActiveDisplayMode")
      ThreeColumnsDisplayMode.classList.remove("ActiveDisplayMode")
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobsFilterStyles.scss";
</style>