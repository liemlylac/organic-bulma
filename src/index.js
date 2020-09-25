require('./scss/styles.scss');

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

