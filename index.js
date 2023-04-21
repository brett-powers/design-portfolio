const buttonLeft = document.querySelector('.btn--arrow-left');
const buttonRight = document.querySelector('.btn--arrow-right');
const slides = document.querySelector('.carousel');


buttonRight.addEventListener('click', function () {
    slides.style.transform = `translateX(-100%)`;
})

buttonLeft.addEventListener('click', function () {
    slides.style.transform = `translateX(0)`;
})