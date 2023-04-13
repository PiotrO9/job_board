<template>
  <div class="OfferDetailView" :class="{ dark: darkMode }">
    <div v-if="JobDetailsData && JobOfferData" class="OfferDetailView__Content">
      <div class="OfferDetailView__Content-Card">
        <img v-if="JobOfferData.logoUrl" :src=JobOfferData.logoUrl alt="Company logo">
        <img v-else src="../assets/images/question-mark.png" alt="Company logo">
        <p>{{ JobOfferData.jobOfferName }}</p>
      </div>
      <div class="OfferDetailView__Content-Datas">
        <section>
          <article v-if="JobDetailsData.NeccessarySkillsList.length > 0">
            <p>Neccessary skills</p>
            <div class="Skill-Container">
              <span v-for="Skill in JobDetailsData.NeccessarySkillsList" :key="Skill">
                {{ Skill }}
              </span>
            </div>
          </article>
          <article v-if="JobDetailsData.RequirementsList.length > 0">
            <p>Requirements</p>
            <ul class="Requirements-Container">
              <li v-for="Requirement in JobDetailsData.RequirementsList" :key="Requirement">
                {{ Requirement }}
              </li>
            </ul>
          </article>
          <article>
            <p>Job description</p>
            <span class="Job-Description">
              {{ JobDetailsData.JobOfferDescription }}
            </span>
          </article>
        </section>
      </div>
      <div class="OfferDetailView__Content-BackButtonContainer">
        <button @click="RedirectToMainPage">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { state } from '../main.js'

export default {
    data() {
        return {
            JobDetailsData: null,
            JobOfferData: null
        }
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    methods: {
      RedirectToMainPage() {
        this.$router.push({ name: "main" })
      }
    },
    mounted() {
      let header = document.querySelector("header")
      header.classList.remove("ShowHeader")
      header.classList.add("HideHeader")
      this.JobDetailsData = JSON.parse(localStorage.getItem("JobDetailsData"))
      this.JobOfferData = JSON.parse(localStorage.getItem("JobOfferData"))
    }

}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/OfferDetailsViewStyles.scss";
</style>