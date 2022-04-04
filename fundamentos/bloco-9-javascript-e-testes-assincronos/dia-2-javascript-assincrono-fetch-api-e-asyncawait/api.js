

const API_URL = `https://api.coincap.io/v2/assets`;

const fetchMoedas = () => {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => adcMoedas(data.data));
};

function adcMoedas(data) {
    data
    .filter((moeda) => Number(moeda.rank) <= 10)
    .forEach(element => {
        const listaMae = document.querySelector('#lista');
        const itemList = document.createElement('li');
        const valor = Number(element.priceUsd);
        itemList.innerText = `${element.name}: ${valor.toFixed(2)}`;
        listaMae.appendChild(itemList);
    });

    /* const boratestar = document.querySelector('#teste');
    boratestar.innerHTML = timestamp; */
}

window.onload = () => fetchMoedas();