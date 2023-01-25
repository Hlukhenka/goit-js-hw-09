import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputEl: document.querySelector('#datetime-picker'),
  inputDays: document.querySelector('span[data-days]'),
  inputHours: document.querySelector('span[data-hours]'),
  inputMinutes: document.querySelector('span[data-minutes]'),
  inputSeconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.addEventListener('click', onClickStart);

refs.inputEl.addEventListener('input', onChangeIput);

refs.startBtn.setAttribute('disabled', '');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      options.defaultDate = selectedDates[0];
      refs.startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(refs.inputEl, options);

let selectedDate = null;
let currentDate = null;

function onClickStart() {
  intervalId();
}

function onChangeIput(e) {
  selectedDate = new Date(e.currentTarget.value);
  currentDate = Date.now();
}

function intervalId() {
  setInterval(() => {
    convertMs();
    refs.startBtn.setAttribute('disabled', '');
  }, 1000);
}

function convertMs() {
  const ms = selectedDate - Date.now();
  const days = addLeadingZero(Math.floor(ms / (1000 * 60 * 60 * 24)));
  const hours = addLeadingZero(Math.floor((ms / (1000 * 60 * 60)) % 24));
  const minutes = addLeadingZero(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = addLeadingZero(Math.floor((ms / 1000) % 60));
  refs.inputHours.textContent = hours;
  refs.inputMinutes.textContent = minutes;
  refs.inputSeconds.textContent = seconds;
  refs.inputDays.textContent = days;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

