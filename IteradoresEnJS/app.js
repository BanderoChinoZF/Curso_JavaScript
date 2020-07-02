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

console.log(carrito);

const nombreProducto = carrito.map(
    function(carrito)
    {
        return carrito.producto;

    }
);

console.log(nombreProducto);

//---------------------------------------------------------------------------
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
 

 




