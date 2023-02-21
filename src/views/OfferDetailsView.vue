<template>
  <div class="OfferDetailView">
    <div v-if="JobDetailsData && JobOfferData" class="OfferDetailViewContent">
      <div class="OfferDetailViewContentCard">
        <img v-if="JobOfferData.logoUrl" :src=JobOfferData.logoUrl alt="Company logo">
        <img v-else src="../assets/images/question-mark.png" alt="Company logo">
        <p>{{ JobOfferData.jobOfferName }}</p>
      </div>
      <div class="OfferDetailViewContentDatas">
        <section>
          <article>
            <p>Neccessary skills</p>
            <div class="SkillContainer">
              <span v-for="Skill in JobDetailsData.NeccessarySkillsList" v-bind:key="Skill">
                {{ Skill }}
              </span>
            </div>
          </article>
          <article>
            <p>Requirements</p>
            <ul class="RequirementsContainer">
              <li v-for="Requirement in JobDetailsData.RequirementsList" v-bind:key="Requirement">
                {{ Requirement }}
              </li>
            </ul>
          </article>
          <article>
            <p>Job description</p>
            <span class="JobDescription">
              {{ JobDetailsData.JobOfferDescription }}
            </span>
          </article>
        </section>
      </div>
      <div class="BackButtonContainer">
        <button @click="RedirectToMainPage">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            JobDetailsData: null,
            JobOfferData: null
        }
    },
    methods: {
      RedirectToMainPage() {
        this.$router.push({ name: "main" })
      }
    },
    mounted() {
      let header = document.querySelector("header")
      header.style.display = "none"
      this.JobDetailsData = JSON.parse(localStorage.getItem("JobDetailsData"))
      this.JobOfferData = JSON.parse(localStorage.getItem("JobOfferData"))
      console.log(this.JobDetailsData)
    }

}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/OfferDetailsViewStyles.scss";
</style>