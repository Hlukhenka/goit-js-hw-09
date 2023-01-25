const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', () => switcher.start());
refs.stopBtn.addEventListener('click', () => switcher.stop());

const switcher = {
  start() {
    refs.startBtn.setAttribute('disabled', '');

    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },
  stop() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled', '');
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
