<template>
  <header :class="{ dark: darkMode.getDarkModeState }">
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
import UserDatas from "@/components/user.components/UserDatas.vue";
import { useDarkModeStore } from "@/stores/DarkModeStore";
import { useFilterStore } from "@/stores/FilterStore";

export default {
  computed: {
        darkMode() {
            return useDarkModeStore()
        },
        filterStore() {
          return useFilterStore()
        }
  },
  components: {
    SearchFields,
    UserDatas
  },
  methods: {
    ShowFiltersInMobileMode() {
      this.filterStore.SetterFiltersInMobileMode(true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

header {
    @include width-height(100%, 8%);
    display: none;
    font-family: $CoreFontFamily;

    #LogoContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: 20px;
            margin-left: 35px;

            .secondPartOfLogo {
                color: rgb(56, 127, 237);
            }
        }

        svg {
            display: none;
            margin-right: 12vw;
            height: 30px;
        }

        @media (max-width: $BigMobileWidth) {
            height: 30%;

            svg {
                display: flex;
            }
        }
    }

    .UserDatasContainer {
        height: 100%;

        @media (max-width: $BigMobileWidth) {
            height: 20%;
        }
    }

    @media (max-width: $BigMobileWidth) {
        display: none;
        height: 50%;
        // display: flex;
        flex-direction: column;
    }

    &.HideHeader {
        display: none;
    }

    &.ShowHeader {
        display: grid;
        grid-template-columns: 3fr 7fr 2fr;
    
        .UserDatasContainer {
            @media (max-width: $BigMobileWidth) {
                height: 30%;
                margin-top: 5vh;
            }
        }
    
        @media (max-width: $BigMobileWidth) {
            height: 40%;
            display: flex;
            flex-direction: column;
        }
    }

    &.dark {
        background-color: $DarkModeBackground;
        color: white;
    }
}
</style>