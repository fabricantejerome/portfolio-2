const toggleMenu = () => {
    
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === './assets/burger.svg' ?
        './assets/close.svg'
        :
        './assets/burger.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.navigation');

    navigation.classList.toggle(
        'navigation--mobile'
    );
};

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = window.innerHeight / 2;
        console.log(`Section top: ${sectionTop}, Section visible: ${sectionVisible}`)
        if (sectionTop < window.innerHeight - sectionVisible) {
            section.classList.add('fade-up');
        } else {
            section.classList.remove('fade-up');
        }
    });
});