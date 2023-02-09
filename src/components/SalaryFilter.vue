<template>
  <article class="SalaryFilter">
    <p>Salary</p>
    <div class="SalaryNumberInputs">
        <span>Min </span>
        <input type="number" min="3000" max="49000" value="3000" id="MinSalaryNumberInput" readonly>
        <span> -       Max </span>
        <input type="number" min="3100" max="50000" value="50000" id="MaxSalaryNumberInput" readonly>
    </div>
    <div class="SalarySliderInputs">
        <input type="range" min="3000" max="49900" value="3000" 
            id="MinSalaryRangeInput">
        <input type="range" min="3100" max="50000" value="50000" 
            id="MaxSalaryRangeInput">
    </div>
  </article>
</template>

<script>
export default {
    mounted() {
        const MinSalaryNumberInput = document.getElementById("MinSalaryNumberInput")
        const MaxSalaryNumberInput = document.getElementById("MaxSalaryNumberInput")
        const MinSalaryRangeInput = document.getElementById("MinSalaryRangeInput")
        const MaxSalaryRangeInput = document.getElementById("MaxSalaryRangeInput")

        MinSalaryRangeInput.addEventListener("input", function() {

        })

        MaxSalaryRangeInput.addEventListener("input", function() {
            
        })
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/SalaryFilterStyles.scss";
</style>