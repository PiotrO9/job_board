<template>
  <div class="MainView">
    <JobsFilter />
    <JobOffers />
  </div>
</template>

<script>
import JobsFilter from "@/components/JobsFilter.vue";
import JobOffers from "@/components/JobOffers.vue";

export default {
    mounted() {
      let header = document.querySelector("header")
      header.style.display = "grid"
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/MainViewStyles.scss";
</style>