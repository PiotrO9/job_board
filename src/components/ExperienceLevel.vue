<template>
  <div class="ExperienceLevel" :class="{ dark: darkMode }">
    <fa v-show="isChecked" icon="fa-check"/>
    <input type="checkbox" v-on:change="changeCheckState">
    <p>{{ level }}</p>
  </div>
</template>

<script>
import { state } from '../main.js'

export default {
    props: ['level'],
    data() {
        return {
            isChecked: false
        }
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    methods: {
        changeCheckState() {
            this.isChecked = !this.isChecked
            this.$emit("changeState", { state: this.isChecked, Level: this.$props.level })
        }
    }

}
</script>

<style lang="scss">
@import "../assets/Styles/General/variables.scss";

.ExperienceLevel {
    display: flex;
    position: relative;
    flex-direction: row;
    gap: 10px;
    margin: 25px 10px 20px 40px;
    
    svg {
        position: absolute;
        top: 5px;
        left: 7px;
        pointer-events: none;
        color: white;
    }

    input {
        min-width: 30px;
        min-width: 30px;
        border: 2px solid black;
        border-radius: 15%;
        -webkit-appearance: none;

        &:checked {
            background-color: $CoreDarkCyan;
        }
    }

    &.dark {
        
        input {
            border: 2px solid $DarkModeFontColor;
        }
    }
}
</style>