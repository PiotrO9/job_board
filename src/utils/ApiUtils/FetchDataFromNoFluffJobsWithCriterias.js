import { useFilterStore } from '@/stores/FilterStore';

async function FetchDataFromNoFluffJobsWithCriterias() {
    let filteringCriterias = useFilterStore().getFilteringCriterias

    return await fetch('http://localhost:3000/queryWithCriterias', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
            Salary: {
                min: filteringCriterias.Salary.minSalary,
                max: filteringCriterias.Salary.maxSalary
            },
            Criterias: {
                Experience: filteringCriterias.Criterias.Experience,
                ContractType: filteringCriterias.Criterias.ContractType
            },
            Location: filteringCriterias.Location,
            Title: filteringCriterias.Title
        })
    })
    .then(res => res.json())
}

export default FetchDataFromNoFluffJobsWithCriterias;