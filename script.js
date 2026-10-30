const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];

const closeMenu = () => {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
};

menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav?.classList.toggle('is-open', !isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', link.getAttribute('href'));
        closeMenu();
    });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target || link.classList.contains('nav-link')) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', link.getAttribute('href'));
    });
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            navLinks.forEach((link) => link.classList.toggle('is-active', link === activeLink));
        });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}
