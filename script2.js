<<<<<<< HEAD
// Now a little bit more realistic:
const fetch = require('node-fetch');

const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
}
const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data =  await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results
  };
}
// getPeople();
// getPeoplePromise();

module.exports = {
  getPeople,
  getPeoplePromise
=======
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
>>>>>>> 69a85eea0910b7910309e1184f049c9c3492b4ac
}