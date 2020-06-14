'use strict'

let modal = document.getElementsByClassName('modal');
let modalClose = document.getElementsByClassName('modal__close');
let showSuccess = document.getElementsByClassName('show-success')[0];

[...modalClose].map(elem => elem.onclick = () => [...modal].map(elem => elem.classList.remove('modal_active')));
showSuccess.onclick = () => modal[1].classList.add('modal_active');
modal[0].classList.add('modal_active');
