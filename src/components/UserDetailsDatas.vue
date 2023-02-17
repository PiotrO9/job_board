<template>
  <div v-if="statistics != null && userDatas != null" 
    :class="{ dark: darkMode }" 
    class="UserDetailsDatas">
      <UserDetailsDatasCard />
      <div class="GridUserDetailsDatas">
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
import UserDetailsDatasCard from "@/components/UserDetailsDatasCard.vue";
import GridUserDetailsDataCell from "./GridUserDetailsDataCell.vue";
import { state } from '../main.js'

export default {
  data() {
    return {
      statistics: null,
      userDatas: null
    }
  },
  computed: {
        darkMode() {
            return state.darkMode.value
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

<style lang="scss">
@import "../assets/Styles/ComponentStyles/UserDetailsDatasStyles.scss";
</style>