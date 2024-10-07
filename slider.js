let currentSlide = 0;

function changeSlide(direction) {
	const slides = document.querySelectorAll('.slide');
	slides[currentSlide).classList.remove("active");

	currentSlide = (currentSlide + direction + slides.length) % slides.length;
	slides[currentSlide].classList.add('active');
}

document.addEventListener('keydown', (event)=> {
  if (event.key == 'ArrowLeft') {
		changeSlide(-1);
	} else if (event.key == 'ArrowRight') {
		ChangeSlide(1);
	}
});
