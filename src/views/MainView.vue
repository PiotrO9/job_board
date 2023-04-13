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
    let header = document.querySelector("header")
    header.classList.remove("HideHeader")
    header.classList.add("ShowHeader")
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.MainView {
    @include width-height(100%, 92%);
    display: grid;
    grid-template-columns: 3fr 9fr;

    @media (max-width: $BigMobileWidth) {
        grid-template-columns: 1fr;
    }

    &.dark {
        background-color: $DarkModeBackground;
    }
}
</style>