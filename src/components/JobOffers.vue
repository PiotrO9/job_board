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
        },
        readyState() {
          return state.readyForFiltering.value
        }
    },
    components: {
      JobOfferPreviewThreeColumns,
      Loading
    },
    mounted() {
      FetchDataFromNoFluffJobsWithFilters()
        .then((res) => this.jobOffers = res)

      // fetch("http://localhost:3000/test", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   mode: "cors",
      //   body: JSON.stringify({
      //     Location: "Warszawa",
      //     Title: "Vue.js developer",
      //     Criterias: {
      //       Experience: ['Senior','Junior'],
      //       ContractType: ['permanent', 'b2b', 'intern']
      //     },
      //     Salary: {
      //       min: 10000,
      //       max: 20000
      //     }
      //   }),
      // }).then(res => res.json())
      //   .then(res => console.log(res))
    },
    methods: {
      test(data) {
        console.log("Zdarzenie dotartło")
      }
    },
    watch: {
      readyState() {
        if (state.readyForFiltering.value) {

        }
      }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobOffersStyles.scss";
</style>