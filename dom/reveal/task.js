'use strict'

let elements = document.querySelectorAll('.reveal');

[...elements].map(elem => {
    document.addEventListener('scroll', e => {
        let pageHeight = window.innerHeight;
        let top = elem.getBoundingClientRect().top - pageHeight;
        let bottom = elem.getBoundingClientRect().bottom - pageHeight;
        -pageHeight < bottom && top < 0 ? elem.classList.add('reveal_active') : elem.classList.remove('reveal_active');
    });
});