let letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
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
