<template>
  <div class="ExperienceLevel" :class="{ dark: darkMode }">
    <fa v-show="isChecked" icon="fa-check"/>
    <input type="checkbox" v-on:change="changeCheckState">
    <p>{{ level }}</p>
  </div>
</template>

<script>
import { state } from '../main.js'

export default {
    props: ['level'],
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
            this.$emit("changeState", { state: this.isChecked, Level: this.$props.level })
        }
    }

}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/ExperienceLevelStyles.scss";
</style>