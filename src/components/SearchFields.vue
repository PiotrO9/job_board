<template>
  <div :class="{ dark: darkMode }" class="SearchFields">
    <div class="JobSearch">
        <fa icon="fa-magnifying-glass"/>
        <input id="TitleInputField" type="text" placeholder="Search for Job" @change="UpdateTitle">
    </div>
    <div class="PlaceSearch">
        <fa icon="fa-location-dot"/>
        <input id="LocationInputField" type="text" placeholder="Add country or city" @change="UpdateLocation">
    </div>
    <div class="SearchSubmitButton">
        <SubmitSearchFilters />
    </div>
  </div>
</template>

<script>
import SubmitSearchFilters from './SubmitSearchFilters.vue';
import { state } from '../main.js'

export default {
  computed: {
        darkMode() {
            return state.darkMode.value
        }
  },
  components: {
    SubmitSearchFilters
  },
  methods: {
    UpdateTitle() {
      const TitleInputField = document.getElementById("TitleInputField")
      state.filteringCriterias.value.ChangeTitle(TitleInputField.value)
    },
    UpdateLocation() {
      const LocationInputField = document.getElementById("LocationInputField")
      state.filteringCriterias.value.ChangeLocation(LocationInputField.value)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/SearchFieldsStyles.scss";
</style>