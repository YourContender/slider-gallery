function slidesPlugin(activeClass = 2) {
	const slides = document.querySelectorAll('.slide');

	slides[activeClass].classList.add('active');

	slides.forEach(slide => {
		slide.addEventListener('click', () => {
  			clearActiveClasses();
			slide.classList.add('active');
		})
	});


	function clearActiveClasses() {
		slides.forEach(slide => {
			slide.classList.remove('active')
		})
	}
}

slidesPlugin();