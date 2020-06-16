'use strict'

let tabsList = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll(".tab__content");

[...tabsList].map((node, index) => {
    node.addEventListener('click', e => {
        e.target.closest(".tabs").querySelector(".tab_active").classList.remove("tab_active");
        e.target.closest(".tabs").querySelector(".tab__content_active").classList.remove("tab__content_active");
        e.target.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    });
});