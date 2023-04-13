<template>
  <div class="ExperienceFilter" :class="{ dark: darkMode }">
    <p>Experience</p>
    <div class="ExperienceFilter__Levels">
        <ExperienceLevel v-for="ExpName in ExperienceNames" 
            :level=ExpName 
            :key="ExpName" 
            @changeState="ChangeExperienceLevels"/>
    </div>
  </div>
</template>

<script>
import ExperienceLevel from './ExperienceLevel.vue';
import { state } from '../main.js'

export default {
    data() {
        return {
            ExperienceLevels: [],
            ExperienceNames: ['Trainee', 'Junior', 'Mid', 'Senior', 'Expert']
        }
    },
    components: {
        ExperienceLevel
    },
    computed: {
        darkMode() {
            return state.darkMode.value
        }
    },
    methods: {
        ChangeExperienceLevels(data) {
            if(data.state) {
                this.ExperienceLevels.push(data.Level)
            }
            else {
                this.ExperienceLevels = this.ExperienceLevels
                                        .filter(el => el !== data.Level)
            }

            state.filteringCriterias.value.ChangeExperienceCriterias(this.ExperienceLevels)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/General/variables.scss";

.ExperienceFilter {
    padding: 20px;
    font-family: $CoreFontFamily;

    p {
        font-size: 22px;

        @media (max-width: $OldDesktopWidth) {
            font-size: 20px;
        }
    }

    &.dark {
        
        p {
            color: $DarkModeFontColor;
        }
    }
}
</style>