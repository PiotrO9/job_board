<template>
  <div class="OfferDetailView" :class="{ dark: darkMode.getDarkModeState }">
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
import { useDarkModeStore } from '@/stores/DarkModeStore'

export default {
  data() {
    return {
      JobDetailsData: null,
      JobOfferData: null
    }
  },
  computed: {
    darkMode() {
      return useDarkModeStore()
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

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.OfferDetailView {
  @include width-height-val(100%);
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &__Content {
    justify-content: center;
    align-items: start;
    width: 50%;
    margin-top: 5vh;

    &-Card {
      display: flex;
      flex-direction: row;
      gap: 50px;
      margin-bottom: 7vh;

      img {
        max-width: 180px;
        max-height: 120px;

        @media (max-width: $BigMobileWidth) {
          max-width: 120px;
          max-height: 90px;
        }
      }

      p {
        margin-top: 14px;
        text-align: center;
        font-size: 50px;
        font-family: $CoreFontFamily;

        @media (max-width: $BigMobileWidth) {
          font-size: 20px;
        }
      }

      @media (max-width: $BigMobileWidth) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
      }
    }

    &-Datas {

      section {

        article {
          font-family: $CoreFontFamily;

          p {
            font-size: 32px;
            margin-top: 16px;
            margin-bottom: 16px;

            @media (max-width: $BigMobileWidth) {
              text-align: center;
            }
          }

          .Skill-Container {
            display: flex;
            justify-content: space-evenly;
            gap: 10px;
            flex-wrap: wrap;
            text-align: center;

            span {
              font-family: $SmallComponentsFontFamily;
              font-size: 100%;
              border: 2px solid grey;
              padding: 2px;
              height: 30px;
              width: 100%;
              max-width: 220px;
            }
          }

          .Requirements-Container {
            list-style-type: none;

            li {
              margin: 9px;
              margin-left: 16px;
              font-family: $SmallComponentsFontFamily;
              font-size: 18px;
            }
          }

          .Job-Description {
            margin: 14px;
            font-family: $SmallComponentsFontFamily;
            font-size: 18px;

            @media (max-width: $BigMobileWidth) {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
          }
        }
      }
    }

    &-BackButtonContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4vh;

      button {
        width: 10%;
        height: 30px;
        min-width: 100px;
        @include disable-borders;
        margin-bottom: 2vh;
        border-radius: 15px;
        font-size: 100%;
        background-color: $CoreDarkCyan;
      }
    }

    @media (max-width: $BigMobileWidth) {
      width: 100%;
    }
  }

  &.dark {
    background-color: $DarkModeBackground;

    button,
    p,
    span,
    li {
      color: $DarkModeFontColor;
    }
  }
}
</style>