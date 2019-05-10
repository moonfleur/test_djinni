//Burger menu

const navSlide = () => {
    const burger = document.querySelector('.burger');

    var navbarHide = true;
    var navbar = document.getElementById('navbar');

    burger.addEventListener('click', () => {
        if (navbarHide){
            navbar.style.display = 'block';
            navbarHide = false;
        } else {
            navbar.style.display = 'none';
            navbarHide = true;
        }
        //Burger Animation
        burger.classList.toggle('toggle');
    })
};

navSlide();

//Scrolldown menu

(function() {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
})();
