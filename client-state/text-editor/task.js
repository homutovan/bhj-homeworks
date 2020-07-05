'use strict'

let editor = document.getElementById('editor');
let button = document.querySelector('.button');
window.localStorage.text ? editor.value = window.localStorage.text : '';

editor.addEventListener('input', () => window.localStorage.text = editor.value);
button.addEventListener('click', () => editor.value = window.localStorage.text = '');