
const message = document.querySelector('.formDate__message');
const time = document.getElementById('time');

const sound = new Howl({
    src: ['sound.mp3'],
    volume: 0.2
});

let timeId = null;
let checkTimer = true;

export default function renderMessage(text) {
    message.textContent = text;
}

export function renderDate(result) {
    message.innerHTML = `
                        <span>Годы: ${result.years}</span><br>
                        <span>Месяцы: ${result.months}</span><br>
                        <span>Дни: ${result.days}</span>
                        `
}

export function startTimer() {
    if(time.value == 0 || time.value == '') {
        renderMessage('Введите число!');
    }else renderMessage('');
    if(checkTimer && time.value > 0) {
        timeId = setInterval(() => {
            +time.value--;
            if(time.value == 0) {
                stopTimer();
                sound.play();
            }
        }, 1000);
        checkTimer = false;
    }
}

export function stopTimer() {
    clearInterval(timeId);
    checkTimer = true;
}