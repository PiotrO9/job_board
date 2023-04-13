<template>  
    <div v-if="userDatas != null" 
        :class="{ dark: darkMode }" 
        class="UserDetailsDatasCard">
            <img :src=userDatas.picture.large>
            <div>
                <p>{{ userDatas.name.first }} {{ userDatas.name.last }}</p>
                <p>{{ userDatas.location.country }}, {{ userDatas.location.city }}</p>
            </div>
            <div class="UserDetailsDatasCard__ThemeModeContainer">
                <div class="UserDetailsDatasCard__ThemeModeContainer-switch" @click="SwitchThemes">
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
import { state } from '../../main.js'

export default {
    props: ['imgSource', 'name', 'location'],
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

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";

.UserDetailsDatasCard {
    display: flex;
    flex-direction: row;
    font-family: $SmallComponentsFontFamily;

    img {
        max-width: 200px;
        max-height: 200px;
        border-radius: 50%;
        margin-right: 20px;

        @media (max-width: $BigMobileWidth) {
            max-width: 90px;
            max-height: 90px;
        }
    }

    div {
        @include flex-direction(column);
        @include flex-justify(center);
        align-items: start;

        p {
            &:nth-child(1) {
                font-size: 30px;

                @media (max-width: $SmallDesktopWidth) {
                    font-size: 22px;
                }
            }

            &:nth-child(2) {
                font-size: 20px;

                @media (max-width: $SmallDesktopWidth) {
                    font-size: 14px;
                }
            }
        }
    }

    &__ThemeModeContainer {
        @include flex-center;
        width: 70%;
        
        &-switch {
            cursor: pointer;
            margin-left: 10px;

            .LightThemeMode, .DarkThemeMode {
                @include flex-center;
                @include flex-direction(row);

                p {
                    @media (max-width: $BigMobileWidth) {
                       font-size: 18px;
                    }
                }

                svg {
                    margin-left: 15px;
                }
            }
        }
    }

    @media (max-width: $BigMobileWidth) {
        margin-left: 4%;
    }

    &.dark {
        background-color: $DarkModeBackground;
        color: white;
    }
}
</style>