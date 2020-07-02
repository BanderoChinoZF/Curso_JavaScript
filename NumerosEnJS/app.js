// NUMEROS EN JavaScript

const   numero1 = 30,
        numero2 = 20,
        numero3 = 20.20,
        numero4 = .1020,
        numero5 = -3;

let resultado;

//SUMA
resultado = numero1 + numero2;

//RESTA
resultado = numero1 + numero2;

//MULTIPLICACIÓN
resultado = numero1 * numero2;

//DIVISIONES
resultado = numero1 / numero2;

//MODULO, EL MODULO ES EL RESIDUO DE UNA DIVISION Y SE REPRESENTA POR EL SIMBOLO 
// DE PORCENTAJE %
resultado = numero1 % numero2;

//TENEMOS UNA BIBLIOTECA LLAMADA Math Y EN ELLA ECONTRAMOS VARIAS FUNCIONES
//NUMERO PI
resultado = Math.PI;

//RAIZ CUADRADA DE UNA NUMERO
resultado = Math.sqrt(144);

//NUMERO ABSOLUTO
resultado = Math.abs(numero5);

//POTENCIA DE UNA NUMERO CON Math.pow(numero_base, potencia_del_numero);
resultado = Math.pow(8, 3);

//IMPORTANTE
//NUMERO MINIMO DE UNA SERIE DE NUMEROS DADA
resultado = Math.min(3,5,2,1,4,8,7,9,6,);

//NUMERO MAXIMO DE UNA SERIE DE NUMEROS
resultado = Math.max(3,5,2,1,4,8,7,9,6,);

//UN NUMERO ALEATORIO
resultado = Math.random();

//-------------------------------------------------------------------------------
//ORDEN DE LAS OPERACIONES
resultado = 10 + 20 * 5;
resultado = (10 + 20) * 5;

//EL USOS DE PARENTESIS ES MUY IMPORTANTE SEGUN LA LOGICA DE OPERACIONES QUE SIGAS
//O REGLAS DE NEGOCIO QUE TENGAS
resultado = (10 + 20 + 20 + 10 + 40) * .20;

//-------------------------------------------------------------------------------
 let puntaje;

 /*

 EN JavaScript TENEMOS LA OPCION DE OCUPAR LOS OPERADORES DE INCREMENTO EN 1 ++
 ATEPONIENDOLOS A LA VARIABLE O DESPUES DE ESTA.

 ++puntaje;  -----> PRIMERO HACE LA SUMA EN 1 Y DESPUES IMPRIME;

 puntaje++;  -----> PRIMERO IMPRIME Y DESPUES REALIZA LA SUMA AL VALOR.

 TAMBIEN PODEMOS OCUPAR EL OPERADOR += PARA SUMER VALORES A LA MISMA VARIABLE

 */



//PUEDES OCUPAR ESTA LINEA DE CODIGO DESPUES DE CADA MODIFICACION
//U OPERACION PARA VER CUAL ES EL RESULTADO DE CADA OPERACION.
console.log(resultado);



