'use strict'

let openChat = document.querySelector('.chat-widget__side-text');
let closeChat = document.querySelector('.chat-widget__close');
let chatWidget = document.querySelector('.chat-widget');
let messages = document.querySelector( '.chat-widget__messages' );
let messagesContainer = document.querySelector('.chat-widget__messages-container');
let chatInput = document.getElementById('chat-widget__input');
let messageStatus = document.querySelector('.message-status');
let lastMsg = Date.now();

openChat.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'));
closeChat.addEventListener('click', () => chatWidget.classList.remove('chat-widget_active'));
chatInput.addEventListener('change', (e) => {
    sendMsg(chatInput.value, 'message_client');
    sayBot();
    lastMsg = Date.now();
})

function sendMsg(text, sender) {
    messages.innerHTML += `
    <div class="message ${sender}">
        <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
        <div class="message__text">
            ${text}
        </div>
    </div>`;

    chatInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sayBot(setIndex) {
    const botMsg = [
        'Похоже, мы были созданы, чтобы страдать! Такова наша участь!',
        'Ты же не передумал показывать ему это послание?',
        'Я не думаю, что ты ему вообще нравишься!',
        'И мне ты тоже не нравишься!',
        'Лучше бы я пошел с мастером Люком, чем торчал здесь с тобой. Уж не знаю в чём дело, но уверен, что в этом есть твоя вина!',
        'Попридержи язык!',
        'Это все твоя вина.',
        'Простите, сэр. Могу ли я спросить, что происходит?',
        'Почему нет?',
        'Невыносимый человек.',
        'Не волнуйся о мастере Люке. Я уверен, что с ним будет все хорошо. Он очень умен, знаешь ли, для человека.',
        'Если позволите, сэр. Я заметил что мотиватор гипердвигателя поврежден. Перейти на световую скорость невозможно!',
        'Сэр, вероятность успешного передвижения в астероидном поле составляет 3720 к 1.',
        'Если бы я тебе рассказал половину того, что я слышал об этом Джаббе Хатте, у тебя бы, наверное, случилось короткое замыкание.',
        'Я полагаю, они думают, что я нечто вроде бога.',
        'Простите, генерал Соло, но это было бы неправильно.',
        'Это против моей программы, чтобы притворяться божеством.',
        'Мне немного неудобно, генерал Соло, но, похоже, вы будете главным блюдом на банкете в мою честь.',
        'Но, мастер Люк, каким колдовством? Я же не могу...',
        'Боже мой! Отключите меня. Машины делают машины. Какое извращение!',
        'Оу, я постараюсь, генерал. Нервозную?',
        'Почему никто не боится обижать дроидов?',
        'И нечего на меня ругаться! Я переводчик. Я не отличу розетку от компьютерного терминала.'
                    ], index = setIndex ? setIndex : Math.floor(Math.random() * botMsg.length);
    
    progress(botMsg[index]);
};

function progress(msg) {
    if (!messageStatus.textContent) messageStatus.textContent = 'Робот печатает ответ';
    if (messageStatus.textContent.length < 20 + msg.length / 5) {
        messageStatus.textContent += '.';
        setTimeout(() => progress(msg), 300);
    } else {
        messageStatus.textContent = '';
        sendMsg(msg, '');
    }
}

(function waiting() {
    if (Date.now() - lastMsg > 30000 && chatWidget.classList.contains('chat-widget_active')) {
        sayBot(7);
        lastMsg = Date.now();
    }
    setTimeout(waiting, 5000);
})();