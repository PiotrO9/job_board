<template>
  <div class="ExperienceFilter">
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
    methods: {
        ChangeExperienceLevels(data) {
            if(data.state) {
                this.ExperienceLevels.push(data.Level)
            }
            else {
                this.ExperienceLevels = this.ExperienceLevels
                                        .filter(el => el !== data.Level)
            }
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/ExperienceFilterStyles.scss";
</style>