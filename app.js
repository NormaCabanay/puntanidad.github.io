// Seleccionar los elementos HTML.
let botonInicialElem = document.getElementById('boton-inicial');
let inicioElem = document.getElementById('inicio');
let frasesContenedorElem = document.getElementById('frases-contenedor');
let botonElem = document.getElementById('boton-cambiar-frase');
let fraseElem = document.getElementById('frase');
let autorElem = document.getElementById('autor');
// Para generar indices aleatorios.
function generarEnteroAleatorio(minimo, maximo) {
  minimo = Math.ceil(minimo);
  maximo = Math.floor(maximo);
  // Incluye el minimo pero no el maximo.
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

// Seleccionar una frase aleatoria.
function cambiarFrase() {
  let indiceAleatorio = generarEnteroAleatorio(0, frase.length);
  fraseElem.textContent = `"${frase[indiceAleatorio].texto}"`;
  autorElem.textContent = frase[indiceAleatorio].autor;
}

// Para seleccionar una frase de forma aleatoria
// cuando se inicia la aplicacion.
let indiceAleatorio = generarEnteroAleatorio(0, frase.length);
cambiarFrase();

botonInicialElem.addEventListener('click', function() {
  inicioElem.classList.add('oculto');
  frasesContenedorElem.classList.remove('oculto');
  cambiarFrase();
});
// Para cambiar la frase al hacer click en el boton.
botonElem.addEventListener('click', cambiarFrase);
