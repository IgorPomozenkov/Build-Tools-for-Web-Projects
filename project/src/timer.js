// import {Howl, Howler} from './howler.js';
import { startTimer, stopTimer } from './common.js';

const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');

startEl.addEventListener('click', startTimer);
stopEl.addEventListener('click', stopTimer);