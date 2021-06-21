
const links = document.querySelectorAll('.menu__link');
const form = document.getElementById('formDate');
const timer = document.querySelector('.timer');
const message = document.querySelector('.formDate__message');

links.forEach(link => {
    link.addEventListener('click', event => {
        if(event.target.textContent == 'Калькулятор дат') {
            form.classList.remove('hidden');
            timer.classList.add('hidden');
            message.textContent = '';
        }
        if(event.target.textContent == 'Таймер') {
            timer.classList.remove('hidden');
            form.classList.add('hidden');
            message.textContent = '';
        }
    });
});