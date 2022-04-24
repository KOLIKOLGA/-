const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');
const mineDisplayBackgroundImage = document.querySelector('.mine-display__background-image');

buttonModals.forEach((item) => {

  item.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
    body.classList.add('noscroll');
    body.classList.add('padding__right');
    mineDisplayBackgroundImage.classList.add('padding__right');
  });
});

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal__inner');

  if (!isModal) {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
    body.classList.remove('padding__right');
    mineDisplayBackgroundImage.classList.remove('padding__right');
  }
});

modalClose.addEventListener('click', () => {
  modalWindow.style.display = 'none';
  body.classList.remove('noscroll');
  body.classList.remove('padding__right');
  mineDisplayBackgroundImage.classList.remove('padding__right');
});
// таймер я нашла в интернете
document.addEventListener('DOMContentLoaded', function () {
  // конечная дата
  const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});