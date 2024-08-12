const toggleMenu = () => {
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === './assets/burger.svg' ? './assets/close.svg' : './assets/burger.svg';

    burgerMenu.setAttribute('src', iconName);

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle('navigation--mobile');
};

// Show section when scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = window.innerHeight / 2;

        if (sectionTop < window.innerHeight - sectionVisible) {
            section.classList.add('fade-up');
        } else {
            section.classList.remove('fade-up');
        }
    });
});


// Highlight active menu item on scroll and click
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const changeActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    };

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);

    navLinks.forEach((link) => {
        link.addEventListener('click', function() {
            console.log(this)
            navLinks.forEach((link) => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});