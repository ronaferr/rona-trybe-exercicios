// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => adcJoke(data));
};

function adcJoke({joke}) {
  const contanierJoke = document.querySelector('#jokeContainer');
  contanierJoke.innerHTML = joke;
}

window.onload = () => fetchJoke();