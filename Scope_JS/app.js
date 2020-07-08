var a = 'a';
let b = 'b';
const c = 'c';

//Scope de una funcion
function funcionScope()
{
    var a = 'A';
    let b = 'B';
    const c = 'C';

    console.log('FUNCION: ' + a,b,c);
}
funcionScope();

//Scope de bloque
if(true)
{
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';

    console.log('BLOQUE: ' + a,b,c);
}

console.log('GLOBALES: ' + a,b,c);

/*Recordar que el definir una variable como var, esta
* puede ser modficada en cualquier parte de un bloque
* de codigo en nuestro programa, por lo cual se recomienda
* ocupar con cuidado, como defines una variable
*/

