'use strict'

let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', e => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', e => progress.value = e.loaded / e.total);
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
    e.preventDefault();
});