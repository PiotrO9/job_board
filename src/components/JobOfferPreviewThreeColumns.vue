<template>
  <div class="JobOfferPreviewThreeColumns">
    <div class="mainDatas">
    <img class="CompanyLogo" :src=datas.logoUrl :width=datas.width :height=datas.height>
    <p>{{ datas.jobOfferName }}</p>
    </div>
    <div class="detailDatas">
        <fa icon="fa-building"/>
        <p>{{ datas.companyName }}</p>
        <fa icon="fa-location-dot"/>
        <p>{{ datas.jobCity }}</p>
        <fa icon="fa-money-bill-wave"/>
        <p>{{ datas.salary }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['datas']
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/JobOfferPreviewThreeColumnsStyles.scss";
</style>