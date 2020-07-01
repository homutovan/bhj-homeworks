'use strict'
let hasTooltip = document.querySelectorAll('.has-tooltip');
let position = ['bottom', 'bottom', 'right', 'left', 'top', 'top'];

[...hasTooltip].map((elem, index) => elem.setAttribute('data-position', position[index]));

document.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    let rect = target.getBoundingClientRect()
    let position = target.dataset.position;
    !document.querySelector('.tooltip_active') && (document.body.innerHTML += `<div class="tooltip tooltip_active"></div>`);
    let tooltip = document.querySelector('.tooltip_active');

    if (target.title) {
        if (tooltip.textContent == target.title) {
            document.body.removeChild(tooltip);
        } else {
            tooltip.textContent = target.title;
            tooltip.style.top = `${getPosition(rect, position, tooltip).posY}px`;
            tooltip.style.left = `${getPosition(rect, position, tooltip).posX}px`;
        }
    }
});

function getPosition(rect, position, tooltip) {
    let posX, posY;

    if (position == 'top') {
        posY = rect.top - tooltip.getBoundingClientRect().height;
        posX = rect.left;
    
    } else if(position == 'right') {
        posX = rect.right;
        posY = rect.top;

    } else if(position == 'left') {
        posX = rect.left - tooltip.getBoundingClientRect().width;
        posY = rect.top;

    } else {
        posY = rect.bottom;
        posX = rect.left;
    }
    return {posX: posX, posY: posY}
}

document.addEventListener('scroll', () => {
    let tooltip = document.querySelector('.tooltip_active');
    tooltip && document.body.removeChild(tooltip);
})