import renderMessage from './common.js';

const links = document.querySelectorAll('.menu__link');
const form = document.getElementById('formDate');
const timer = document.querySelector('.timer');

links.forEach(link => {
    link.addEventListener('click', event => {
        if(event.target.textContent == 'Калькулятор дат') {
            form.classList.remove('hidden');
            timer.classList.add('hidden');
            renderMessage('');
        }
        if(event.target.textContent == 'Таймер') {
            timer.classList.remove('hidden');
            form.classList.add('hidden');
            renderMessage('');
        }
    });
});