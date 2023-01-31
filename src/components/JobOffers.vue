<template>
  <div class="JobOffers">
    <div v-if="jobOffers == null">
      <h3>Loading...</h3>
    </div>
    <div v-for="jobOffer in jobOffers" v-bind:key="jobOffer">
      <JobOfferPreviewThreeColumns :datas="jobOffer" />
    </div>
  </div>
</template>

<script>
import FetchDataFromNoFluffJobsWithFilters from "@/utils/ApiUtils/FetchDataFromNoFluffJobsWithFilters.js"
import JobOfferPreviewThreeColumns from "@/components/JobOfferPreviewThreeColumns.vue"

export default {
    data(){
      return {
        jobOffers: null
      }
    },
    components: {
      JobOfferPreviewThreeColumns
    },
    mounted() {
      FetchDataFromNoFluffJobsWithFilters()
        .then((res) => this.jobOffers = res)
        .then((res) => console.log(this.jobOffers))
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobOffersStyles.scss";
</style>