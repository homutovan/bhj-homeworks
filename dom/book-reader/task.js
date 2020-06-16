'use strict'

let fontControls = [...document.querySelectorAll('.font-size')];
let colorControls = [...document.querySelectorAll('.book__control_color .color')];
let bgColorControls = [...document.querySelectorAll('.book__control_background .color')];
let bookContent = document.querySelector('.book__content');

function controlHandler(controls, activeClass, classList, classPrefix, readData) {
    controls.map(control => {
        control.addEventListener('click', e => {
            e.preventDefault();
            e.target.parentElement.querySelector(`.${activeClass}`).classList.remove(activeClass);
            e.target.classList.add(activeClass);
            bookContent.classList.remove(...classList);
            let data = e.target.dataset[readData];
            if (data) bookContent.classList.add(`${classPrefix}-${data}`);
        });
    });
}

controlHandler(fontControls, 'font-size_active', ['book_fs-big', 'book_fs-small'], 'book_fs', 'size');
controlHandler(colorControls, 'color_active', ['book_color-gray', 'book_color-whitesmoke'], 'book_color', 'color');
controlHandler(bgColorControls, 'color_active',['book_bg-gray', 'book_bg-black'], 'book_bg', 'color');