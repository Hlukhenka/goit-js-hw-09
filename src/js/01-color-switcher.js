const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

refs.stopBtn.setAttribute('disabled', '');
let timerId = null;

function start() {
  refs.stopBtn.removeAttribute('disabled');
  refs.startBtn.setAttribute('disabled', '');
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  refs.stopBtn.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
