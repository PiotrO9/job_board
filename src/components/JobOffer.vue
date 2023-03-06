<template>
  <div class="JobOffer" :class="{ dark: darkMode }">
    <div class="JobOffer__MainDatas">
    <img v-if="datas.logoUrl != undefined" class="JobOffer__MainDatas-CompanyLogo" :src=datas.logoUrl :width=datas.width :height=datas.height>
    <img v-else src="../assets/images/question-mark.png" alt="Unknown logo">
    <a @click="RedirectToDetailPage">{{ datas.jobOfferName }}</a>
    </div>
    <div class="JobOffer__DetailDatas">
        <fa icon="fa-building"/>
        <p>{{ datas.companyName }}</p>
        <fa icon="fa-location-dot"/>
        <p>{{ datas.jobCity }}</p>
        <fa icon="fa-money-bill-wave"/>
        <p>{{ datas.salary }}</p>
    </div>
  </div>
</template>

<script>
import FetchDataFromNoFluffJobsDetailPage from '@/utils/ApiUtils/FetchDataFromNoFluffJobsDetailPage.js'
import { state } from '../main.js'

export default {
    props: ['datas'],
    computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  methods: {
    RedirectToDetailPage() {
      FetchDataFromNoFluffJobsDetailPage(this.datas.jobDetailsLink)
        .then(res => {
          localStorage.setItem("JobDetailsData", JSON.stringify(res))
          localStorage.setItem("JobOfferData", JSON.stringify(this.$props.datas))
          this.$router.push({ name: "offerDetails"})
        })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobOfferStyles.scss";
</style>