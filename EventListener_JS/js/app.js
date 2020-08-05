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