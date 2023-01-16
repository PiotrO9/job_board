<template>
  <div class="DetailView">
    <h1>{{ maintext }}</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            maintext: ""
        }
    },
    mounted() {
        this.maintext = this.$route.params.id
    }

}
</script>

<style lang="scss">
@import "../assets/Styles/ViewsStyles/DetailViewStyles.scss";
</style>