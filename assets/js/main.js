/* Contae - interações do site */
(function () {
  'use strict';

  var menuButton = document.querySelector('.menu-button');
  var mainNav = document.querySelector('.main-nav');

  function fecharMenu() {
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  if (menuButton && mainNav) {
    menuButton.addEventListener('click', function () {
      var aberto = mainNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(aberto));
      menuButton.querySelector('.sr-only').textContent = aberto ? 'Fechar menu' : 'Abrir menu';
    });

    mainNav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fecharMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fecharMenu();
    });
  }

  var ano = document.getElementById('year');
  if (ano) ano.textContent = new Date().getFullYear();
})();
