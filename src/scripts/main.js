document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const navbar = document.querySelector('.hero__nav');
    const alturaHero = heroSection.clientHeight;

    const navToggle = document.querySelector('.hero__nav-toggle');
    const navLinks = document.querySelector('.hero__nav-links');

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual >= alturaHero - navbar.clientHeight) {
            navbar.classList.add('fixed-nav');
            document.body.classList.add('nav-fixed');
        } else {
            navbar.classList.remove('fixed-nav');
            document.body.classList.remove('nav-fixed');
        }
    });

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});