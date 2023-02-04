<template>
  <div class="UserDetailsView">
    <h1>UserDetailsView</h1>
    <UserDetailsDatas />
  </div>
</template>

<script>
import UserDetailsDatas from "@/components/UserDetailsDatas.vue";

export default {
  data() {
    return {
      statistics: null,
      userDatas: null
    }
  },
  components: {
    UserDetailsDatas
  },
  mounted() {
    let header = document.querySelector("header")
    header.style.display = "none"
    this.statistics = JSON.parse(localStorage.getItem('statistics'))
    this.userDatas = JSON.parse(localStorage.getItem('userDatas'))
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/UserDetailsViewStyles.scss";
</style>