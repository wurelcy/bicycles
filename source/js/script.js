const navMain = document.querySelector('.main-nav');
const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__toggle');
const factsLink = document.querySelector('#facts-link');
const typesLink = document.querySelector('#types-link');
const videoLink = document.querySelector('#video-link');
const contactsLink = document.querySelector('#contacts-link');

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--nojs');

const closeMenu = function () {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    header.classList.add('page-header--closed');
    header.classList.remove('page-header--opened');
  }
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    header.classList.remove('page-header--closed');
    header.classList.add('page-header--opened');
  } else {
    closeMenu();
  }
});

factsLink.addEventListener('click', function() {
  closeMenu();
});

typesLink.addEventListener('click', function() {
  closeMenu();
});

videoLink.addEventListener('click', function() {
  closeMenu();
});

contactsLink.addEventListener('click', function() {
  closeMenu();
});
