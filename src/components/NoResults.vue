<template>
    <div class="NoResultContainer" :class="{ dark: darkMode.getDarkModeState }">
        <p class="NoResultContainer__MainText">No results</p>
    </div>
</template>

<script>
import { useDarkModeStore } from '@/stores/DarkModeStore'

export default {
    computed: {
        darkMode() {
            return useDarkModeStore()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/Styles/General/variables.scss";

.NoResultContainer {
    @include flex-center;
    @include flex-direction(column);
    max-width: 200px;
    max-height: 200px;

    &__MainText {
        font-size: 24px;
        font-family: $CoreFontFamily;
    }

    &.dark {
        color: $DarkModeFontColor;
    }
}
</style>