'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData() {
    const request = fetch("https://restcountries.com/v3.1/name/peru")
request.then((res) => {
   return res.json()
}).then(data => console.log(data))
}


getCountryData()