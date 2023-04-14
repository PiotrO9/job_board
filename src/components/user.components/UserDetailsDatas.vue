<template>
  <div v-if="statistics != null && userDatas != null" 
    :class="{ dark: darkMode.getDarkModeState }" 
    class="UserDetailsDatas">
      <UserDetailsDatasCard />
      <div class="UserDetailsDatas__grid">
        <GridUserDetailsDataCell label="Age" :data=userDatas.dob.age />
        <GridUserDetailsDataCell label="Gender" :data=userDatas.gender />
        <GridUserDetailsDataCell label="Phone number" :data=userDatas.phone />
        <GridUserDetailsDataCell label="Post code" :data=userDatas.location.postcode />
        <GridUserDetailsDataCell label="Satate" :data=userDatas.location.state />
        <GridUserDetailsDataCell label="Time zone" :data=userDatas.location.timezone.offset />
        <GridUserDetailsDataCell label="Posts" :data=statistics.posts />
        <GridUserDetailsDataCell label="Followers" :data=statistics.followers />
        <GridUserDetailsDataCell label="Following" :data=statistics.following />
      </div>
      <button @click="ReturnToMainPage">Back</button>
  </div>
</template>

<script>
import UserDetailsDatasCard from "./UserDetailsDatasCard.vue";
import GridUserDetailsDataCell from "../GridUserDetailsDataCell.vue";
import { useDarkModeStore } from '@/stores/DarkModeStore'

export default {
  data() {
    return {
      statistics: null,
      userDatas: null
    }
  },
  computed: {
        darkMode() {
            return useDarkModeStore()
        }
  },
  components: {
    UserDetailsDatasCard,
    GridUserDetailsDataCell
  },
  mounted() {
    this.statistics = JSON.parse(localStorage.getItem('statistics'))
    this.userDatas = JSON.parse(localStorage.getItem('userDatas'))
  },
  methods: {
    ReturnToMainPage() {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";

.UserDetailsDatas {
    @include width-height(60%, 70%);
    display: flex;
    align-items: center;
    flex-direction: column;
    
    &__grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;

        @media (max-width: $BigMobileWidth) {
            width: 80%;
            gap: 20px;
        }
    }

    button {
        @include disable-borders;
        width: 300px;
        height: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        font-family: $CoreFontFamily;
        font-size: 30px;
        border-radius: 15px;
        
        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: $OldDesktopWidth) {
        width: 80%;
    }

    @media (max-width: $BigMobileWidth) {
        @include width-height(100%, 90%);
    }

    &.dark {
        background-color: $DarkModeBackground;

        button {
            color: white;
            background-color: $CoreDarkCyan;
        }
    }
}
</style>