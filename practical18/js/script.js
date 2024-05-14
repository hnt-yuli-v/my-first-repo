//BURGER
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');

    var burgerMenu = document.querySelector('.burger');
    burgerMenu.classList.toggle('active');
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    var menuIcon = document.querySelector('.menu-icon');
    var burgerMenu = document.querySelector('.burger');

    if (!menuIcon.contains(event.target) && !burgerMenu.contains(event.target)) {
        if (burgerMenu.classList.contains('active')) {
            toggleMenu();
        }
    }
});
// SLIDER 
const slider = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-card');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function changeSlide(step) {
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    showSlide(slideIndex);
}

prevButton.addEventListener('click', () => {
    changeSlide(-1);
});

nextButton.addEventListener('click', () => {
    changeSlide(1);
});

const slideInterval = setInterval(() => {
    changeSlide(1);
}, 3500);

showSlide(slideIndex);

slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3500);
});

