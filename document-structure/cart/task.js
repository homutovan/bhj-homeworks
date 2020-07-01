'use strict'

let cart = document.querySelector('.cart');
let cartProducts = document.querySelector('.cart__products');
let storage = window.localStorage;
cart.style.display = "none";

(function loadCart() {
    let cartList = JSON.parse(storage.getItem('cart'));
    if (cartList) {
        cartList.forEach(({id, src, quantity}) => newProduct(id, src, quantity));
    }
})();

function saveCart() {
    let saveCart = [];
    [...cartProducts.children].forEach(elem => saveCart.push({'id': elem.dataset.id, 
                                                            'src': elem.querySelector('.cart__product-image').getAttribute('src'),
                                                            'quantity': elem.querySelector('.cart__product-count').textContent}));
    storage.setItem('cart', JSON.stringify(saveCart))
}

document.addEventListener('click', e => {
    let product = e.target.closest('.product'), rect;
    if (!product) return false;
    let quantityValue = product.querySelector('.product__quantity-value');
    let src = product.querySelector('.product__image').getAttribute('src');

    if (e.target.classList.contains('product__quantity-control_dec')) {
        (quantityValue.textContent > 1) && (quantityValue.textContent -= 1);
    } else if (e.target.classList.contains('product__quantity-control_inc')) {
        quantityValue.textContent -= -1;
    } else if (e.target.classList.contains('product__add')) {
        rect = addProduct(product.dataset.id, src, quantityValue.textContent)
        animateProduct(product.getBoundingClientRect(), rect, src, quantityValue.textContent)
        saveCart();
    };
})

function addProduct(id, src, quantity) {
    let productInCart = document.querySelector(`.cart__product[data-id='${id}']`), rect;
    
    if (productInCart) {
        productInCart.querySelector('.cart__product-count').textContent -= -quantity;
        rect = productInCart.getBoundingClientRect();
    } else {
        rect = newProduct(id, src, quantity);
    }
    return rect;
}

function newProduct(id, src, quantity) {
    let product = createProduct(id, src, quantity);
    product.addEventListener('click', e => {
        cartProducts.removeChild(e.target.parentElement);
        !cartProducts.children.length && (cart.style.display = "none");
        saveCart();
    });
    cartProducts.appendChild(product);
    cart.style.display = "block";
    return product.getBoundingClientRect();
}

function createProduct(id, src, quantity) {
    let product = document.createElement('div');
    product.classList.add('cart__product');
    product.setAttribute('data-id', id);
    product.innerHTML = `<img class="cart__product-image" src="${src}">
                            <div class="cart__product-count">${quantity}</div>`;
    return product;
}

function animateProduct(rectStart, rectStop, src, value) {
    let deltaX = (rectStop.x - rectStart.x) / 40;
    let deltaY = (rectStop.y - rectStart.y) / 40;
    let product = createProduct('', src, value);
    product.style.position = 'absolute';
    document.body.appendChild(product);
    moveProduct(product, rectStart.x, rectStart.y, deltaX, deltaY, rectStop.x);
}

function moveProduct(product, posX, posY, deltaX, deltaY, stopX) {
    if (stopX > posX) {
        product.style.top = `${posY}px`;
        product.style.left = `${posX}px`;
        setTimeout(() => moveProduct(product, posX + deltaX, posY + deltaY, deltaX, deltaY, stopX), );
    } else {
        document.body.removeChild(product);
    }
}

