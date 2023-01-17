<template>
  <div class="SearchFields">
    <div class="JobSearch">
        <fa icon="fa-magnifying-glass"/>
        <input type="text" placeholder="Search for Job">
    </div>
    <div class="PlaceSearch">
        <fa icon="fa-location-dot"/>
        <input type="text" placeholder="Add country or city">
    </div>
    <div class="SearchSubmitButton">
        <button>Search</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/SearchFieldsStyles.scss";
</style>