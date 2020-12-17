// const trigger = document.querySelector('.trigger');

// trigger.addEventListener('click', () => {
//   trigger.classList.toggle('clicked');
// });

// const navBtn = document.querySelector('.nav-btn');
// const dropDown = document.querySelector('.drop-down');

// navBtn.addEventListener('click', () => {
//   dropDown.classList.toggle('visible');
// });

const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const mobileNavDrop = document.querySelector('.mobile-nav-drop');
mobileNavBtn.addEventListener('click', () => {
  mobileNavDrop.classList.toggle('visible');
});
