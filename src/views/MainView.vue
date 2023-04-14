<template>
  <div class="MainView" :class="{ dark: darkMode.getDarkModeState }">
    <JobsFilter />
    <JobOffers />
  </div>
</template>

<script>
import JobsFilter from "@/components/job.components/JobsFilter.vue";
import JobOffers from "@/components/job.components/JobOffers.vue";
import { useDarkModeStore } from "@/stores/DarkModeStore";

export default {
  computed: {
        darkMode() {
            return useDarkModeStore()
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