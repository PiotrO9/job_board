async function FetchWorkableApi() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.VUE_APP_WORKABLE_APIKEY}`,
            'X-RapidAPI-Host': 'workable.p.rapidapi.com'
        }
    };
    
    return await fetch('https://workable.p.rapidapi.com/%7BAPIKEY%7D/jobs?phase=published', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export default FetchWorkableApi