//TIPOS DE DATOS EN JavaScript 

/*

EN JavaScript NO UTILIZAMOS COMO ES COMÚN EN OTROS LENGUAJES LOS TIPOS DE DATOS
COMO LO SON String, int, boolean, float, Object, ETC, JavaScirpt OCUPA
UN TIPADO DINAMICO, ES DECIR QUE NO NECESITAMOS DACLARAR QUE TIPO DE DATOS EN LAS
VARIABLES, EJEMPLO: "String nombre;"

*/
let val;

//CADENA DE TEXTO
val = 'Cadena De Texto';

//NUMERO ENTERO
val = 20;

//VALOR BOOLEANO
val = true;

//NULO
val = null;

//NO DEFINIDO
val = undefined;

//TAMBIEN PUEDE SER UN OBJETO.
val = {
    nombre: 'Luis'
};

console.log(val);

//-------------------------------------------------------------------------------
//undefined TAMBIEN ES UN TIPO DE DATO

let valor;

//TIPOS PRIMITIVOS DE DATOS
//Tipo string
valor = 'Luis';
//TIPO numbre, todos los numero en JavaScript son de tipo 'number'
valor = 20;
valor = 20.20;
valor = -30;
 
//BOOLEANOS
valor = true;
valor = false;

//null ----> regresa un tipo Object
valor = null;

//Symbol
valor = Symbol('Simbolo');


//TIPOS DE DATOS DE REFERENCIA NORMALMENTE OBJETOS 
//Arreglo
valor = [1,2,3,4];
//Objeto
valor = {
    nombre: 'Luis',
    profesion: 'Desarrollador Web'
};

//
valor = new Date();


console.log(typeof valor);




//-------------------------------------------------------------------------------

