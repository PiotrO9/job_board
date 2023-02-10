<template>
  <div class="ContractTypeFilter">
    <p>Contract type</p>
    <div class="ContractTypes">
        <ContractType v-for="ContractName in ContractTypeNames" 
            :contract=ContractName 
            v-bind:key=ContractName
            @changeState="ChangeContractNames"/>
    </div>
  </div>
</template>

<script>
import ContractType from './ContractType.vue';

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
    methods: {
        ChangeContractNames(data) {
            if(data.state) {
                this.ContractTypes.push(data.Contract)
            }
            else {
                this.ContractTypes = this.ContractTypes
                                        .filter(el => el !== data.Contract)
            }

            console.log(this.ContractTypes)
        }
    }
}
</script>

<style lang="scss">
@import "../assets/Styles/ComponentStyles/ContractTypeFilterStyles.scss";
</style>