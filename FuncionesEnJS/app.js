//FUNCIONES EN JavaScript

//DECLARANDO UNA FUNCION EN JavaScript
function saludar()
{
    console.log('Hola Soy Una Funcion');
}

saludar();

//FUNCION CON PASANDO UN PARAMETRO
function saludar2(nombre)
{
    console.log(`Hola ${nombre}`);
}

saludar2('Dulce');
saludar2('Monica');
saludar2('Berenice');

//CREANDO UNA FUNCION PARA REALIZAR UNA SUMA
function sumar(a,b)
{
    console.log(a+b);
}

sumar(1,2);
sumar(3,4);

//VARACION DE LA FUNCION SUMAR, RETORNANDO EL VALOR DE LA SUMA
function sumaR(a,b)
{
    return a+b;
}

console.log(' ');

let suma;

    suma = sumaR(1,2);
    suma = sumaR(5,8);

console.log(suma);

//CREANDO UNA FUNCION CON VALORES POR DEFECTO
//SI EN UNA FUNCION NO PASAN LOS ARGUMENTOS ADECUADOS O DEFINITIVAMENTE
//NO LOS LLEGARAN A PASAR PODEMOS DEFINIR QUE VALOR O VALORES TOMARAN POR
//DEFECTO COMO EN EL SIGUIENTE EJEMPLO nombre = 'Visitante'
function saludo(nombre = 'Visitante')
{
    return `Hola ${nombre}`
}

let s;

    //s = saludo('Carolina');
    s = saludo();

console.log(s);

console.log(' ');
console.log(' ');
console.log(' ');

//Function Expression
const sum = function(a = 3 ,b = 4)
{
    return a+b;
};

console.log( sum(1,2) );
console.log( sum(5) );


console.log(' ');
console.log(' ');
console.log(' ');

//--------------------------------------------------------------------------------

//FUNCIONES QUE SE DECLARAN E INVOCAN INMEDIATAMENTE (IIFE)
(function(tecnologia)
{
    //console.log('Creando un IIFE');
    console.log(`Aprendiendo ${tecnologia}`);

})('JavaScript');

console.log(' ');
console.log(' ');
console.log(' ');

//METODOS DE PROPIEDAD
//CUANDO UNA FUNCION ESTA DENTRO DE UN OBJETO A ESTA SE LE DENOMINA METODO
const musica = {

    reproducir: function(id){
        console.log(`Reproduciendo Canción #${id}`);
    },
    pausar: function(){
        console.log(`Pausa a la musica`);
    }
};

//LOS METODOS TAMBIEN PUEDEN GUARDARSE O CREARSE FUERA DEL OBJETO
musica.borrar = function(id){
    console.log(`Borrando la canción con el ID: ${id}`);
};

musica.reproducir(30);
musica.pausar();
musica.borrar(2);

//-------------------------------------------------------------------------------
//UTILIZAMOS BLOQUE try-catch PARA CAPTURAR ERRORES QUE SE PUEDAN PRESENTAR EN 
//NUESTRAS FUNCIONES QUE ESTEMOS DEFINIENDO

try{
    algo();
}catch(error)
{
    //MANDAMOS A LA CONSOLA UN MENSAJE DE ERROR
    console.log(error);
}finally{
    //EN ESTA PARTE DECLARAMOS QUE ES LO QUE HARÁ SI SE ENCUENTRA CON UN ERROR
    console.log('No le importa, ejecuta de todos modos.');
}

function obtenerClientes()
{
    console.log('Descargnado........');

    setTimeout(function()
    {
        console.log('Completo');
    }, 3000);
}

obtenerClientes();






