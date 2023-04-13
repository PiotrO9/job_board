<template>
  <div class="ContractType" :class="{ dark: darkMode }">
    <fa v-show="isChecked" icon="fa-check"/>
    <input type="checkbox" v-on:change="changeCheckState">
    <p>{{ contract }}</p>
  </div>
</template>

<script>
import { state } from '../../main.js'

export default {
    props: ['contract'],
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
            this.$emit("changeState", { state: this.isChecked, Contract: this.$props.contract })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/Styles/General/variables.scss";

.ContractType {
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