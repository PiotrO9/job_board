<template>
  <div  :class="{ loadingPhase: jobOffers == null, dark: darkMode }" class="JobOffers">
    <div v-if="jobOffers == null">
      <Loading/>
    </div>
    <div v-for="jobOffer in jobOffers" v-bind:key="jobOffer">
      <JobOfferPreviewThreeColumns :datas="jobOffer" />
    </div>
  </div>
</template>

<script>
import FetchDataFromNoFluffJobsWithFilters from "@/utils/ApiUtils/FetchDataFromNoFluffJobsWithFilters.js"
import JobOfferPreviewThreeColumns from "@/components/JobOfferPreviewThreeColumns.vue"
import Loading from "@/components/Loading.vue"
import { state } from '../main.js'

export default {
    data(){
      return {
        jobOffers: null
      }
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    components: {
      JobOfferPreviewThreeColumns,
      Loading
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