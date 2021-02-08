'use strict';

const navMain = document.querySelector('.main-nav');
const header = document.querySelector('.page-header');
const navToggle = document.querySelector('.page-header__toggle');
const menuLinks = document.querySelectorAll('.main-nav a');
const phone = document.querySelector('input[type="number"]');
const submit = document.querySelector('#submit-btn');
const message = document.querySelector('.page-header__message');
const page = document.querySelector('main');
const footer = document.querySelector('footer');

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--nojs');

if (typeof navMain !== 'undefined' && typeof header !== 'undefined') {
  const closeMenu = function () {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      header.classList.add('page-header--closed');
      header.classList.remove('page-header--opened');
      page.classList.remove('scroll');
      footer.classList.remove('scroll');
    }
  }

  if (typeof navToggle !== 'undefined') {
    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        header.classList.remove('page-header--closed');
        header.classList.add('page-header--opened');
        page.classList.add('scroll');
        footer.classList.add('scroll');
      } else {
        closeMenu();
      }
    });
  }

  if (typeof menuLinks !== 'undefined') {
    menuLinks.forEach((link) => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
  }
}

if (typeof submit !== 'undefined' && typeof phone !== 'undefined' && typeof message !== 'undefined') {
  message.classList.add('page-header__message--closed');
  submit.addEventListener('click', function (evt) {
    const phoneReg = /((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (phoneReg.test(phone.value) === false || !phone.value) {
      evt.preventDefault();
      message.classList.remove('page-header__message--closed');
    }
  });
}
