'use strict'

document.addEventListener('change', e => {
    makeChildren(e.target);
    makeParent(e.target);
});

function makeChildren(node) {
    let children = node.closest('.interest').querySelectorAll('.interest');
    if (children) [...children].map(elem => make(elem.querySelector('.interest__check'), node.checked, false));
}

function make(target, check, ind) {
    target.checked = check;
    target.indeterminate = ind;
}

function makeParent(node) {
    let parent = node.closest('.interests_active');
    if (parent) {
        let sibling = parent.querySelectorAll('.interest__check');
        let target = parent.parentNode.querySelector('.interest__check');
        let checkStatus = [...sibling].every(elem => elem.checked == node.checked);
        checkStatus ? make(target, node.checked, false) : make(target, false, true);
        makeParent(target);
    }
}