//Burger
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
function fadeOut(element) {
    let opacity = 1;
    const fadeEffect = setInterval(() => {
        if (opacity <= 0.1) {
            clearInterval(fadeEffect);
            element.style.opacity = 0;
            element.style.display = 'none'; 
        } else {
            opacity -= 0.1;
            element.style.opacity = opacity;
        }
    }, 50);
}

function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'block'; 
    const fadeEffect = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeEffect);
            element.style.opacity = 1;
        } else {
            opacity += 0.1;
            element.style.opacity = opacity;
        }
    }, 50);
}

function showSlides(index) {
    const slides = document.querySelectorAll('.slide-card');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        if (i === slideIndex) {
            fadeIn(slide);
        } else {
            fadeOut(slide);
        }
    });
}

prevButton.addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    showSlides(slideIndex);
});

showSlides(slideIndex);

setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3500);
