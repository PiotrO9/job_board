<template>
  <div class="ContractType" :class="{ dark: darkMode }">
    <fa v-show="isChecked" icon="fa-check"/>
    <input type="checkbox" v-on:change="changeCheckState">
    <p>{{ contract }}</p>
  </div>
</template>

<script>
import { state } from '../main.js'

export default {
    props: ['contract'],
    data() {
        return {
            isChecked: false
        }
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    methods: {
        changeCheckState() {
            this.isChecked = !this.isChecked
            this.$emit("changeState", { state: this.isChecked, Contract: this.$props.contract })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/ContractTypeStyles.scss";
</style>