<template>
  <div :class="{ dark: darkMode }" class="Loading">
    <img src="../assets/images/loading.png" alt="Loading circle">
    <p id="LoadingText">Loading...</p>
  </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import { state } from '../main.js'

export default {
  computed: {
        darkMode() {
            return state.darkMode.value
        },
        filtersInMobileMode() {
          return state.filtersInMobileMode.value
        }
    },
    mounted() {
        const TypeWriterText = document.getElementById("LoadingText")
        const delayTime = 350
        var typeWriter = new Typewriter(TypeWriterText, {
            loop: true,
            autostart: true,
        })

        typeWriter
        .deleteChars(3)
        .typeString("Loading")
        .pauseFor(delayTime)
        .typeString(".")
        .pauseFor(delayTime)
        .typeString(".")
        .pauseFor(delayTime)
        .typeString(".")
        .pauseFor(delayTime)
        .start()
    },
    watch: {
    filtersInMobileMode() {
      const loading = document.querySelector(".Loading")
      if(this.filtersInMobileMode) {
        loading.classList.add("HideLoading")
      }
      else {
        loading.classList.remove("HideLoading")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.Loading {
    @include flex-center;
    @include flex-direction(column);
    max-width: 200px;
    max-height: 200px;

    img {
        @include width-height-val(80px);
        animation: rotateLoadingAnimation 9s linear infinite;
    }

    p {
        font-size: 40px;
        font-family: $CoreFontFamily;
    }

    &.dark {

        p {
            color: white;
        }
    }

    &.HideLoading {
        display: none;
    }
}

@keyframes rotateLoadingAnimation {
    100% {
        transform: rotate(360deg);
    }
}
</style>