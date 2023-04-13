<template>
  <aside :class="{ dark: darkMode }">
    <section>
        <SalaryFilter :minSalary=minSal />
        <ExperienceFilter />
        <ContractTypeFilter />
    </section>
    <div class="SearchConfirm">
      <button id="SearchFiltersConfirm" @click="SearchingConfirming">
      Search
      </button>
    </div>
  </aside>
</template>

<script>
import SalaryFilter from "../SalaryFilter.vue"
import ExperienceFilter from "../ExperienceFilter.vue"
import ContractTypeFilter from "../contract.components/ContractTypeFilter.vue"
import { state } from '../../main.js'

export default {
  data() {
    return {
      minSal: 100,
      maxSalary: 50000
    }
  },
  computed: {
        darkMode() {
            return state.darkMode.value
        },
        filtersInMobileMode() {
            return state.filtersInMobileMode.value
        }
  },
  components: {
    SalaryFilter,
    ExperienceFilter,
    ContractTypeFilter
  },
  watch: {
    filtersInMobileMode() {
      const aside = document.getElementsByTagName("aside")[0]
      if(this.filtersInMobileMode) {
        aside.classList.add("ShowMobileFilters")
      }
      else {
        aside.classList.remove("ShowMobileFilters")
      }
    }
  },
  methods: {
    SearchingConfirming() {
      state.toggleReadiness()
    },
    SetTwoColumnsDisplayMode() {
      this.DisableActiveDisplayModes()
      const TwoColumnsDisplayMode = document.getElementById("TwoColumnsDisplayMode").classList.add("ActiveDisplayMode")
      state.setDisplayMode(false)
    },
    SetThreeColumnsDisplayMode() {
      this.DisableActiveDisplayModes()
      const ThreeColumnsDisplayMode = document.getElementById("ThreeColumnsDisplayMode").classList.add("ActiveDisplayMode")
      state.setDisplayMode(true)
    },
    DisableActiveDisplayModes() {
      const TwoColumnsDisplayMode = document.getElementById("TwoColumnsDisplayMode")
      const ThreeColumnsDisplayMode = document.getElementById("ThreeColumnsDisplayMode")
      
      TwoColumnsDisplayMode.classList.remove("ActiveDisplayMode")
      ThreeColumnsDisplayMode.classList.remove("ActiveDisplayMode")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";

aside {
    @include width-height-val(100%);

    .DisplayStrategyMode {
        @include flex-center;
        @include width-height(100%, 3%);

        p {
            margin-right: 20px;
            font-size: 24px;
            font-family: $CoreFontFamily;
        }

        svg {
            height: 100%;
            margin-right: 10px;
            cursor: pointer;
        }

        svg.ActiveDisplayMode {
            color: $CoreDarkCyan;
        }
    }

    .SearchConfirm {
        @include flex-center;

        button {
            @include disable-borders;
            @include width-height(50%, 50%);
            min-height: 45px;
            margin: auto;
            background-color: $CoreDarkCyan;
            color: white;
            border-radius: 12px;
            font-family: $SmallComponentsFontFamily;
            cursor: pointer;
        }
    }
    
    @media (max-width: $BigMobileWidth) {
        display: none;
    }

    &.ShowMobileFilters {
        @media (max-width: $BigMobileWidth) {
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            background-color: white;
            overflow: scroll;
        }
    }

    &.dark {
        background-color: $DarkModeBackground;

        h1 {
            color: white;
        }
    }
}
</style>