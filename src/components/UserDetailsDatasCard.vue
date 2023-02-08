<template>  
    <div v-if="userDatas != null" class="UserDetailsDatasCard">
        <img :src=userDatas.picture.large>
        <div>
            <p>{{ userDatas.name.first }} {{ userDatas.name.last }}</p>
            <p>{{ userDatas.location.country }}, {{ userDatas.location.city }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userDatas: null
        }
    },
    props: ['imgSource', 'name', 'location'],
    mounted() {
        this.userDatas = JSON.parse(localStorage.getItem('userDatas'))
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/UserDetailsDatasCardStyles.scss";
</style>