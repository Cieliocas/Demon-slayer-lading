document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const navbar = document.querySelector('.hero__nav');
    const navItems = document.querySelectorAll('.hero__nav-item');
    const sections = document.querySelectorAll('section');
    const alturaHero = heroSection.clientHeight;

    const navToggle = document.querySelector('.hero__nav-toggle');
    const navLinks = document.querySelector('.hero__nav-links');

    function setActiveNavItem() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - navbar.clientHeight;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(item => item.classList.remove('hero__nav-item--is-active'));
                navItems[index].classList.add('hero__nav-item--is-active');
            }
        });

        // Verificar se estamos no topo da página (seção Home)
        if (scrollPosition < alturaHero - navbar.clientHeight) {
            navItems.forEach(item => item.classList.remove('hero__nav-item--is-active'));
            navItems[0].classList.add('hero__nav-item--is-active');
        }
    }

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual >= alturaHero - navbar.clientHeight) {
            navbar.classList.add('fixed-nav');
            document.body.classList.add('nav-fixed');
        } else {
            navbar.classList.remove('fixed-nav');
            document.body.classList.remove('nav-fixed');
        }

        setActiveNavItem();
    });

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    setActiveNavItem();
});