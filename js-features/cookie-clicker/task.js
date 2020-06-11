'use strict'

let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeed = document.getElementById('clicker__speed');
let start = 0;

cookie.onclick = clickHandler;
 
function clickHandler(){
    clickerCounter.textContent -= 1 * -1;
    clickerSpeed.textContent = (start ? 1000 / (new Date() - start) : 0).toFixed(2);
    start = new Date();
    scaler(cookie, 1.25);
    setTimeout(scaler, 100, cookie, 0.8);
}

function scaler(element, multiplier) {
    element.width *= multiplier;
    element.height *= multiplier;
}