<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from "./components/Header.vue"

export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
@import "./assets/Styles/General/variables.scss";

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html, body, #app {
    @include width-height-val(100%);
    overflow: hidden;
}
</style>