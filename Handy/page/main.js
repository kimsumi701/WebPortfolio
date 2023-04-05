let menu = document.getElementsByClassName('menu');
let menuCloseBtn = document.getElementById('close-button');

menuCloseBtn.addEventListener('click', function () {
    menu[0].style.right = '-100%';
});