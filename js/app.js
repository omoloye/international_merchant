const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-items');
const navbar = document.querySelector('.nav');









window.addEventListener('scroll', function () {
    const scrollheight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollheight > navHeight) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }

})

toggle.addEventListener('click', function () {

    if (nav.classList.contains('appear')) {
        nav.classList.remove('appear');
    } else {
        nav.classList.add('appear');
    }

})