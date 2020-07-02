//ESTRUCTURAS DE CONTROL EN JavaScript

const edad = 19;

if(edad > 18)
{
    console.log('Si puedes entrar al sitio');
}else
{
    console.log('No puedes entrar al sitio');
}

console.log(' ');
console.log(' ');
console.log(' ');

//OTRO EJEMPLO DE CONDICIONALES
let puntaje;

if(puntaje)
{
    console.log(`El puntaje fue de ${puntaje}`);
}else
{
    console.log(`No hay puntaje`); 
}

//console.log(puntaje);
console.log(' ');
console.log(' ');
console.log(' ');


//OTRO EJEMPLO SOBRE CONDICIONALES
let efectivo = 500;
let totalCarrito = 700;

if(efectivo > totalCarrito)
{
    console.log('Pago Correcto!');
}else
{
    console.log('Fondos Insuficientes!');
}

console.log(' ');
console.log(' ');
console.log(' ');

//-------------------------------------------------------------------------------
//CONDICIONALES IF-ELSE IF- ELSE

const diaHoy = new Date();
//console.log(diaHoy);

let hora = diaHoy.getHours();
//console.log(hora);

if(hora > 0 && hora <= 10)
{
    console.log('Buenos Dias!');
}else if(hora > 10 && hora <=18)
{
    console.log('Buenas Tardes!');
}else if(hora > 18 && hora <= 24)
{
    console.log('Buenas Noches!');
}else
{
    console.log('Hora No Válida!');
}

console.log(' ');
console.log(' ');
console.log(' ');

//----------------------------------------------------------------------------------
//OTRO EJEMPLO DE CONDICIONALES EN JavaScript
let pun = 100;

if(pun < 150)
{
    console.log('Puntaje < 150');
}else if(pun < 200)
{
    console.log('Puntaje < 200');
}

console.log(' ');
console.log(' ');
console.log(' ');

//------------------------------------------------------------------------------------
//OTRO EJEMPLO DE CONDICIONALES Y OCUPANDO EL OPERADOR ||

let efect = 300,
    credito = 300,
    disponible = efect + credito,
    totalC = 700;

if(totalC < efect || totalC < credito || totalC < disponible)
{
    console.log('Puedo Pagar! Me lo llevo!');
}else
{
    console.log('No Puedo Pagar We Ni Pex :( ');
}

console.log(' ');
console.log(' ');
console.log(' ');
//-------------------------------------------------------------------------------
//ESTRUCTURA DE CONTROL SWITCH
const metodoPago = 'BitCoin';

switch(metodoPago)
{
    case 'Efectivo':
        console.log(`El Usuario pago con ${metodoPago}.`);
        break;
    case 'Cheque':
        console.log(`El Usuario pago con ${metodoPago}.`);
        break;
    case 'Tarjeta':
        console.log(`El Usuario pago con ${metodoPago}.`);
        break;
    default:
        console.log('Metodo de pago no soportado.');
        break;
}

console.log(' ');
console.log(' ');
console.log(' ');
//-------------------------------------------------------------------------------
//OTRO EJEMPLO CON EL SWITCH

let mes;

switch(new Date().getMonth())
{
    case 0:
        mes = 'Enero';
        break;
    case 1:
        mes = 'Febrero';
        break;
    case 2:
        mes = 'Marzo';
        break;
    case 3:
        mes = 'Abril';
        break;
    case 4:
        mes = 'Mayo';
        break;
    case 5:
        mes = 'Junio';
        break;
    case 6:
        mes = 'Julio';
        break;
    case 7:
        mes = 'Agosto';
        break;
    case 8:
        mes = 'Septiembre';
        break;
    case 9:
        mes = 'Octubre';
        break;
    case 10:
        mes = 'Noviembre';
        break;
    case 11:
        mes = 'diciembre';
        break;
}

console.log(`No encontramo en el mes de ${mes}`);