document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const navbar = document.querySelector('.hero__nav');
    const navItems = document.querySelectorAll('.hero__nav-item');
    const sections = document.querySelectorAll('section, .hero');
    const alturaHero = heroSection.clientHeight;

    const navToggle = document.querySelector('.hero__nav-toggle');
    const navLinks = document.querySelector('.hero__nav-links');

    function setActiveNavItem() {
        const scrollPosition = window.scrollY + navbar.clientHeight + 1;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(item => item.classList.remove('hero__nav-item--is-active'));
                navItems[index].classList.add('hero__nav-item--is-active');
            }
        });
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - navbar.clientHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    setActiveNavItem();
});

document.addEventListener('DOMContentLoaded', function() {
    const seasonCards = document.querySelectorAll('.seasons__card');
    let currentIndex = 0;

    function showNextSeason() {
        currentIndex = (currentIndex + 1) % seasonCards.length;
        document.getElementById(`seasons-item-${currentIndex + 1}`).checked = true;
    }

    function showPrevSeason() {
        currentIndex = (currentIndex - 1 + seasonCards.length) % seasonCards.length;
        document.getElementById(`seasons-item-${currentIndex + 1}`).checked = true;
    }

    seasonCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentIndex = index;
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            showNextSeason();
        } else if (e.key === 'ArrowLeft') {
            showPrevSeason();
        }
    });

    // Auto-rotate every 5 seconds
    setInterval(showNextSeason, 5000);
});

