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

const btnLeft = document.querySelector('.btn-left'),
	btnRight = document.querySelector('.btn-right'),
	slider = document.querySelector('#slider'),
	sliderSection = document.querySelectorAll('.slider-section');

btnLeft.addEventListener('click', e => moveLeft());
btnRight.addEventListener('click', e => moveRight());

setInterval(() => {
	moveRight();
}, 5000);

let operation = 0,
	counter = 0,
	widthImg = 100 / sliderSection.length;

function moveRight() {
	if (counter >= sliderSection.length - 1) {
		counter = 0;
		operation = 0;
		slider.style.transform = `translate(${operation}%)`;
		slider.style.transition = 'none';
		return;
	}
	counter++;
	operation += widthImg;
	slider.style.transform = `translate(-${operation}%)`;
	slider.style.transition = `all ease .6s`;

}


function moveLeft() {
	counter--;
	if (counter < 0) {
		counter = sliderSection.length - 1;
		operation = widthImg * counter;
		slider.style.transform = `translate(-${operation}%)`;
		slider.style.transition = 'none';
		return;
	}
	operation -= widthImg;
	slider.style.transform = `translate(-${operation}%)`;
	slider.style.transition = `all ease .6s`;
}