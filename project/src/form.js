import renderMessage, { renderDate } from './common.js';
import {diffDates} from './date.js';

const form = document.getElementById('formDate');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstDate = event.target.elements.firstDate.value;
    const secondDate = event.target.elements.secondDate.value;
    if (!firstDate || !secondDate) {
        renderMessage('Введите оба значения!');
    } else {
        const result = diffDates(firstDate, secondDate);
        renderDate(result);
    }
});