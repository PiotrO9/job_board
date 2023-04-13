<template>
  <div :class="{ dark: darkMode }" class="SearchFields">
    <div class="SearchFields__JobSearch">
        <fa icon="fa-magnifying-glass"/>
        <input id="TitleInputField" 
          type="text" 
          placeholder="Search for Job" 
          autocomplete="off"
          @change="UpdateTitle">
    </div>
    <div class="SearchFields__PlaceSearch">
        <fa icon="fa-location-dot"/>
        <input id="LocationInputField" 
          type="text" 
          placeholder="Add country or city" 
          autocomplete="off"
          @change="UpdateLocation">
    </div>
    <div class="SearchFields__SearchSubmitButton">
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

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.SearchFields {
    @include flex-direction(row);
    width: 100%;
    align-items: center;
    gap: 10px;
    font-family: $CoreFontFamily;

    &__JobSearch, &__PlaceSearch {
        min-width: 35%;
        padding: 12px;
        background-color: $SearchFieldsBackground;
        border: 1px solid lightgray;
        border-radius: 10px;
        color: black;

        input {
            @include disable-borders;
            background-color: $SearchFieldsBackground;
            font-weight: bold;

            @media (max-width: $OldDesktopWidth) {
                width: 75%;
                font-size: 10px;
            } 
        }

        svg {
            padding-right: 5px;

            @media (max-width: $OldDesktopWidth) {
                padding-right: 2px;
            }
        }

        @media (max-width: $OldDesktopWidth) {
            min-width: 20%;
            padding: 8px;
            padding-right: 0px;
        }        

        @media (max-width: $BigMobileWidth) {
            display: flex;
            flex-direction: row;
            width: 80%;
        }
    }

    &__SearchSubmitButton {
        @include flex-justify(start);
        width: 20%;
        min-height: 50px;
        min-width: 100px;

        button {
            @include disable-borders;
            @include width-height(100%, 50%);
            padding: 15px;
            border-radius: 12px;
            background-color: $CoreDarkCyan;
            color: white;
        }

        @media (max-width: $BigMobileWidth) {
            width: 80%;
            min-width: 100px;
        }
    }

    @media (max-width: $BigDesktopWidth) {
        width: 80%;
    }

    @media (max-width: $OldDesktopWidth) {
        width: 70%;
    }

    @media (max-width: $BigMobileWidth) {
        display: flex;
        flex-direction: column;
        height: 30%;
        width: 100%;
    }
}
</style>