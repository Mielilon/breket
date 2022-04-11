const showMenuButton = document.querySelector('.mobile-menu-button');
const hideMenuButton = document.querySelector('.close-menu');
const menuSection = document.querySelector('.menu-section');

const onMenuShow = function(evt) {
    menuSection.classList.add('active');
}
const onMenuHide = function(evt) {
    menuSection.classList.remove('active');
}

showMenuButton.addEventListener('click', onMenuShow);
hideMenuButton.addEventListener('click', onMenuHide);