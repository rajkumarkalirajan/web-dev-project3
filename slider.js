let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
