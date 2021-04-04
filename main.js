const menu = document.getElementById('nav-menu');
const btn = document.getElementById('btn-burger');
const line = document.querySelector('.mentor-btn__line');

function dropDown() {
  menu.classList.toggle('show');
  line.classList.toggle('cross');
}

btn.addEventListener('click', dropDown);

/* Activate Submenu */
function toggleSubMenu() {
  const menuQuery = menu.querySelector('.submenu-active');
  if (this.classList.contains('submenu-active')) {
    this.classList.remove('submenu-active');
  } else if (menuQuery) {
    menuQuery.classList.remove('submenu-active');
    this.classList.add('submenu-active');
  } else {
    this.classList.add('submenu-active');
  }
}

const secondNav = document.querySelectorAll('.mentor-menu__list__items');
for (let element of secondNav) {
  if (element.querySelector('.mentor-menu__secundary__list')) {
    element.addEventListener('click', toggleSubMenu, false);
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(element) {
  const menuQuery = menu.querySelector('.submenu-active');
  let isClickInside = menu.contains(element.target);
  if (!isClickInside && menuQuery) {
    menuQuery.classList.remove('submenu-active');
  }
}

document.addEventListener('click', closeSubmenu, false);
