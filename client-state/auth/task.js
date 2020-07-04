'use strict'

let signin = document.getElementById('signin');
let signoutBtn = document.getElementById('signout__btn');
let welcome = document.getElementById('welcome');
let user_id_label = document.getElementById('user_id');

signin.classList.add('sign_active');
signoutBtn.style.display = 'none';
if (window.localStorage.user_id) showUser(window.localStorage.user_id)

document.addEventListener('submit', e => {
    e.preventDefault();
    let formData = new FormData(document.forms.signin__form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE && this.status === 200) {
            let response = JSON.parse(this.response);
            if (response.success) showUser(response.user_id);
            else {
                document.forms.signin__form.reset();
                alert('Неверный логин/пароль');
            }
        }
    });
    xhr.send(formData);
});

signoutBtn.addEventListener('click', () => {
    window.localStorage.user_id = '';
    location.reload();
});

function showUser(user_id) {
    welcome.classList.add('welcome_active');
    signin.classList.remove('sign_active');
    signoutBtn.style.display = 'block';
    user_id_label.textContent = window.localStorage.user_id = user_id;
}