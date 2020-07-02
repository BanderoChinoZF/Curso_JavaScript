//En JavaScript existen 3 tipos de formas de crear variables
//las cuales pueden ser 'var' 'let' 'const'

var name = 'Luis';
var name = 'Julia';

//Tenemos ahora el tipo de variable let, el cual por su contra parte var
//una vez que se clara esta puede sermodificada una asignando otro valor
//pero no puede volver a ser declarada como pasa en el caso de var.

/*
DE ESTA FORMA ES INCORRECTA

-let producto = 'Papel Higienico';
-let producto = 'Shampoo';

*/

//FORMA CORRECTA PARA MODIFICAR UN VALOR UTILIZANDO LA VARIABLE let
let producto = 'Papel Higienico';
    producto = 'Refresco';


/*

POR ULTIMO TENEMOS LA VARIABLE const ESTE VARIABLE NOS SIRVE PARA DECLARAR UN VALOR 
EL CUAL NO VA A CAMBIAR SE MANTENDRA DE MANERA CONSTANTE EN EL PROGRAMA.

*/

const pi = 3.14151312;

console.log('Variable con var');
console.log(name);

console.log('Variable con let')
console.log(producto);

console.log('Varible con const');
console.log(pi);

//SIQ UEREMOS UTILIZAR STRING EN JavaScript LO PODEMOS UTILIZAR DE LA SIGUIETNE MANERA.

let nombre, mensaje;

//PODEMOS INDICAR QUE SON STRING O CADENAS DE TEXTO CON 
//LAS COMILLAS SIMPLES '' O CON LAS COMILLAS DOBLES ""
nombre = 'Diana Laura';
console.log(nombre);

nombre = "Guadalupe";
console.log(nombre);

//CUANDO UTILICES COMILLAS DOBLES O SIMPLES PUEDES UTILIZAR LA DIAGONAL INVERTIDA 
//'\' PARA ESCAPAR A LAS COMILLAS (DOBLES O SIMPLES)
mensaje = 'Y Entonces dije \' Buenas Tardes \'';
console.log(mensaje);

//O CON LAS COMILLAS INVERTIDAS ALT+96 `` LA VENTAJA DE LAS COMILLAS INVERTIDAS 
//ES QUE PUEDES UTILIZAR DENTRO DE LA CADENA DECLRADA LAS COMILLAS SIMPLES O DOBLE
mensaje = `"Hola Amigos!!" 'Esto es JavaScript'`;
console.log(mensaje);

//PODEMOS CONCATENAR VARIABLES O STRING (CADENA DE TEXTO)
mensaje = "Java" + 'Script';

//CONCATENANDO VARIABLES    
let aprendiendo = 'Aprendiendo',
    tecnologia = 'JavaScript';

console.log(aprendiendo + ' ' + tecnologia);

//TAMBIEN PODEMOS OCUPAR ESTA OTRA FORMA
console.log(`${aprendiendo} ${tecnologia}`);


//MAS OPCIONES PARA LOS STRING (CADENAS DE TEXTO)
//concat(), RECIBE PARAMETROS DE TIPO CADENA Y LOS CONCATENA
console.log(tecnologia.concat(' ','Es Genial'));

//PODEMOS CONVERTIR NUESTRO TEXTO A MAYUSCULAS UTILIZANDO LA FUNCION
//toUpperCase()
console.log(tecnologia.toUpperCase());

//EN SU CONTRA PARTE PARA CONVERTIR LA CADENA A MINUSCULA UTILIZAMOS
//toLowerCase()
console.log(tecnologia.toLowerCase());

//TAMBIEN PODEMOS BUSCAR PALABRAS DENTRO DE UNA CADENA DE TEXTO QUE SEA LARGA
//CON LA FUNCION indexOf('palabra_buscar') EN CASO DE QUE EXSITA NOS REGRESARÁ
//LA POSICION EN LA QUE SE ENCUENTRA, Y DE LO CONTRARIO NOS REGRESARÁ -1
mensaje = 'Aprendiendo JavaScript, CSS, HTML para hacer Front-End';
console.log(mensaje.indexOf('JavaScript'));

//TAMBIEN PODEMOS CORTAR CADENAS LARGAS CON LA FUNCION DE JavaScript
//substring(inicio,termina)
console.log(mensaje.substring(3,21));

//TAMBIEN PODEMOS OCUPAR LA FUNCION slice(inicio,termina)
//PODEMOS PONER NUMEROS NEGATIVOS LOS CUAL NOS CORTARA DE DERECHA-IZQUIERDA
console.log(mensaje.slice(-30));

//OTRA OPCION QUE TENEMOS PARA LAS CADENAS ES CON LA FUNCION 
//split('simbolo_a_buscar') ESTA FUNCION NOS PERMITE BUSCAR ESPACION O COMAS EN 
//UNA CADENA LARGA Y SEPARAR LOS STRING POR PALABRAS, NOS RETORNA UN ARREGLO
//CON DICHAS PALABRAS YA SEPARADAS

//SEPARAMOS POR ESPACIOS
console.log(mensaje.split(' '));

//SEPARAMOS POR LA CONINCIDENCIA DE COMA Y ESPACIO
console.log(mensaje.split(', '));

//OTRA OPCION QUE TENEMOS DE TRATAMIENTO PARA LAS CADENAS String ES LA FUNCION
//replace('valor_a_buscar','valor_a_reemplazar') COMO SU NOMBRE LO INDICA BUSCA
//EN LA CADEMA UNA CONINCIDENCIA Y ESTA ES REEMPLAZADA POR EL VALOR QUE DESEAMOS.
console.log(mensaje.replace('CSS','PHP'));

//OTRA FUNCION LLAMADA includes('cadena_buscar') ESTA FUNCION RETORNARÁ
//VERDADERO (true) O FALSO (false), SI LA PALABRA O CADENA SE ECUENTRA 
//DENTRO DE LA CADENA EN LA QUE BUSCAMOS.
console.log(mensaje.includes('CSS'));

//TAMBIEN TENEMOS OTRA FUNCION CON LA CUAL PODEMOS REPETIR UN NUMERO DE VECES
//UNA CADENA CON LA FUNCION repeat(numero_de_veces)
let mensajeA = 'JavaScript' + ' ';
console.log(mensajeA.repeat(10));









