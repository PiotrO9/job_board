<template>
  <div class="UserDatas">
    <img class="PictureData" :src=PictureURL>
    <p class="NameData">{{ Name }}</p>
    <img class="down-arrow" src="../assets/images/down-arrow.png">

  </div>
</template>

<script>
import FetchRandomUserApi from '@/utils/ApiUtils/FetchRandomUserApi';

export default {
    data() {
        return {
            Name: "",
            PictureURL: ""
        }
    },
    mounted() {
        FetchRandomUserApi()
        .then((res) => {
            this.Name = res.name.first
            this.PictureURL = res.picture.thumbnail
            console.log(res)
        })
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/UserDatasStyles.scss";
</style>