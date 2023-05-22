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
