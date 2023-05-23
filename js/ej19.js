$fechaNacimiento = prompt("Dame tu fecha de nacimiento (DD/MM/AAAA):");
$nacimiento = $fechaNacimiento.split("/");
$age = 2023 - $nacimiento[2];

document.write("<h3>Ejercicio 19</h3>");

document.write(`Tienes ${$age} años`);