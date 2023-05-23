$num = prompt("Dame un número: ");
document.write("<h3>Ejercicio 17</h3>");

for (i = 0; i <= 10; i++){
    document.write(`${$num}x` + i + "=" + i * $num + "<br>");
}