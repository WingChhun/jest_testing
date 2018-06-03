//*Asynchronous tests *use swapi api

const fetch = require('node-fetch');

const getPeople = fetch => {
    return fetch('https://swapi.co/api/people')
        .then(res => res.json())
        .then(data => {

            return {count: data.count, results: data.results}
        })
        .catch(e => console.log(e));
}

const getPeople2 = async(fetch) => {
    const getRequest = await fetch('https://swapi.co/api/people');
    const data = await getRequest.json();
    console.log(data);
    return {count: data.count, results: data.results}

}

module.exports = {

    getPeople,
    getPeople2
}