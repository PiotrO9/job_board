<template>
  <div class="ContractType">
    <fa v-show="isChecked" icon="fa-check"/>
    <input type="checkbox" v-on:change="changeCheckState">
    <p>{{ contract }}</p>
  </div>
</template>

<script>
export default {
    props: ['contract'],
    data() {
        return {
            isChecked: false
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