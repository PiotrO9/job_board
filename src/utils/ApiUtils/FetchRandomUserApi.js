async function FetchRandomUserApi() {
    return await fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((res) => res.results[0])
}

export default FetchRandomUserApi;