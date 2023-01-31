async function FetchDataFromNoFluffJobsWithFilters() {
    return await fetch('http://localhost:3000/simplequery/Vue.js')
    .then(res => res.json())
}

export default FetchDataFromNoFluffJobsWithFilters