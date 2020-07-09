//-------------------------------------------------------------
console.log('DOM y Scripting');
let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
document = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];

//Cantidad de imagenes en el documento
elemento = document.images;
//seleccionar una imagen especifica
elemento = document.images[2];
//acceder al src de la imagen
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');

//Script en nuestro documento
elemento = document.scripts;

console.log(elemento);
console.log(' ');

//-----------------------------------------------------------
//Una pequeña practica con el document
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function(imagen){
    console.log(imagen);
});
console.log(' ');

//-----------------------------------------------------------

//Tambien podemos modificar nuestro documento de HTML,
//desde JavaScript de la siguiente manera

let encabezado;

//De la siguiente manera podemos obtener atributos de un elemento de 
//HTML, con el document.getElementById
encabezado = document.getElementById('encabezado');

//Tambien podemos modificar, los atributos de CSS de nuestro
//HTML por medio de JavaScript, de la siguiente manera
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

//Cambiamos el texto del encabezado
encabezado.innerText = 'Los mejores cursos';



//-------------------------------------------------------------------
//Tambien podemos utilizar Query Selector
console.log('Utilizando Query Selector');
const  enc = document.querySelector('#encabezado');
enc.style.background = '#333';
enc.style.color = '#fff';
enc.style.padding = '20px';
enc.textContent = 'Los Mejores Cursos';

//console.log(encabezado);

//query selector solo regresa el primer elemento de un
//conjunto de clases o elementos
//permite seleccionar por etiqueta
const  e = document.querySelector('img');
//console.log(e);

const  r = document.querySelector('.card img');
//console.log(r);
console.log('');

//--------------------------------------------------------
//
console.log('Seleccionando elementos');
let enlace;

//Primer hijo
enlace = document.querySelector('#principal a:first-child');
//Hijo en posicion dada
enlace = document.querySelector('#principal a:nth-child(3)');
//ultimo hijo
enlace = document.querySelector('#principal a:last-child');

console.log(enlace);

//----------------------------------------------------------------------
//Seleccion de multiples elementos con JavaScript