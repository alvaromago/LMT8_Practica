// JQuery
$(function () {
	// JS Ej 17
	$("#ej17").on("click", function () {
		$num = prompt("Dame un número");

		let codigo = "";
		if ($num != null) {
			for (i = 0; i <= 10; i++) {
				codigo += `${$num}x` + i + "=" + i * $num + "<br>";
			}
		} else {
			alertify.error("<h3>No has introducido ningún número</h3>");
		}

		$(".codigo").html(codigo);
	});

	// JS Ej 18
	$("#ej18").on("click", function () {
		$num1 = prompt("Dame el primer número: ");
		$num2 = prompt("Dame el segundo número: ");

		let codigo = "";

		if ($num1 == $num2) {
			codigo = "<h1>Son iguales</h1>";
			alertify.set("notifier", "position", "bottom-center");
			alertify.notify(`<h3>Los números eran ${$num1} y ${$num2}</h3>`, 0.25);
		} else {
			codigo = "<h1>Son distintos</h1>";
			alertify.set("notifier", "position", "bottom-center");
			alertify.notify(`<h3>Los números eran ${$num1} y ${$num2}</h3>`, 0.25);
		}

		$(".codigo").html(codigo);
	});

	// JS Ej 19
	$("#ej19").on("click", function () {
		$fechaNacimiento = prompt("Dame tu fecha de nacimiento (DD/MM/AAAA):");
		$nacimiento = $fechaNacimiento.split("/");
		$age = 2023 - $nacimiento[2];

		let codigo = "";
		if ($nacimiento[2] > 2023) {
			alertify.error("<h3>El año que has introducido es incorrecto</h3>");
		} else {
			codigo = `<h1>Tienes ${$age} años</h1>`;
		}

		$(".codigo").html(codigo);
	});

	// JS Ej 20
	$("#ej20").on("click", function () {
		let codigo = "";

		codigo += "<h1 id='frase1'>Haz click en esta frase</h1>";
		codigo += "<h1 id='frase2'>Haz doble click en esta frase</h1>";

		$(".codigo").html(codigo);

		document.getElementById("frase1").onclick = function (event) {
			alertify.alert("Ejercicio 20 JavaScript", "Has hecho click").set({ transition: "fade" }).show();
			event.preventDefault();
		};

		document.getElementById("frase2").ondblclick = function (event) {
			alertify.alert("Ejercicio 20 JavaScript", "Has hecho doble click").set({ transition: "fade" }).show();
			event.preventDefault();
		};
	});

	// JS Ej 21
	$("#ej21").on("click", function () {
		let codigo = `
        <style>
            #rojo, #azul, #amarillo, #verde, #marron, #blanco {
                width: 50px;
                height: 50px;
                border: 1px solid black;
                display: inline-block;
            }
        </style>

        <div id="rojo" onmouseenter="cambio(this)" onmouseout="cambioB()" style="background-color: red"></div>
        <div id="azul" onmouseenter="cambio(this)" onmouseout="cambioB()" style="background-color: blue"></div>
        <div id="amarillo" onmouseenter="cambio(this)" onmouseout="cambioB()" style="background-color: yellow"></div>
        <div id="verde" onmouseenter="cambio(this)" onmouseout="cambioB()" style="background-color: green"></div>
        <div id="marron" onmouseenter="cambio(this)" onmouseout="cambioB()" style="background-color: brown"></div>`;

		$(".codigo").html(codigo);
		alertify.set("notifier", "position", "bottom-center");
		alertify.notify("<h3>Prueba a pasar el ratón por encima de los colores</h3>", 0.5);
	});

	// JS Ej 3
	$("#ej3").on("click", function () {
		let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
		let dni = parseInt(prompt("Introduce tu número de DNI: "));
		let letra = prompt("Introduce la letra de tu DNI: ").toUpperCase();

		if (dni > 99999999 || dni < 0) {
			alertify.alert("¡Error!", "El número de DNI no es válido.").set({ transition: "fade" }).show();
		} else {
			let resto = dni % 23;
			let letraCalculada = letras[resto];

			if (letra != letraCalculada) {
				alertify.alert("¡Error!", "La letra de DNI no es correcta.").set({ transition: "fade" }).show();
			} else {
				alertify.alert("¡Todo correcto!", "El número y la letra de DNI son correctos.").set({ transition: "fade" }).show();
			}
		}
	});

	// JS Ej 6
	$("#ej6").on("click", function () {
		// Array para almacenar las sumas de los lanzamientos
		let resultados = new Array(11).fill(0);

		for (let i = 0; i < 36000; i++) {
			let dado1 = Math.floor(Math.random() * 6) + 1;
			let dado2 = Math.floor(Math.random() * 6) + 1;

			let suma = dado1 + dado2;

			// Incrementar el contador correspondiente en el array de resultados
			resultados[suma - 2]++;
		}

		// Mostrar los resultados de las sumas
		let resultado = document.getElementsByClassName("codigo")[0];

		// Mostrar los resultados de las sumas
		for (let j = 0; j < resultados.length; j++) {
			let suma = j + 2;
			let apariciones = resultados[j];
			let mensaje = "Suma " + suma + ": " + apariciones + " apariciones";

			// Crear un elemento de párrafo y agregar el mensaje
			let parrafo = document.createElement("p");
			parrafo.textContent = mensaje;

			// Agregar el elemento de párrafo al div de resultados
			resultado.appendChild(parrafo);
		}
		alertify.success("<h3>Tiradas finalizadas</h3>");
	});

	// JS Ej 8
	$("#ej8").on("click", function () {
		cadena = prompt("Escribe una frase: ");

		// Elimino espacios y convierto a minúsculas
		cadena = cadena.replace(/\s/g, "").toLowerCase();

		// Separo toda la cadena, le doy la vuelta y la vuelvo a unir
		reverso = cadena.split("").reverse().join("");

		let codigo = "";

		if (cadena === reverso) {
			codigo = "<h1>El texto es un palíndromo</h1>";
			alertify.set("notifier", "position", "bottom-center");
			alertify.notify(`<h3>La frase introducida es: '${cadena}'</h3>`, 0.25);
		} else {
			codigo = "<h1>El texto no es un palíndromo</h1>";
			alertify.set("notifier", "position", "bottom-center");
			alertify.notify(`<h3>La frase introducida es: '${cadena}'</h3>`, 0.25);
		}

		$(".codigo").html(codigo);
	});

	// JS Ej 10
	$("#ej10").on("click", function () {
		let codigo = "";

		codigo = `<h1>Pasa el ratón por encima del país para ver su capital</h1>
		<h1><img src="images/spain.jpg" width="8%" onmouseenter="evento('España', 'Madrid')" /></h1>
		<h1><img src="images/portugal.jpg" width="8%" onmouseenter="evento('Portugal', 'Lisboa')" /></h1>
		<h1><img src="images/france.jpg" width="8%" onmouseenter="evento('Francia', 'París')" /></h1>
		<h1><img src="images/italy.png" width="8%" onmouseenter="evento('Italia', 'Roma')" /></h1>`;

		$(".codigo").html(codigo);
	});

	// JS Ej 2
	$("#ej2").on("click", function () {
		let codigo = "";

		codigo = `
		<style>
			.codigo {
		  	font-family: "Comic Sans MS", cursive;
		  	font-size: 10px;
		}
		</style>
		
		<h2>
			<label for="nombre">Ingresa tu nombre:</label>
			<input type="text" id="nombre" placeholder="Nombre" />
			<button onclick="mostrarSaludo()">Mostrar Saludo</button>
			<div id="saludo"></div>
		</h2>`;

		$(".codigo").html(codigo);
	});
});

// Funciones Ejercicio 21
function cambio(e) {
	const bg = e.style.backgroundColor;
	document.getElementsByClassName("codigo")[0].style.backgroundColor = bg;
}

function cambioB() {
	let fondo = document.getElementsByClassName("codigo")[0];
	fondo.style.backgroundColor = "white";
}

// Funcion Ejercicio 10
function evento(pais, capital) {
	alertify.alert("Ejercicio 10 JavaScript", `La capital de ${pais} es ${capital}.`).set({ transition: "fade" }).show();
}

// Funcion Ejercicio 2
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
	alertify.success("<h3>Saludo completado</h3>");
}
