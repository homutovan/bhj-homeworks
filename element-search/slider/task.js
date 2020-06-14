'use strict'

let prev = document.getElementsByClassName('slider__arrow_prev')[0];
let next = document.getElementsByClassName('slider__arrow_next')[0];
let images = [...document.getElementsByClassName('slider__item')];
let dots = document.getElementsByClassName('slider__dot');
dots[0].classList.add('slider__dot_active');

prev.onclick = () => changeImg(-1);
next.onclick = () => changeImg(1);
[...dots].map((dot, index) => dot.onclick = () => changeImg(0, index));

function changeImg(incr, setIndex) {
    let index = (setIndex != undefined) ? setIndex : getIndex('slider__item_active', incr);
    markActive(images, index, 'slider__item_active');
    markActive(dots, index, 'slider__dot_active');
}

function getIndex(classActive, incr) {
    let active = document.getElementsByClassName(classActive)[0];
    let imgCount = images.length;
    let index = images.indexOf(active);
    (index + incr > imgCount - 1) && (index = -1) || (index + incr < 0) && (index = imgCount);
    return index += incr;
}

function markActive(elemList, index, classActive) {
    document.getElementsByClassName(classActive)[0].classList.remove(classActive);
    elemList[index].classList.add(classActive);
}

setInterval(() => changeImg(1), 6000);