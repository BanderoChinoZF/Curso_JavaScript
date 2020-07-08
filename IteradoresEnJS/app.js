//FOR LOOPS (Ciclos con el for)

console.log('Utilizando un ciclo For Ejemplo 1');
for(let i=0; i<10; i++)
{
    console.log(`Numero: ${i}`);

}

console.log('');
console.log('');
console.log('');

//OTRO EJEMPLO CON EL CICLO FOR
console.log('Utilizando un ciclo For Ejemplo 2');
for(let i=0; i<10; i++)
{
    if(i == 5)
    {
        console.log('Voy en el 5 we xD');
    }
    console.log(`${i}`);

}

console.log('');
console.log('');
console.log('');

//OTRO EJEMPLO DE FOR LOOP
console.log('Utilizando un ciclo For Ejemplo 3');
for(let i=0; i<10; i++)
{
    if(i % 2 == 0)
    {
        console.log(`El numero ${i} es Par.`);
    }else
    {
        console.log(`El numero ${i} es Impar`);
    }

}

console.log('');
console.log('');
console.log('');

//---------------------------------------------------------------------------------------
const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

console.log('Utilizando un ciclo For Ejemplo 4');
for(let i=0;i < arregloProductos.length; i++)
{
    console.log(`Tu producto ${arregloProductos[i]} fue agregado.`);
}

console.log('');
console.log('');
console.log('');

//---------------------------------------------------------------------------------------
//UTILIZANDO EL CICLO WHILE
let i = 0;

console.log('Ejemplo 1 con un cilo While');
while(i<10)
{
    console.log(`Numero: ${i}`);
    i++;
}

console.log('');
console.log('');

let r = 0;

console.log('Ejemplo 2 con un cilo While');
while(r<10)
{
    if(r===5)
    {
        console.log('Cinco');
        r++;
        continue;
    }

    console.log(`Numero: ${r}`);
    r++;
}

console.log('');
console.log('');
console.log('');

//OTRO EJEMPLO DE RECORRIDO CON UN WHILE

//Declramos un arreglo
const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];

i=0;

console.log('Ejemplo 3 con un cilo While');
while(i < musica.length)
{
    console.log(`Reproduciendo la cancion: ${musica[i]}`);
    i++;
}

console.log('');
console.log('');
console.log('');

//--------------------------------------------------------------------------
//EJEMPLO UTILIZANDO UN DO-WHILE
i = 0;

console.log('Utilizando un ciclo Do-While');
do
{
    console.log(`Numero: ${i}`);
    i++;

}while(i < 10);

console.log('');
console.log('');
console.log('');

//----------------------------------------------------------------------------
//RECORRER UN ARREGLO CON UN 

console.log('Recorriendo el arreglo con un for');
const pendientes = ['Tarea','Comer','Proyecto','Aprender JavaScript'];

for(let i=0; i<pendientes.length; i++)
{
    console.log(pendientes[i]);
}

console.log('');
console.log('');

//forEach
console.log('Recorriendo el arreglo con un forEach');
pendientes.forEach(
    function(pendiente, index)
    {
        console.log(` ${index}: ${pendiente} `);

    });

console.log('');
console.log('');

//Map para recorrer un arreglo de objetos
console.log(' Utilizando Map para recorrer un arreglo de objetos ');

//Creamos nuestro arreglo d objetos
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Refresco'},
    {id: 4, producto: 'Cerveza'},
    {id: 5, producto: 'Guitarra'},
    {id: 6, producto: 'Teclado'},
    {id: 7, producto: 'Computadora'},
    {id: 8, producto: 'SmartPhone'},
];

console.log('Mostrando el arreglo de objetos');
console.log(carrito);

console.log('');
console.log('');

const nombreProducto = carrito.map(
    function(carrito)
    {
        return carrito.producto;

    }
);

console.log(nombreProducto);

console.log(' ');
console.log(' ');

//---------------------------------------------------------------------------
console.log('Utilizando un forEach'); 
const automovil = {
     modelo: 'Mustang',
     motor: 'V8',
     anio: '2015',
     marca: 'Ford'
 };

for(let auto in automovil)
{
    console.log(`${auto}: ${automovil[auto]}`);
}
console.log(' ');
console.log(' ');

//---------- ITERADORES YA INCLUIDOS EN LENGUAJE JavaScript ---------------------
console.log('Iteradores ya incluidos en JavaScript');

const ciudades = ['Londres','New York','Madrid','Mexico'];

//El objeto Set permite almacenar valores únicos de cualquier tipo, 
//incluso valores primitivos u referencias a objetos.
const ordenes = new Set([123,231,131,102]);

//El objeto Map almacena pares clave/valor.
const datos = new Map();

datos.set('nombre','Luis Angel');
datos.set('profesion','Desarrollador Web');
//console.log(datos);

//Iterador entries(), en el caso de entries, nos retorna llave-valor,
//o clave-valor.

//Entries para ciudades
console.log('Entries para ciudades');
for(let entrada of ciudades.entries())
{
    console.log(entrada);
}
console.log('');

//Entries para las ordenes
console.log('Entries para ordenes');
for(let entrada of ordenes.entries())
{
    console.log(entrada);
}
console.log('');
//Recordar que para la funcion set la clave es el mismo valor
//por lo cual los valores son unicos.

//Entries para el MAP
console.log('Entries para el MAP');
for(let entrada of datos.entries())
{
    console.log(entrada);
}
console.log('');

//-------------------------------------------------------------
//El Iterador values(), este iterador nos regresará solo datos,
//o mejor dicho solo los valores sin las claves.
//Values para ciudades
console.log('Values para ciudades');
for(let entrada of ciudades.values())
{
    console.log(entrada);
}
console.log('');

//Values para las ordenes
console.log('Values para ordenes');
for(let entrada of ordenes.values())
{
    console.log(entrada);
}
console.log('');
//Recordar que para la funcion set la clave es el mismo valor
//por lo cual los valores son unicos.

//Values para el MAP
console.log('Values para el MAP');
for(let entrada of datos.values())
{
    console.log(entrada);
}
console.log(' ');

//------------------------------------------------------------------
//Iterador Keys, este tipo de iterador nos retorna solo las claves
//de los conjuntos de datos
//Keys para ciudades
console.log('Iterador Keys en JavaScript');
console.log('Keys para ciudades');
for(let entrada of ciudades.keys())
{
    console.log(entrada);
}
console.log('');

//Keys para las ordenes
console.log('Keys para ordenes');
for(let entrada of ordenes.keys())
{
    console.log(entrada);
}
console.log('');
//Recordar que para la funcion set la clave es el mismo valor
//por lo cual los valores son unicos.

//Keys para el MAP
console.log('Keys para el MAP');
for(let entrada of datos.keys())
{
    console.log(entrada);
}
console.log(' ');

//------------------------------------------------------------------
//Recorrer un String

//En JavaScript podemos recorrer un String de la siguiente manera
console.log('Recorriendo un String en JavaScript');

const mensaje = "Aprendiendo JavaScript";

for(let letra of mensaje)
{
    console.log(letra);
}
console.log();

//----------------------------------------------------------------------
const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces)
{
    console.log(enlace.href);
}



 




