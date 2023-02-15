<template>
  <article class="SalaryFilter">
    <p>Salary</p>
    <div class="SalaryNumberInputs">
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
import { state } from '../main.js'

export default {
    props: ['minSalary'],
    methods: {
        InputMinValue() {
            const MinSalaryInput = document.getElementById("MinSalaryNumberInput")
            const MaxSalaryInput = document.getElementById("MaxSalaryNumberInput")

            if(MinSalaryInput.value >= MaxSalaryInput.value) {
                MinSalaryInput.value = (MaxSalaryInput.value - 1000)
            }

            state.filteringCriterias.ChangeMinSalary(MinSalaryInput.value)
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

            state.filteringCriterias.ChangeMaxSalary(MaxSalaryInput.value)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/SalaryFilterStyles.scss";
</style>