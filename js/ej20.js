document.write("<h3>Ejercicio 20</h3>");
document.write("<p id='frase1'>Haz click en esta frase</p>");
document.write("<p id='frase2'>Haz doble click en esta frase</p>");

document.getElementById("frase1").onclick = function(event) {
    alert("Has hecho click");
    event.preventDefault();
}

document.getElementById("frase2").ondblclick = function(event) {
    alert("Has hecho doble click");
    event.preventDefault();
}