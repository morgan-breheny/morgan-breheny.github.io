let speaker = document.querySelector('.speaker');
let sliderInput = document.querySelector('.slider-input');

sliderInput.addEventListener('input', function() {
	let volume = parseInt(this.value);
	let rotation = volume * 3.6;
	speaker.style.transform = `rotate(${rotation}deg)`;
	speaker.classList.add('rotate-animation');
	setTimeout(function() {
		speaker.classList.remove('rotate-animation');
	}, 1000);
});


