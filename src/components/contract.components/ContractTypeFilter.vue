<template>
  <div class="ContractTypeFilter" :class="{ dark: darkMode.getDarkModeState }">
    <p>Contract type</p>
    <div class="ContractTypeFilter__Types">
        <ContractType v-for="ContractName in ContractTypeNames" 
            :contract=ContractName 
            :key=ContractName
            @changeState="ChangeContractNames"/>
    </div>
  </div>
</template>

<script>
import ContractType from './ContractType.vue';
import { useDarkModeStore } from '@/stores/DarkModeStore'
import { useFilterStore } from '@/stores/FilterStore';

export default {
    components: {
        ContractType
    },
    data() {
        return {
            ContractTypes: [],
            ContractTypeNames: ['permanent', 'b2b', 'intern'],
        }
    },
    computed: {
        darkMode() {
            return useDarkModeStore()
        },
        filterState() {
            return useFilterStore()
        }
    },
    methods: {
        ChangeContractNames(data) {
            if(data.state) {
                this.ContractTypes.push(data.Contract)
            }
            else {
                this.ContractTypes = this.ContractTypes
                                        .filter(el => el !== data.Contract)
            }

            this.filterState.ChangeContractTypeCriterias(this.ContractTypes)
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/Styles/General/variables.scss";

.ContractTypeFilter {
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