document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector('.menu__top');
    menuOpen.classList.add('active');

    document.querySelector('.back__img').classList.add('active');
    document.querySelector('.header__title').classList.add('active');

    window.addEventListener('scroll', function () {
        const sectionFirst = document.querySelector('.section-1');
        const sectionOffset = sectionFirst.offsetHeight / 2;
        const scrollY = window.scrollY;

        if (scrollY > sectionOffset) {
            document.querySelector('.section-1__text').classList.add('active');

            document.querySelectorAll('.section-1__item').forEach(function (element) {
                element.classList.add('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const sectionTwo = document.querySelector('.section-2');
        const sectionTwoOffset = sectionTwo.offsetTop / 2;
        const scrollY = window.scrollY;


        if (scrollY > sectionTwoOffset) {
            document.querySelector('.section-2__text').classList.add('active');
            document.querySelector('.section-2__image').classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const sectionThree = document.querySelector('.section-3');
        const sectionThreeOffset = sectionThree.offsetTop - 200;
        const scrollY = window.scrollY;

        if (scrollY > sectionThreeOffset) {
            document.querySelector('.section-3__text').classList.add('active');
            document.querySelectorAll('.section-3__item').forEach(function (element) {
                element.classList.add('active');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const sectionZero = document.querySelector('.section-0');
        const sectionZeroOffset = sectionZero.offsetTop - 600;
        const scrollY = window.scrollY;


        if (scrollY > sectionZeroOffset) {
            document.querySelector('.section-0__text').classList.add('active');
            document.querySelector('.section-0__image').classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const sectionFive = document.querySelector('.section-5');
        const sectionFiveOffset = sectionFive.offsetTop - 600;
        const scrollY = window.scrollY;


        if (scrollY > sectionFiveOffset) {
            document.querySelector('.section-5__text').classList.add('active');
            document.querySelector('.section-5__image').classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const sectionSix = document.querySelector('.section-6');
        const sectionSixOffset = sectionSix.offsetTop - 600;
        const scrollY = window.scrollY;


        if (scrollY > sectionSixOffset) {
            document.querySelector('.section-6__text').classList.add('active');
            document.querySelector('.section-6__form').classList.add('active');
        }
    });
});
