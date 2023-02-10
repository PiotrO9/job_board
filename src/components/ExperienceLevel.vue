<template>
  <div class="ExperienceLevel"> 
    <fa v-show="isChecked" icon="fa-check"/>
    <input type="checkbox" v-on:change="changeCheckState">
    <p>{{ level }}</p>
  </div>
</template>

<script>
export default {
    props: ['level'],
    data() {
        return {
            isChecked: false
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