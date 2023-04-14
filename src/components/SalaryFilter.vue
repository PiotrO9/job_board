<template>
  <article class="SalaryFilter" :class="{ dark: darkMode.getDarkModeState }">
    <p>Salary
        <fa icon="fa-xmark" @click="HideMobileFiters"/>
    </p>
    <div class="SalaryFilter__NumberInputs">
        <span>Min </span>
        <input type="number" min="0" max="48000" value="0"
            v-on:change="InputMinValue" id="MinSalaryNumberInput">
        <span> -       Max </span>
        <input type="number" min="3000" max="50000" value="50000" 
            v-on:change="InputMaxValue" id="MaxSalaryNumberInput">
    </div>
  </article>
</template>

<script>
import { useDarkModeStore } from '@/stores/DarkModeStore'
import { useFilterStore } from '@/stores/FilterStore'

export default {
    props: ['minSalary'],
    computed: {
        darkMode() {
            return useDarkModeStore()
        },
        filterStore() {
            return useFilterStore()
        }
    },
    methods: {
        InputMinValue() {
            const MinSalaryInput = document.getElementById("MinSalaryNumberInput")
            const MaxSalaryInput = document.getElementById("MaxSalaryNumberInput")

            if(MinSalaryInput.value >= MaxSalaryInput.value) {
                MinSalaryInput.value = (MaxSalaryInput.value - 1000)
            }

            this.filterStore.ChangeMinSalary(MinSalaryInput.value)
        },
        InputMaxValue() {
            const MinSalaryInput = document.getElementById("MinSalaryNumberInput")
            const MaxSalaryInput = document.getElementById("MaxSalaryNumberInput")
            
            if(MaxSalaryInput.value > 50000) {
                MaxSalaryInput.value = 50000
            }

            if(MaxSalaryInput.value <= MinSalaryInput.value) {
                MaxSalaryInput.value = Number(MinSalaryInput.value) + 1000
            }

            this.filterStore.ChangeMaxSalary(MaxSalaryInput.value)
        },
        HideMobileFiters() {
            this.filterStore.SetterFiltersInMobileMode(false)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.SalaryFilter {
    @include width-height(100%, 10%);
    padding: 14px;

    p {
        position: relative;
        margin-bottom: 8px;
        font-size: 24px;
        font-family: $CoreFontFamily;

        svg {
            position: absolute;
            right: 0;
            display: none;

            @media (max-width: $BigMobileWidth) {
                position: absolute;
                right: 0;
                display: inline;
            }
        }

        @media (max-width: $OldDesktopWidth) {
            font-size: 20px;
        }
    }

    &__NumberInputs {
        @include flex-center;
        margin-top: 20px;

        span {
            margin-right: 14px;
            font-size: 19px;
            font-family: $CoreFontFamily;

            &:nth-child(3) {
                margin-left: 16px;
            }

            @media (max-width: $OldDesktopWidth) {
                font-size: 15px;
            }

            @media (max-width: $SmallDesktopWidth) {
                font-size: 14px;
            }
        }

        input[type="number"] {
            width: 25%;
            height: 30px;
            text-align: center;
            border: 2px solid black;
            border-radius: 5px;
            font-size: 100%;
            font-family: $CoreFontFamily;

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            @media (max-width: $OldDesktopWidth) {
                font-size: 80%;
            }
        }
    }

    &.dark {
        p {
            color: $DarkModeFontColor;
        }
    
        span {
            color: $DarkModeFontColor;
        }
    }
}
</style>