//------------------------------------------------------------------
//Aprendiendo JavaScript Tema: Windows Object
/*
//prompt
const nombre = prompt();

console.log(`Bienvenido ${nombre}`);

//confirm
if( confirm('¿Eliminar?') )
{
    console.log('Eliminado prro :v');

}else{

    console.log('No se elimino -> F');

}
*/

//---------------------------------------------------------------
console.log('Altura y Ancho de la ventana del navegador');
let altura,
    anchura;

    altura = window.outerHeight;
    anchura = window.outerWidth;

    console.log(altura);
    console.log(anchura);
    console.log('');

//ESTOS ATRIBUTOS NOS DAN LOS VALORES DE ANCHO Y ALTURA
//DE TODA LA VENTANA DEL NAVEGADOR.

//----------------------------------------------------------------
console.log('Altura y Acnho del HTML');
let alt,
    anch;

    alt = innerHeight;
    anch = innerWidth;

    console.log(alt);
    console.log(anch);
    console.log('');

//-----------------------------------------------------------------
//Ubicacion
/*
Este atributo de window object en javascript, nos retornará un
objeto con diferente informacion acerca de la ventana
*/

let ubicacion;

ubicacion = window.location.search;

//Para redireccionar por JavaScript se hace de la
//siguiente manera
//window.location.href = 'http://facebook.com';

//Para redireccionar a una pagina antes visitada
//segun el historial del navegador
//window.history.go(-1);

ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;

ubicacion = window.navigator.language;

console.log(ubicacion);


