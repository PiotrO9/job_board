async function FetchDataFromNoFluffJobsWithFilters() {
    return await fetch('http://localhost:3000')
    .then(res => res.json())
}

export default FetchDataFromNoFluffJobsWithFilters