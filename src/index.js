const trigger = document.querySelector('.trigger');

trigger.addEventListener('click', () => {
  trigger.classList.toggle('clicked');
});

const navBtn = document.querySelector('.nav-btn');
const dropDown = document.querySelector('.drop-down');

navBtn.addEventListener('click', () => {
  dropDown.classList.toggle('visible');
});
