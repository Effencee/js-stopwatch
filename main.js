// http://websamuraj.pl/examples/js/projekt11/
const startPauze = document.querySelector('.main');
const reset = document.querySelector('.reset');
const contentDiv = document.querySelector('.time div');
let seconds = 0;
let ms = 0;
let inter;

function start() {
    startPauze.classList.toggle('active');
    if (startPauze.classList.contains('active')) {
        startPauze.textContent = 'Pauze';
        inter = setInterval(() => {
            ms++;
            if (ms == 100) {
                seconds++;
                ms = 0;
            }
            contentDiv.textContent = `${seconds}.${ms<10?'0'+ms:ms}`;
        }, 10)
    } else {
        startPauze.textContent = 'Start';
        clearInterval(inter);
    }
}

function resetAll() {
    if (startPauze.classList.contains('active')) {
        startPauze.classList.remove('active');
    }
    clearInterval(inter);
    contentDiv.textContent = '---';
    startPauze.textContent = 'Start';
    seconds = 0;
    ms = 0;
}

startPauze.addEventListener('click', start);
reset.addEventListener('click', resetAll);