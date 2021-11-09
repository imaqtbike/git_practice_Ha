'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData() {
    const request = fetch(`https://animechan.vercel.app/api/random`)
request.then((res) => {
   return res.json()
}).then(data => console.log(data))
}


getCountryData()