'use strict'

let modal = document.getElementById('subscribe-modal');
let close = document.querySelector('.modal__close');

(getCookie('close') == undefined) && modal.classList.add('modal_active');

close.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'close=true';
});

function getCookie(name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return  parts.pop().split(";").shift();
    }
}