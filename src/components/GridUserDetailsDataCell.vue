<template>
  <div class="GridUserDetailsDataCell">
    <p>{{ label }}</p>
    <div>
        <span>{{ data }}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'data']
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/GridUserDetailsDataCellStyles.scss";
</style>