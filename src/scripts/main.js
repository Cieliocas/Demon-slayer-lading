document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    const navToggle = document.querySelector('.hero__nav-toggle');
    const navLinks = document.querySelector('.hero__nav-links');

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});