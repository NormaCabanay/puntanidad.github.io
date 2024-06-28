// Seleccionar los elementos HTML.
let botonInicialElem = document.getElementById('boton-inicial');
let inicioElem = document.getElementById('inicio');
let frasesContenedorElem = document.getElementById('frases-contenedor');
let botonElem = document.getElementById('boton-cambiar-frase');
let fraseElem = document.getElementById('frase');
let autorElem = document.getElementById('autor');
let botonSalirElem = document.getElementById('boton-salir');
// Para generar indices aleatorios.
function generarEnteroAleatorio(minimo, maximo) {
  minimo = Math.ceil(minimo);
  maximo = Math.floor(maximo);
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}
//cambia la frase al cliquear boton cambiar frase
function cambiarFrase() {
  let indiceAleatorio = generarEnteroAleatorio(0, frase.length);
  fraseElem.textContent = `"${frase[indiceAleatorio].texto}"`;
  autorElem.textContent = frase[indiceAleatorio].autor;
}
botonElem.addEventListener('click', cambiarFrase);
//abre el div de las frase al cliquear boton ver frase
botonInicialElem.addEventListener('click', function() {
  inicioElem.classList.add('oculto');
  frasesContenedorElem.classList.remove('oculto');
  cambiarFrase();
});

// vuelve al anicio al cliquear boton salir
botonSalirElem.addEventListener('click', function() {
  frasesContenedorElem.classList.add('oculto');
  inicioElem.classList.remove('oculto');
});