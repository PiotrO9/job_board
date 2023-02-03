<template>
  <div class="Loading">
    <img src="../assets/images/loading.png" alt="Loading circle">
    <p id="LoadingText">Loading</p>
  </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
export default {
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
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/LoadingStyles.scss";
</style>