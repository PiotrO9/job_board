<template>
  <div class="ExperienceFilter" :class="{ dark: darkMode }">
    <p>Experience</p>
    <div class="ExperienceLevels">
        <ExperienceLevel v-for="ExpName in ExperienceNames" 
            :level=ExpName 
            v-bind:key="ExpName" 
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
@import "../assets/Styles/ComponentStyles/ExperienceFilterStyles.scss";
</style>