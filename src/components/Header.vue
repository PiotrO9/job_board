<template>
  <header :class="{ dark: darkMode }">
    <div id="LogoContainer">
      <p>
        <span>JOB</span>
        <span class="secondPartOfLogo">BOARD</span>
      </p>
      <fa icon="fa-bars" @click="ShowFiltersInMobileMode"/>
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
import { state } from '../main.js'

export default {
  computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  components: {
    SearchFields,
    UserDatas
  },
  methods: {
    ShowFiltersInMobileMode() {
      state.SetterFiltersInMobileMode(true)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/HeaderStyles.scss";
</style>