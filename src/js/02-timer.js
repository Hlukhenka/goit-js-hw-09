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

refs.startBtn.setAttribute('disabled', '');

let intervalId = null;

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
    if (intervalId <= 0) {
      clearInterval(intervalId);
    }
  },
};

flatpickr(refs.inputEl, options);

function onClickStart() {
  intervalId = setInterval(() => {
    const selectedDate = refs.inputEl.value;
    const ms = new Date(selectedDate) - Date.now();
    const convertedDate = convertMs(ms);
    updateClockFace(convertedDate);
    if (ms <= 0) {
      clearInterval(intervalId);
    }
  });
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.inputDays.textContent = days;
  refs.inputHours.textContent = hours;
  refs.inputMinutes.textContent = minutes;
  refs.inputSeconds.textContent = seconds;
}
