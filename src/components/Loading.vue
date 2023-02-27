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

<style lang="scss">
@import "../assets/Styles/ComponentStyles/LoadingStyles.scss";
</style>