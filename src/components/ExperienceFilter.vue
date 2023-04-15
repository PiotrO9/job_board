<template>
  <div class="ExperienceFilter" :class="{ dark: darkMode.getDarkModeState }">
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
import { useDarkModeStore } from '@/stores/DarkModeStore'
import { useFilterStore } from '@/stores/FilterStore';

export default {
    components: {
        ExperienceLevel
    },
    data() {
        return {
            ExperienceLevels: [],
            ExperienceNames: ['Trainee', 'Junior', 'Mid', 'Senior', 'Expert']
        }
    },
    computed: {
        darkMode() {
            return useDarkModeStore()
        },
        filterStore() {
            return useFilterStore()
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

            this.filterStore.ChangeExperienceCriterias(this.ExperienceLevels)
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