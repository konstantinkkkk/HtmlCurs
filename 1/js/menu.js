const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active')
});