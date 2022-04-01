const  validate  =  new  window.JustValidate ('#form');
document.getElementById('data').DatePickerX.init();
let button = document.querySelector('#botaoSub');
let info = document.querySelector('#informations');
let inputNome = document.querySelector('#nome');

function geto(event) {
    event.preventDefault();
    info.innerHTML = inputNome.value;
}
button.addEventListener('click', geto);