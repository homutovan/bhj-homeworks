'use strict'

let pool = document.querySelector('.poll');
let poolTitle = document.getElementById('poll__title');
let poolAnswers = document.getElementById('poll__answers');

function sendRequest(xhr, type, params, url) {
    xhr.open(type, url);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
}

function getResponse(url, type, params, foo) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            if (this.status === 200) foo(JSON.parse(this.response));
            else sendRequest(this, type, params, url);
        }
    });
    sendRequest(xhr, type, params, url);
}

function fillPool(response) {
    poolTitle.textContent = response.data.title;
    poolAnswers.innerHTML = '';
    response.data.answers.map((elem, index) => poolAnswers.innerHTML += `<button class="poll__answer" data-vote="${response.id}" data-answer="${index}">${elem}</button>`);
}

function fillResult(response) {
    poolAnswers.innerHTML = '<ul>';
    let sum = response.stat.reduce((acc, elem) => acc + +elem.votes, 0);
    Object.values(response.stat).forEach(elem => pool.innerHTML += `<li>${elem.answer}: <b>${(elem.votes / sum).toFixed(2)}%</b</li>`);
    poolAnswers.innerHTML += '</ul>';
}

document.addEventListener('click', e => {
    if (e.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
        getResponse('https://netology-slow-rest.herokuapp.com/poll.php', 'POST', `vote=${e.target.dataset.vote}&answer=${e.target.dataset.answer}`, fillResult);
    }
});

getResponse('https://netology-slow-rest.herokuapp.com/poll.php', 'GET', null, fillPool);