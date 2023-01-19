<template>
  <div class="OfferDetailView">
    <h1>{{ maintext }}</h1>
    <fa icon="fa-hippo"/>
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
@import "../assets/Styles/ViewsStyles/OfferDetailsViewStyles.scss";
</style>