'use strict'

let timer = document.getElementById('timer');

function countdown() {
    let count = timer.textContent.substr(6, 8) ? timer.textContent.substr(6, 8) : timer.textContent.substr(0, 2);
    timer.textContent =  new Date(0, 0, 0, 0, 0, -- count).toTimeString().substr(0, 8);
    if (count <= 0) {
        alert('Вы победили в конкурсе!');
        location.assign('https://www.python.org/ftp/python/3.8.3/python-3.8.3.exe');
        clearInterval(1);
    }
}

setInterval(countdown, 1000);
