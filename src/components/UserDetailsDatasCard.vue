<template>  
    <div v-if="userDatas != null" :class="{ dark: darkMode }" class="UserDetailsDatasCard">
        <img :src=userDatas.picture.large>
        <div>
            <p>{{ userDatas.name.first }} {{ userDatas.name.last }}</p>
            <p>{{ userDatas.location.country }}, {{ userDatas.location.city }}</p>
        </div>
        <div class="ThemeModeContainer">
            <div class="ThemeModeSwitch" @click="SwitchThemes">
                <div v-if="darkMode" class="LightThemeMode">
                    <p>Light mode </p>
                    <fa icon="fa-sun"/>
                </div>
                <div v-else class="DarkThemeMode">
                    <p>Dark mode</p>
                    <fa icon="fa-moon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { state } from '../main.js'

export default {
    data() {
        return {
            userDatas: null
        }
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    props: ['imgSource', 'name', 'location'],
    mounted() {
        this.userDatas = JSON.parse(localStorage.getItem('userDatas'))
    },
    methods: {
        SwitchThemes() {
            state.toggleDarkMode()
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/UserDetailsDatasCardStyles.scss";
</style>