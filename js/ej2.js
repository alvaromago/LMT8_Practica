function mostrarSaludo() {
	const nombre = document.getElementById("nombre").value;
	const horaActual = new Date().getHours();
	let saludo = "";

	if (horaActual >= 6 && horaActual < 12) {
		saludo = `¡Buenos días, ${nombre}!`;
	} else if (horaActual >= 12 && horaActual < 18) {
		saludo = `¡Buenas tardes, ${nombre}!`;
	} else {
		saludo = `¡Buenas noches, ${nombre}!`;
	}

	document.getElementById("saludo").textContent = saludo;
}
