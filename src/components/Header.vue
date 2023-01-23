<template>
  <header :class="{ dark: darkMode }">
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
import { ThemeMode } from "@/utils/store"

export default {
  components: {
    SearchFields,
    UserDatas
  },
  data() {
    return {
      darkMode: false
    }
  },
  mounted() {
    this.darkMode = ThemeMode.isDarkMode
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/HeaderStyles.scss";
</style>