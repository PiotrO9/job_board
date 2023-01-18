<template>
  <div v-if="UserDatas != undefined" class="UserDatas" @click="ArrowClick">
    <img class="PictureData" :src=UserDatas.picture.thumbnail alt="Profile picture">
    <p class="NameData">{{ UserDatas.name.first }}</p>
    <img id="UserDataDownArrow" class="down-arrow" src="../assets/images/down-arrow.png"> 
    <transition appear v-if="ModalUserDataVisibility" name="ModalUserData">
        <div class="modalUserDatas">
            <div class="GeneralDatas">
                <img :src=UserDatas.picture.thumbnail alt="Profile picture">
                <div class="BasicDatas">
                    <p>{{ UserDatas.name.first }}  {{ UserDatas.name.second }}</p>
                    <p>
                        <fa icon="fa-location-dot"/>
                        <span id="LocationDatas">{{ UserDatas.location.country }}, {{ UserDatas.location.city }}</span>
                    </p>
                </div>
            </div>
            <hr>
            <div class="StatisticsFields">
                <div class="PostField">
                    <p>Posts</p>

                </div>
                <div class="FollowersField">

                </div>
                <div class="FollowingField">

                </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
import FetchRandomUserApi from '@/utils/ApiUtils/FetchRandomUserApi';

export default {
    data() {
        return {
            Name: "",
            PictureURL: "",
            IsArrowDirectionDown: true,
            ModalUserDataVisibility: false,
            UserDatas: undefined
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

            
        }
    },
    watch: {
        ModalUserDataVisibility() {
            setTimeout(() => {
                if(this.ModalUserDataVisibility) {
                    let CountryLength = this.UserDatas.location.country.length
                    let CityLength = this.UserDatas.location.city.length
                    
                    if(CountryLength + CityLength > 20) {
                        const LocationDatas = document.getElementById("LocationDatas")
                        LocationDatas.classList.add("SmallerLocationFont")
                    }
                }
            }, 1000)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/UserDatasStyles.scss";
</style>