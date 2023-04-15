<template>
  <div class="JobOffer" :class="{ dark: darkMode.getDarkModeState }">
    <div class="JobOffer__MainDatas">
    <img v-if="datas.logoUrl != undefined" class="JobOffer__MainDatas-CompanyLogo" :src=datas.logoUrl :width=datas.width :height=datas.height>
    <img v-else src="../../assets/images/question-mark.png" alt="Unknown logo">
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
import { useDarkModeStore } from '@/stores/DarkModeStore'

export default {
    props: ['datas'],
    computed: {
        darkMode() {
            return useDarkModeStore()
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

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";

.JobOffer {
    @include width-height-val(100%);
    min-height: 250px;
    background-color: white;
    border: 3px solid $SearchFieldsBackground;
    border-radius: 10px;

    &__MainDatas {
        @include width-height(100%, 50%);
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        img {
            max-width: 160px;
            max-height: 60px;
            margin-left: 10px;
            margin-top: 10px;
        }

        a {
            margin-top: 20px;
            text-align: center;
            text-decoration: none;
            font-size: 110%;
            font-family: $SmallComponentsFontFamily;
            color: black;
            cursor: pointer;
        }
    }

    &__DetailDatas {
        @include width-height(100%, 50%);
        display: grid;
        grid-template-columns: 1fr 7fr;

        svg {
            margin-left: 20px;
            margin-right: 30px;
            font-size: 30px;
        }

        p {
            text-align: start;
            font-size: 120%;
            font-family: $SmallComponentsFontFamily;
            font-weight: bold;
        }
    }

    &.dark {
        background-color: $DarkModeCoreBackground;
        border: 3px solid grey;
        color: $DarkModeFontColor;

        a {
            color: $DarkModeFontColor;
        }
        
        svg {
            color: $CoreOrange;
        }
    }
}
</style>