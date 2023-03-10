<template>
  <div v-if="UserDatas != undefined" 
    class="UserDatas" 
    :class="{ dark: darkMode }"
    @click="ArrowClick">
        <img class="UserDatas__PictureData" 
        :src=UserDatas.picture.thumbnail 
        alt="Profile picture">
        <p class="UserDatas__NameData">{{ UserDatas.name.first }}</p>
        <img id="UserDataDownArrow" class="down-arrow" src="../assets/images/down-arrow.png"> 
        <transition appear v-if="ModalUserDataVisibility" name="ModalUserData">
            <div class="modalUserDatas">
                <div class="modalUserDatas__GeneralDatas">
                    <img :src=UserDatas.picture.thumbnail alt="Profile picture">
                    <div class="modalUserDatas__GeneralDatas-BasicDatas">
                        <p>{{ UserDatas.name.first }}  {{ UserDatas.name.second }}</p>
                        <p>
                            <fa icon="fa-location-dot"/>
                            <span id="LocationDatas">{{ UserDatas.location.country }}, {{ UserDatas.location.city }}</span>
                        </p>
                    </div>
                </div>
                <hr>
                <div class="modalUserDatas__StatisticsFields">
                    <div class="modalUserDatas__StatisticsFields-PostField">
                        <p>Posts</p>
                        <p><fa icon="fa-pen-to-square"/>{{ Statistics.posts }}</p>
                    </div>
                    <div class="modalUserDatas__StatisticsFields-FollowersField">
                        <p>Followers</p>
                        <p><fa icon="fa-people-group"/>{{ Statistics.followers }}</p>
                    </div>
                    <div class="modalUserDatas__StatisticsFields-FollowingField">
                        <p>Following</p>
                        <p><fa icon="fa-person-circle-check"/>{{ Statistics.following }}</p>
                    </div>
                </div>
                <button id="UserDetailsRedirecting" @click="RedirectToUserDetails">View Full profile</button>
            </div>
        </transition>
  </div>
</template>

<script>
import FetchRandomUserApi from '@/utils/ApiUtils/FetchRandomUserApi';
import SetClassNameForUserLocationDatas from '@/utils/SetClassNameForUserLocationDatas.js';
import GenerateRandomStatisticNumber from '@/utils/GenerateRandomStatisticNumber.js';
import { state } from '../main.js'

export default {
    data() {
        return {
            Name: "",
            PictureURL: "",
            IsArrowDirectionDown: true,
            ModalUserDataVisibility: false,
            UserDatas: undefined,
            Statistics: {
                posts: 0,
                followers: 0,
                following: 0
            }
        }
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    mounted() {
        FetchRandomUserApi()
        .then((res) => {
            this.UserDatas = res
        })
    },
    methods: {
        ArrowClick() {
            const imageWithArrow = document.getElementById("UserDataDownArrow")
            const UserDatas = document.querySelector(".UserDatas");

            if(this.IsArrowDirectionDown) {
                imageWithArrow.classList.remove("rotateArrowDown")
                UserDatas.classList.remove("moveUserDataToLeft")
                imageWithArrow.classList.add("rotateArrowUp")
                UserDatas.classList.add("moveUserDataToRight")
            }
            else {
                imageWithArrow.classList.remove("rotateArrowUp")
                UserDatas.classList.remove("moveUserDataToRight")
                imageWithArrow.classList.add("rotateArrowDown")
                UserDatas.classList.add("moveUserDataToLeft")
            }
            this.IsArrowDirectionDown = !this.IsArrowDirectionDown
            this.ModalUserDataVisibility = !this.ModalUserDataVisibility
        },
        RedirectToUserDetails() {
            localStorage.setItem('userDatas', JSON.stringify(this.UserDatas))
            localStorage.setItem('statistics', JSON.stringify(this.Statistics))
            this.$router.push({ name: 'UserDetailsView' })
        }
    },
    watch: {
        ModalUserDataVisibility() {
            setTimeout(() => {
                if(this.ModalUserDataVisibility) {
                    const LocationDatas = document.getElementById("LocationDatas")
                    let className = SetClassNameForUserLocationDatas(this.UserDatas)
                    if(className != "") {
                        LocationDatas.classList.add(className)
                    }
                }

                this.Statistics = {
                    posts: GenerateRandomStatisticNumber(10, 150),
                    followers: GenerateRandomStatisticNumber(10, 1000),
                    following: GenerateRandomStatisticNumber(10, 500)
                }
            }, 200)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/UserDatasStyles.scss";
</style>