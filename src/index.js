require('./scss/styles.scss');
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = document.getElementsByClassName('navbar-burger');
  if (navbarBurgers.length > 0) {
    for (let navbarBurger of navbarBurgers) {
      navbarBurger.addEventListener('click', () => {
        const target = navbarBurger.getAttribute('data-target');
        const targetElement = document.getElementById(target);

        targetElement.classList.toggle('is-active');
      });
    }
  }
});
