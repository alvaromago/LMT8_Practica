$(function () {
	// Código jQuery
	$("#ej17").on("click", function () {
		$num = prompt("Dame un número: ");

		let codigo = "";

		for (i = 0; i <= 10; i++) {
			codigo += `${$num}x` + i + "=" + i * $num + "<br>";
		}

		$(".codigo").html(codigo);
	});

	$("#ej18").on("click", function () {
		$num1 = prompt("Dame el primer número: ");
		$num2 = prompt("Dame el segundo número: ");

		let codigo = "";

		if ($num1 == $num2) {
			codigo = "<h1>Son iguales</h1>";
		} else {
			codigo = "<h1>Son distintos</h1>";
		}

		$(".codigo").html(codigo);
	});

	$("#ej19").on("click", function () {
		$fechaNacimiento = prompt("Dame tu fecha de nacimiento (DD/MM/AAAA):");
		$nacimiento = $fechaNacimiento.split("/");
		$age = 2023 - $nacimiento[2];

		let codigo = "";

		codigo = `<h1>Tienes ${$age} años</h1>`;

		$(".codigo").html(codigo);
	});

	$("#ej20").on("click", function () {
		let codigo = "";

		codigo += "<h1 id='frase1'>Haz click en esta frase</h1>";
		codigo += "<h1 id='frase2'>Haz doble click en esta frase</h1>";

		$(".codigo").html(codigo);

		document.getElementById("frase1").onclick = function (event) {
			alert("Has hecho click");
			event.preventDefault();
		};

		document.getElementById("frase2").ondblclick = function (event) {
			alert("Has hecho doble click");
			event.preventDefault();
		};
	});

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
	});

	$("#ej3").on("click", function () {
		let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
		let dni = parseInt(prompt("Introduce tu número de DNI: "));
		let letra = prompt("Introduce la letra de tu DNI: ").toUpperCase();

		if (dni > 99999999 || dni < 0) {
			alert("El número de DNI no es válido.");
		} else {
			let resto = dni % 23;
			let letraCalculada = letras[resto];

			if (letra != letraCalculada) {
				alert("La letra de DNI no es correcta.");
			} else {
				alert("El número y la letra de DNI son correctos.");
			}
		}
	});

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
	});

	$("#ej8").on("click", function () {
		cadena = prompt("Escribe una frase: ");

		cadena = cadena.replace(/\s/g, "").toLowerCase();

		reverso = cadena.split("").reverse().join("");

		let codigo = "";

		if (cadena === reverso) {
			codigo = "<h1>El texto es un palíndromo</h1>";
		} else {
			codigo = "<h1>El texto no es un palíndromo</h1>";
		}

		$(".codigo").html(codigo);
	});

	$("#ej10").on("click", function () {
		let codigo = "";

		codigo = `<h1>Pasa el ratón por encima del país para ver su capital</h1>
		<h1><img src="images/spain.jpg" width="8%" onmouseenter="evento('España', 'Madrid')" /></h1>
		<h1><img src="images/portugal.jpg" width="8%" onmouseenter="evento('Portugal', 'Lisboa')" /></h1>
		<h1><img src="images/france.jpg" width="8%" onmouseenter="evento('Francia', 'París')" /></h1>
		<h1><img src="images/italy.png" width="8%" onmouseenter="evento('Italia', 'Roma')" /></h1>`;

		$(".codigo").html(codigo);
	});

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

// Funciones Ejercicio 10
function evento(pais, capital) {
	alert(`La capital de ${pais} es ${capital}.`);
}

// Funciones Ejercicio 2
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
