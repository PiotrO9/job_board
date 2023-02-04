<template>
  <div class="UserDetailsView">
    <h1>UserDetailsView</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: null,
      userDatas: null
    }
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

</style>