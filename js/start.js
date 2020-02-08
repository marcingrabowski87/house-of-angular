'use strict'
{
    const hamburger = document.querySelector('.hamburger');
    const headerMenu = document.querySelector('.header-menu ');


    const visibleMobileMenu = () => {
        const widthScreen = window.innerWidth;

        if (widthScreen <= 768) {
            hamburger.addEventListener('click', function () {
                headerMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

        }
    }


    const startProgram = () => {
        window.addEventListener('resize', visibleMobileMenu);
        visibleMobileMenu();
    }
    startProgram();
}