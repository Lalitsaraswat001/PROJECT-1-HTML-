 // Animation and front-end interactivity

// Floating logo animation
const logo = document.querySelector('main img');
setInterval(() => {
    logo.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        logo.style.transform = 'translateY(0)';
    }, 500);
}, 1000);

// Input field focus effect
const searchInput = document.querySelector('main input');
searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 10px #e63946';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = 'none';
});

// Smooth scrolling to top on footer click
const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
