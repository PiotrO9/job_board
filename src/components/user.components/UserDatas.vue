<template>
  <div v-if="UserDatas != undefined" 
    class="UserDatas" 
    :class="{ dark: darkMode.getDarkModeState }"
    @click="ArrowClick">
        <img class="UserDatas__PictureData" 
        :src=UserDatas.picture.thumbnail 
        alt="Profile picture">
        <p class="UserDatas__NameData">{{ UserDatas.name.first }}</p>
        <img id="UserDataDownArrow" class="down-arrow" src="../../assets/images/down-arrow.png"> 
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
import { useDarkModeStore } from '@/stores/DarkModeStore'

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
            return useDarkModeStore()
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
    mounted() {
        FetchRandomUserApi()
        .then((res) => {
            this.UserDatas = res
        })
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";
@import "../../assets/Styles/Animations/UserDatasAnimations.scss";

.UserDatas {
    @include flex-direction(row);
    @include flex-justify(start);
    height: 100%;
    gap: 5px;
    position: relative;
    cursor: pointer;

    &__PictureData {
        height: 40%;
        border-radius: 50%;
    }

    p {
        font-family: $SmallComponentsFontFamily;
        font-weight: bold;
    }

    .down-arrow {
        width: 26px;
        height: 12px;
    }

    .modalUserDatas {
        @include flex-direction(column);
        @include width-height(110%, 300%);
        align-items: center;
        position: absolute;
        right: 45%;
        top: 110%;
        min-height: 200px;
        min-width: 250px;
        background-color: white;
        border-radius: 15px;

        &__GeneralDatas {
            @include flex-direction(row);
            justify-content: space-around;
            width: 100%;
            padding: 10px;

            &-BasicDatas {
                @include flex-direction(column);
                margin-right: 5px;

                &:nth-child(2) {

                    svg {
                        margin-right: 2px;
                    }

                    .SmallerLocationFont {
                        font-size: 12px;
                    }

                    .SmallestLocationFont {
                        font-size: 9px;
                    }
                }
            }

            img {
                border-radius: 50%;
            }
        }

        hr {
            width: 90%;
            margin: 5px 4px 5px 4px;
        }

        &__StatisticsFields {
            @include flex-direction(row);
            width: 100%;
            justify-content: space-between;
            padding: 4px;

            @media (max-width: $BigMobileWidth) {
                gap: 20px;
            }
        }

        button {
            @include disable-borders;
            @include width-height(40%, 15%);
            max-width: 120px;
            min-height: 50px;
            margin-top: 15px;
            padding: 5px;
            color: white;
            font-family: $CoreFontFamily;
            background-color: $CoreDarkCyan;
            border-radius: 12px;
            cursor: pointer;

            a {
                @include width-height-val(100%);
                text-decoration: none;
                color: inherit;
                cursor: pointer;
            }
        }

        @media (max-width: $BigMobileWidth) {
            @include width-height(100%, 200%);
            top: 30%;
            left: auto;
            right: auto;
        }
    }

    @media (max-width: $BigMobileWidth) {
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: $BigMobileWidth) and (max-height: $BigMobileHeight) {
        height: 8rem;
    }

    &.dark {

        .modalUserDatas {
            background-color: $DarkModeBackground;
        }
    }
}

.rotateArrowUp {
    animation: rotateArrowUpAnimation 1s forwards;
}

.rotateArrowDown {
    animation: rotateArrowDownAnimation 1s forwards;
}

.moveUserDataToRight {
    animation: MoveDataToRightAnimation 1s forwards;

    @media (max-width: $BigMobileWidth) {
        animation: none;
    }
}

.moveUserDataToLeft {
    animation: MoveDataToLeftAnimation 1s forwards;

    @media (max-width: $BigMobileWidth) {
        animation: none;
    }
}

.ModalUserData-enter-to {
    animation: DisplayModalUserDatas 2s forwards;
}
</style>