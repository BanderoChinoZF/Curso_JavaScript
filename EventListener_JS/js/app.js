//EventListener al buscador
/*
document.querySelector('#submit-buscador').addEventListener('click',function(e){
    //La funcion preventDefault, evitamos que se ejecute
    //el redireccionamiento que se realiza por ejemplo la accion del formulario
    e.preventDefault();
    alert('Buscando Cursos!');
});

//Otra forma de realizar el EventListener es de la siguiente manera 

document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e)
{
    e.preventDefault();

    console.log('Desde la funcion ejecutar boton!');

}
*/

//Podemos tambien enviar a consola, los atributos de un elemento
//una vez que se halla activado el EventListener que se agrego al mismo
/*
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);

function ejecutarBoton(e)
{
    e.preventDefault();
    let elemento;
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;


    console.log(elemento);
};

//------------------------------------------------------------------------------------------------
//Otro Ejemplo podria ser
document.querySelector('#encabezado').addEventListener('click',function(e){
    e.target.innerText = 'Nuevo Encabezado';
    e.target.innerText = 2 + 2;

    console.log(e.target.innerText);
});
*/

//---------------------------------------------------------------------------------------------------------------
//OTROS TIPOS DE EVENTOS QUE HAY CON EL MOUSE EN JavaScript

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//EventListener = click
//boton.addEventListener('click',obtenerEvento);

//EventListener = double click
//boton.addEventListener('dblclick',obtenerEvento);

//EventListener = Mouse Enter
//Se activa deslizando el mouse sobre el elemento
//boton.addEventListener('mouseenter',obtenerEvento);

//EventListener = Mouse Leave
//Se activara el eento cuando el cursos salga del elemento
//boton.addEventListener('mouseleave',obtenerEvento);

//EventListener = Mouse Over
//Se activara al deslizar el cursos en el elemento al que agregemos
//este eventlistener
//boton.addEventListener('mouseover',obtenerEvento);

//EventListener = Mouse Out
//Es muy parecido al Mouse Leave, se activa al salir del elemento
//boton.addEventListener('mouseout',obtenerEvento);

//EventListener = Mouse Down
//Parecido al click
//boton.addEventListener('mousedown',obtenerEvento);

//EventListener = Mouse Up
//Se activa el evento al soltar el click en nuestro elemento seleccionado
//boton.addEventListener('mouseup',obtenerEvento);

//EventListener = Mouse Move
//El evento se activará con todo el moviemiento del mouse dentro del elemento
encabezado.addEventListener('mousemove',obtenerEvento);


function obtenerEvento(e)
{
    console.log(`EVENTO: ${e.type}`);
}


//---------------------------------------------------------------------------------------
//EventListeners para los input

const busqueda = document.querySelector('#buscador');

//EventListener = keydown
//Este evento se ejecutara cada que presiones una tecla, en este ejemplo
//se ocupa dentro de un input de busqueda
//busqueda.addEventListener('keydown',obtenerEventoInput);

//EventListener = keyup
//Este evento se ejecutara cuando dejes de presionar una tecla
//busqueda.addEventListener('keyup',obtenerEventoInput);

//EventListener = keypress
//El evento se activara cada que presionemos una tecla
//busqueda.addEventListener('keypress',obtenerEventoInput);

//EventListener = focus
//Este evento se activará cuando des click sobre el input
//busqueda.addEventListener('focus',obtenerEventoInput);

//EventListener = blur
// Este evento se activará una vez que el usuario de un click fue del input
//este evento es utilizado para validar las entradas en los mismos
//busqueda.addEventListener('blur',obtenerEventoInput);

//EventListener = cut
//Este evento se activara cuando el usuario corte un texto dentro d eun input
//busqueda.addEventListener('cut',obtenerEventoInput);

//EventListener = copy
//Este evento se activará cuando el usuario presione CTRL + C, o copie algo con el menu
//dentro de un input, funciona en ambos casos
//busqueda.addEventListener('copy',obtenerEventoInput);

//EventListener = paste
//se activara cuando peguen un texto, en un elemento de entrada
//busqueda.addEventListener('paste',obtenerEventoInput);

//EventListener = input
//Este evento es una recopilacion de todos los anteriores mencianados, se activara
//realizando cualquiera de los anteriores mencionados
busqueda.addEventListener('input',obtenerEventoInput);

//EventListener = change
//Este tipo de evento esta mas dirigido a los selec-option de html
//busqueda.addEventListener('change',obtenerEventoInput);

function obtenerEventoInput(e)
{
    //console.log(busqueda.value);
    console.log(`EVENTO: ${e.type}`);
}



//-------------------------------------------------------------------------------------------------
//Algo que se puede presentar con los eventos es el llamado Event Bubbling, 
//o mejor llamado burbuja de eventos el cual ejecuta los eventos de los hijos
//a continuacion un ejemplo, esta propagacion de eventos se soluciona
//con la funcion stopPropagation()

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click',function(e){
    console.log('Click en Card');
    e.stopPropagation();
});

infoCurso.addEventListener('click',function(e){
    console.log('Click en Info Curso');
    e.stopPropagation();
});

agregarCarrito.addEventListener('click',function(e){
    console.log('Click en Agregar Carrito');
    e.stopPropagation();
});


