<template>
  <div class="MainView" :class="{ dark: darkMode }">
    <JobsFilter />
    <JobOffers />
  </div>
</template>

<script>
import JobsFilter from "@/components/JobsFilter.vue";
import JobOffers from "@/components/JobOffers.vue";
import { state } from '../main.js'

export default {
  computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  components: {
    JobsFilter,
    JobOffers
  },
  mounted() {
    console.log(321)
    let header = document.querySelector("header")
    header.classList.remove("HideHeader")
    header.classList.add("ShowHeader")
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/MainViewStyles.scss";
</style>