//ARREGLOS EN JS

//CREAR UN ARREGLO (YA SEA DE NUMEROS O PALABRAS(String))
const numeros = [10,20,30,40,50,60];
console.log(numeros);

const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo');
console.log(meses);

//ARREGLO CON DIFERENTE TIPOS DE DATOS
const mezclado = ['Hola', 20, true, null,false, undefined];
console.log(mezclado);


//TRABAJANDO UN POCO MAS CON ARREGLOS
console.log(meses.length);

//VERIFICAR QUE ES UN ARREGLO EN JavaScript
//RETORNA UN VALOR true O false SI ES A UN ARREGLO O NO.
console.log(Array.isArray(meses));

//IMPRIMIENDO UN VALOR ESPECIFICO DEL ARREGLO (POSICION)
console.log(meses[3]);

//AGREGAMOS UN ELEMENTO A NUESTRO ARREGLO meses
meses[5] = 'Junio';
//TAMBIEN PODEMOS AGREGAR ELEMENTOS DE LA SIGUIENTE FORMA
meses.push('Julio');
console.log(meses);


console.log(' ');
console.log(' ');
console.log(' ');


//ENCONTRAR UN ELEMENTO EN EL ARREGLO
console.log(meses.indexOf('Abril'));

//AGREGAMOS AL INICIO DEL ARREGLO
meses.unshift('Meses 0');

//ELIMINAR UN ELEMENTO DEL ARREGLO
meses.pop();
//ELIMINAR EL PRIMER ELEMENTO EN EL ARREGLO
meses.shift();

//QUITAR UN RANGO DE ELEMENTOS EN UN ARREGLO
meses.splice(2,1);

//REVERTIR EL ARREGLO
meses.reverse();

console.log(meses);

//UNIR UN ARREGLO CON OTRO
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));


console.log(' ');
console.log(' ');
console.log(' ');

//-------------------------------------------------------------------------------
//DECLARAMOS UN ARREGLO DE ARREGLO DE NOMBRE DE FRUTAS.
const frutas = ['Platano','Manzana','Fresa','Naraja','Zanahoria'];

frutas.sort();

console.log(frutas);

//ORDENANDO UN ARREGLO DE NUMEROS
arreglo1 = [2,4,5,7,8,9,6,3,15,26,48,36,18,74,63];

//LA FUNCION sort NO ORDENA ADECUADAMENTE UN ARREGLO DE NUMEROS
//TENDRIA QUE SER DE LA SIGUIENTE MANERA.
arreglo1.sort(
    function(x,y)
    {
        return x-y;
    }
);

console.log(arreglo1);


console.log(' ');
console.log(' ');
console.log(' ');

//-------------------------------------------------------------------------------

const num = [1,2,3];

num[0] = 4;
num.push(5);

//NO PODEMOS ASIGNAR NUMEROS VARIABLES A UN ARREGLO DECLARADO COMO const SOLO
//PUEDE ASIGNARSE ACCEDIENDO A LOS VALORES DE CADA POSISICION DEL ARREGLO

console.log(num);





