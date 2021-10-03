const navBar = document.querySelector('#desktop-nav');
const hamburguerButton = document.querySelector('.menu-bars');
const hamburguerIcon = document.querySelector('.navbar-icon');

function doSomething() {
  hamburguerIcon.classList.toggle('fa-bars');
  hamburguerIcon.classList.toggle('fa-times');
  navBar.classList.toggle('show-me');
}

hamburguerButton.addEventListener('click', doSomething);
