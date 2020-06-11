let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let holes = document.getElementsByClassName('hole');
Array.from(holes).map(setListner);

function setListner(hole) {
        hole.onclick = function() {
            (hole.className.includes('hole_has-mole')) ? dead.textContent -= 1 * -1 : lost.textContent -= 1 * -1;
            checkWin();
        }
    }

function checkWin() {
    if (dead.textContent == 10) {
        alert('Победа!');
        setStart();
    }
    if (lost.textContent == 5) {
        alert('Вы проиграли!');
        setStart();
    }
}

function setStart() {
    dead.textContent = 0;
    lost.textContent = 0;
}