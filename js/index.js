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
            #rojo, #azul, #amarillo, #verde, #marron {
                width: 50px;
                height: 50px;
                border: 1px solid black;
                display: inline-block;
            }
        </style>

        <div id="rojo" onmouseover="cambio(this)" style="background-color: red"></div>
        <div id="azul" onmouseover="cambio(this)" style="background-color: blue"></div>
        <div id="amarillo" onmouseover="cambio(this)" style="background-color: yellow"></div>
        <div id="verde" onmouseover="cambio(this)" style="background-color: green"></div>
        <div id="marron" onmouseover="cambio(this)" style="background-color: brown"></div>`;

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

	$("#ej6").on("click", function () {});

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

	$("#ej10").on("click", function () {});

	$("#ej2").on("click", function () {});
});

function cambio(e) {
	const bg = e.style.backgroundColor;
	document.getElementsByClassName("codigo")[0].style.backgroundColor = bg;
}
