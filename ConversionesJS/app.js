//REALIZANDO CONVERSIONES EN JavaScript

const numero1 = "50",
      numero2 = 10,
      numero3 = 'tres';

//SI REALIZAMOS ESTA OPERACION, NO REALIZA UNA SUMATORIA COMO DESEAMOS,
//LO QUE TRATA DE REALIZAR ES UNA CONCATENACION
console.log(numero1 + numero2);

//DEBEMOS COLOCAR DENTRO DE LA FUNCION Number() LA CADENA QUE DESEAMOS CONVERTIR
//A NUMERO PARA PODER OPERAR LA SUMA CORRECTAMENTE
console.log(Number(numero1)+numero2);
//TAMBIEN PODEMOS OCUPAR parseInt() PARA REALIZAR ESTA CONVERSION
console.log(parseInt(numero1)+numero2);

//UN CASO CURIOSO ES QUE CUANDO NOSOTROS REALIZAMOS UNA RESTA ESTA LA REALIZA
//SIN NINGUN PROBLEMA, AUNQUE ESTO OCURRE SIEMPRE HAY QUE CONVERTIR
//UNA CADENA A NUMERO PARA OPERAR CON ELLA PARA LA RESTAS
console.log(numero1-numero2);

//ESTA CONVERSION AUNQUE SE REALIZA SIN PROBLEMAS RETORNA UNA NaN LO CUAL NOS
//INDICA QUE NO ES UN NUMERO CON EL QUE PODAMOS TRATAR.
console.log(Number(numero3));

//-------------------------------------------------------------------------------

let dato;

dato = Number('20');
dato = Number('20.102385')
//PARA EL CASO DE true RETORNA UN VALOR '1' Y EN EL CASO DE FALSE RETORN '0'
dato = Number(true);
dato = Number(false);
//RETORNA UN VALOR 0
dato = Number(null);

dato = Number(undefined);
dato = Number('Hola Mundo!!');
dato = Number([1,2,4,5,7]);

//ParseFloat y ParseInt
dato = parseInt('20');
dato = parseFloat('20.10545');
dato = parseFloat('100.2030');
//CUANDO REALIZAMOS UN PARSEO O CONVERSION DE STRING EN ESTE CASO SOLO TOMO 
//LOS VALORES DEL PUNTO HACIA LA IZQUIERDA
dato = parseInt('100.2030');

//RECUERDA QUE PARA VISUALIZAR TODOS LOS CAMBIOS HECHOS LINEA POR LEA
//AGREGAR ESTA INSTRUCCION PARA VER LOS RESULTADOS EN LA CONSOLA.
console.log(dato);

//TAMBIEN TENEMOS OTRA FUNCION QUE SE LLAMA toFixed(recibo_un_numero)
//ESTA FUNCION NOS AYUDA PARA TOMAR CIERTO NUMERO DE VALORES DEL PUNTO DECIMAL
//HACIA LA DERECHA POR EJEMPLO:

dato = '18631834.1384130843130';
//
console.log(parseFloat(dato).toFixed(4));
console.log(parseFloat(dato).toFixed(7));

//------------------------------------------------------------------------------}
//CONVERSION DE NUMEROS A STRING
console.log(' ');
console.log(' ');

let cp;

cp = 71246;
cp = String(cp);

//PARA CONOCER UNA LONGITUD DE UN DATO DEBEMOS HACER USO DE length PERO ESTA
//FUNCION ES SOLO DE USO PARA TIPOS DE DATOS String, POR LO CUAL EL NUMERO
//LO DEBEMOS CONVERTIR A TIPO String Y DESPUES APLICAR length
console.log(cp.length);


console.log(' ');
console.log(' ');


let d;
d = '4' +'4';

//booleanos
d = true;
d = false;


d = String(d);

//DE UN ARREGLO A String
d = [1,2,3];
d = String([1,2,3]);

//toString()
d = 20;
d = true;
d = [1,2,3,4];
//ESTOS DATOS NO PUEDEN SER CONVETIDOS A String
//d = null;
//d = undefined;
d = d.toString();

console.log(d);
console.log(d.length);
console.log(typeof d);




