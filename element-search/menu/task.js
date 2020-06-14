'use strict'

function menuAnimate(node) {
    let menuLinks = node.getElementsByClassName('menu__link');
    let subMenuList = node.getElementsByClassName('menu_sub');
    [...menuLinks].map(elem => elem.onclick = clickHandler);

    function clickHandler(event) {
        let menuSub = event.target.parentNode.getElementsByClassName('menu_sub');
        menuSub.length && clickMenu(menuSub[0]);
        return false;
}
    function clickMenu(menuItem) {
        if (menuItem.classList.contains('menu_active')) {
            menuItem.classList.remove('menu_active');
        } else {
            [...subMenuList].map(elem => elem.classList.remove('menu_active'));
            menuItem.classList.add('menu_active');
        }
    }
}

let nodeList = document.getElementsByClassName('menu_main');
[...nodeList].map(node => menuAnimate(node));