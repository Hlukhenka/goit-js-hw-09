import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submit: document.querySelector('button[type=submit]'),
};

refs.submit.addEventListener('click', onClickSubmit);

function onClickSubmit(e) {
  e.preventDefault();

  let delay = refs.delay.value;
  const step = refs.step.value;
  const amount = refs.amount.value;
  refs.delay.value = refs.step.value = refs.amount.value = '';
  delay = +delay;

  for (let i = 0; i < amount; i += 1) {
    let position = i + 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay = +step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
