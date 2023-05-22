function toggleMenu() {
	var menuBar = document.getElementById('menuBar');
	menuBar.classList.toggle('active');
}

/* document.addEventListener('click', function (event) {
	var menuBar = document.getElementById('menuBar');
	var target = event.target;

	// Comprueba si el clic se realizó fuera del menú
	if (menuBar.classList.contains('active') && !menuBar.contains(target)) {
		menuBar.classList.remove('active');
	}
}); */

document.addEventListener('click', function (event) {
	var menuBar = document.getElementById('menuBar');
	var target = event.target;

	// Comprueba si el clic se realizó fuera del menú
	if (menuBar.classList.contains('active') && !menuBar.contains(target)) {
		menuBar.classList.remove('active');
	}

	// Comprueba si se hizo clic en un elemento del menú desplegado
	if (target.classList.contains('menu-item')) {
		menuBar.classList.remove('active');
	}
});

// SLIDER

const btnLeft = document.querySelector('.btn-left'),
	btnRight = document.querySelector('.btn-right'),
	slider = document.querySelector('#slider'),
	sliderSection = document.querySelectorAll('.slider-section');

btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);

let counter = 0;
const widthImg = 100 / sliderSection.length;

function moveRight() {
	counter++;
	if (counter >= sliderSection.length) {
		counter = 0;
	}
	slider.style.transform = `translateX(-${widthImg * counter}%)`;
	slider.style.transition = `all ease .6s`;
}

function moveLeft() {
	counter--;
	if (counter < 0) {
		counter = sliderSection.length - 1;
	}
	slider.style.transform = `translateX(-${widthImg * counter}%)`;
	slider.style.transition = `all ease .6s`;
}