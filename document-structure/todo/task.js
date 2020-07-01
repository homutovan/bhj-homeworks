'use strict'

let addBtn = document.getElementById('tasks__add');
let input = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');
let storage = window.localStorage;

storage.saveList && storage.saveList.split('|').map(value => addTask(value));

addBtn.addEventListener('click', e => {
    e.preventDefault();
    addTask(input.value);
    storage.saveList ? storage.saveList += `|${input.value}` : storage.setItem('saveList', input.value);
    input.value = '';
});

function addTask(value) {
    if (value) {
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML += `<div class="task__title">${value}</div>
                                <a href="#" class="task__remove">&times;</a>`;
        addListner(newTask);
        taskList.appendChild(newTask);
    }
}

function addListner(task) {
    let removeTask = task.querySelector('.task__remove')
    removeTask.addEventListener('click', e => {
        e.preventDefault();
        taskList.removeChild(e.target.parentElement);
        storage.saveList = storage.saveList.replace(e.target.previousElementSibling.textContent, '');
        storage.saveList = storage.saveList.replace('||', '|')
    })
}
