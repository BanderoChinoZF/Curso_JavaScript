//OPERADORES DE COMPARACION EN JavaScript

const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

//ESTOS OPERADORES RETORNAN UN VALOR booleano
//MAYOR QUE
console.log(numero1 > numero2);
//MENOR QUE
console.log(numero1 < numero2);

//COMPARADOR DE IGUAL
//EL COMPARADOR == NO ES TAN ESTRICTO
//EL COMPARADOR === ES MAS ESTRICTO CUANDO COMPARA VALORES TAMBIEN COMPARA
//SU TIPO DE DATO.
console.log(20 == 20);
console.log(20 == '20');

//COMPARAMOS EL VALOR Y EL TIPO DE DATO
console.log(20 === numero3);

//DIFERENTES
console.log(2 != 3);
//Tambien puede ser con cadenas de texto
console.log('hola' == 'hola');

//SI HACEMOS LA SIGUIENTE COMPARACION 
console.log('z' < 'A');
//NOS RETORNARA FALSE YA QUE POR EL TIPO DE TRATAMIENTO QUE LE DA AL ALFABETO
//A ES LA MAYOR Y z ES MENOR EN ESE ORDEN.


