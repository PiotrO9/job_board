async function FetchDataFromNoFluffJobsDetailPage(url) {
    return await fetch('http://localhost:3000/detailPage', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
            data: url
        })
    })
    .then(res => res.json())
}

export default FetchDataFromNoFluffJobsDetailPage