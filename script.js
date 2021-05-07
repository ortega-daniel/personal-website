const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.toggle-menu');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled-nav', window.scrollY > 0);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 598) {
        nav.classList.remove('mobile-nav');
    }
});

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav');
});
