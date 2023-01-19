<template>
  <header>
    <div id="LogoContainer">
      <p>
        <span>JOB</span>
        <span class="secondPartOfLogo">BOARD</span>
      </p>
    </div>
    <SearchFields />
    <div class="UserDatasContainer">
      <UserDatas />
    </div>
  </header>
</template>

<script>
import SearchFields from "@/components/SearchFields.vue"
import UserDatas from "@/components/UserDatas.vue"

export default {
  components: {
    SearchFields,
    UserDatas
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/HeaderStyles.scss";
</style>