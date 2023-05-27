cadena = prompt("Escribe una frase: ");

cadena = cadena.replace(/\s/g, "").toLowerCase();

reverso = cadena.split("").reverse().join("");

if (cadena === reverso) {
  document.write("<h2>El texto es un palíndromo</h2>");
} else {
  document.write("<h2>El texto no es un palíndromo</h2>");
}
