<template>
  <div class="ContractTypeFilter" :class="{ dark: darkMode }">
    <p>Contract type</p>
    <div class="ContractTypeFilter__Types">
        <ContractType v-for="ContractName in ContractTypeNames" 
            :contract=ContractName 
            v-bind:key=ContractName
            @changeState="ChangeContractNames"/>
    </div>
  </div>
</template>

<script>
import ContractType from './ContractType.vue';
import { state } from '../main.js'

export default {
    data() {
        return {
            ContractTypes: [],
            ContractTypeNames: ['permanent', 'b2b', 'intern'],
        }
    },
    components: {
        ContractType
    },
    computed: {
        darkMode() {
            return state.darkMode.value
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

            state.filteringCriterias.value.ChangeContractTypeCriterias(this.ContractTypes)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/ContractTypeFilterStyles.scss";
</style>