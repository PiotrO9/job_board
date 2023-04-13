<template>
  <div :class="{ loadingPhase: jobOffers == null || jobOffers.length < 1, dark: darkMode }" class="JobOffers">
    <div v-if="jobOffers == null">
      <Loading/>
    </div>
    <div v-else-if="jobOffers.length < 1" class="NoResults">
      <NoResults/>
    </div>
    <div v-else v-for="jobOffer in jobOffers" :key="jobOffer">
      <JobOffer :datas="jobOffer"/>
    </div>
  </div>
</template>

<script>
import FetchDataFromNoFluffJobsWithFilters from "@/utils/ApiUtils/FetchDataFromNoFluffJobsWithFilters.js"
import JobOffer from "./JobOffer.vue"
import Loading from "@/components/Loading.vue"
import NoResults from "@/components/NoResults.vue"
import { state } from '../../main.js'
import FetchDataFromNoFluffJobsWithCriterias from "@/utils/ApiUtils/FetchDataFromNoFluffJobsWithCriterias"

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
      JobOffer,
      Loading,
      NoResults
    },
    mounted() {
      FetchDataFromNoFluffJobsWithFilters()
        .then((res) => this.jobOffers = res)
    },
    watch: {
      readyState() {
        if (state.readyForFiltering.value) {
          this.jobOffers = null
          FetchDataFromNoFluffJobsWithCriterias()
            .then(responseOffers => this.jobOffers = responseOffers)
            .then(state.toggleReadiness())
        }
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";

.loadingPhase {
    &.JobOffers {
        @include flex-center;
    }
}

.JobOffers {
    @include width-height(100%, 97%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-top: 10px;
    margin-right: 100px;
    overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

    @media (max-width: $MediumDesktopWidth) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: $SmallDesktopWidth) {
        grid-template-columns: 1fr;
    }

    @media (max-width: $BigMobileWidth) {
        height: 100%;
    }

    &.loadingPhase {
        @media (max-width: $BigMobileWidth) {
            height: 60%;
        }
    }
}
</style>