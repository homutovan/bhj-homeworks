'use strict'

let delay = 1000;

setTimeout(function nextStep() {
    let span = document.querySelector('.rotator__case_active');
    let nextSpan = span.nextElementSibling;
    let currSpan = nextSpan ? nextSpan : span.parentElement.firstElementChild;
    span.classList.remove('rotator__case_active');
    currSpan.classList.add('rotator__case_active');
    currSpan.style.color = currSpan.dataset.color;
    setTimeout(nextStep, currSpan.dataset.speed);
}, delay);