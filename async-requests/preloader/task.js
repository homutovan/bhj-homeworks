'use strict'

let loader = document.getElementById('loader');
let items = document.getElementById('items');
let storage = window.localStorage;
let xhr = new XMLHttpRequest();

if (storage.getItem('response')) fillItems(storage.getItem('response'));

function sendRequest() {
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
}

function fillItems(response) {
    let valute = JSON.parse(response).response.Valute;
    let valuteList = Object.values(valute)
    valuteList.forEach(elem => items.innerHTML += `<div class="item">
                                                        <div class="item__code">${elem.CharCode}</div>
                                                        <div class="item__value">${elem.Value}</div>
                                                        <div class="item__currency">руб.</div>
                                                    </div>`
    );
}

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        if (this.status === 200) {
            loader.classList.remove('loader_active');
            items.innerHTML = '';
            storage.setItem('response', this.response);
            fillItems(this.response);
        } else sendRequest();
    }
});

sendRequest();