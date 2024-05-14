// BURGER

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
});


// SLIDER 

const slider = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let slideIndex = 0;
let slideTimer;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide-card');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        if (i === slideIndex) {
            slide.style.opacity = "1"; 
        } else {
            slide.style.opacity = "0"; 
        }
    });
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
    slideTimer = setTimeout(nextSlide, 3500); 
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

prevButton.addEventListener('click', () => {
    prevSlide();
    clearTimeout(slideTimer); 
});

nextButton.addEventListener('click', () => {
    nextSlide();
    clearTimeout(slideTimer);
});

slider.addEventListener('mouseenter', () => {
    clearTimeout(slideTimer);
});

slider.addEventListener('mouseleave', () => {
    slideTimer = setTimeout(nextSlide, 3500); 
});

showSlides(slideIndex);
nextSlide(); 
