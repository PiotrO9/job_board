<template>
  <div :class="{ dark: darkMode }" class="UserDetailsView">
    <UserDetailsDatas />
  </div>
</template>

<script>
import UserDetailsDatas from "@/components/UserDetailsDatas.vue";
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
    UserDetailsDatas
  },
  mounted() {
    console.log(123)
    let header = document.querySelector("header")
    header.classList.remove("ShowHeader")
    header.classList.add("HideHeader")
    this.statistics = JSON.parse(localStorage.getItem('statistics'))
    this.userDatas = JSON.parse(localStorage.getItem('userDatas'))
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/UserDetailsViewStyles.scss";
</style>