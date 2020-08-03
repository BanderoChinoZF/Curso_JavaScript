//Traversing en JavaScript, es donde recorremos los elementos de un documento 
//HTML, utilizando selectores, como se mostrara a continuacion

const navegacion = document.querySelector('#principal');

//El nodeType retorna un numero con el tipo que es
console.log(navegacion.children[0].nodeType);

//  1 = Elementos
//  2 = Atributos
//  3 = Text Node
//  8 = Comentarios
//  9 = documentos
// 10 =  doctype

const barra = document.querySelector('.barra');

console.log(barra.children[0].children[0].children);

//--------------------------------------------------------------------------------------------------------------------------

const cursos = document.querySelectorAll('.card');

console.log(cursos[0].childElementCount);

//TRAVERSING DEL PADRE AL HIJO EN JavaScript
const enlaces = document.querySelectorAll('.enlace');

console.log(enlaces[0].parentElement);

//un pequeño ejemplo JS Moderno
const cur = document.querySelectorAll('.card');

console.log(cur[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola Desde Traversing!');

//Te permite recorrer todos los elementos del documento mediante los padres y los hijos
//que hay en nuestro HTML

console.log('');
console.log('');
console.log('');

//---------------------------------------------------------------------------------------------------------------------------------
//CREANDO ELEMENTOS CON JavaScript

const x = document.createElement('a');

//agregamos una clase al documento
x.className = "enlace";
//añadimos un id a nuestro elemento
x.id = "nuevo-id";
//Añadimos atributo de href al elemento
x.setAttribute('href','#');
//Añadir texto al elemento
x.textContent = "Nuevo Enlace";

//AGREGARLO AL DOCUMENTO HTML
document.querySelector('#secundaria').appendChild(x);


console.log(x);

