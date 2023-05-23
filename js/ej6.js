// Array para almacenar las sumas de los lanzamientos
let resultados = new Array(11).fill(0);

// Realizar 36.000 lanzamientos
for (let i = 0; i < 36000; i++) {
  // Obtener números aleatorios entre 1 y 6
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  // Suma de los dados
  let suma = dado1 + dado2;

  // Incrementar el contador correspondiente en el array de resultados
  resultados[suma - 2]++;
}

// Mostrar los resultados de las sumas
let resultadosDiv = document.getElementById("resultados");

// Mostrar los resultados de las sumas
for (let j = 0; j < resultados.length; j++) {
  let suma = j + 2;
  let apariciones = resultados[j];
  let mensaje = "Suma " + suma + ": " + apariciones + " apariciones";

  // Crear un elemento de párrafo y agregar el mensaje
  let parrafo = document.createElement("p");
  parrafo.textContent = mensaje;

  // Agregar el elemento de párrafo al div de resultados
  resultadosDiv.appendChild(parrafo);
}
