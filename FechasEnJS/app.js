//FECHAS EN JavaScript, PARA ESO EXIST EUN OBJETO LLAMADO Date();

const diaHoy = new Date();

let valor;

//OBTENEMOS EL MES DE LA FECHA
    valor = diaHoy.getMonth();

//OBTENER EL DIA ACTUAL
    valor = diaHoy.getDate();
    //valor = diaHoy.getDay(); ---> no retorna el valor real del dia

//OBETENER EL AÑO
    valor = diaHoy.getFullYear();

//OBTENER LOS MINUTOS DE LA HORA EN LA QUE ESTAMOS
    valor = diaHoy.getMinutes();

//OBTENER LA HORA ACTUAL
    valor = diaHoy.getHours();

//NOS RETORNA LOS MILISEGUNDOS DESDE 1970
    valor = diaHoy.getTime();

//PODEMOS MODIFICAR EL VALOR DEL AÑO DE NUESTRA FECHA MEDIANTE LOS METODOS
//GET Y SET QUE CONTIENE ESTA FUNCION Date();
    valor = diaHoy.getFullYear();
    valor = diaHoy.setFullYear(2018);
    valor = diaHoy.getFullYear();

console.log(valor);

//ESTABLECER FECHA CON EL FOTMARTO DD-MM-YYYY
let navidad2017 = new Date('12-25-2017');

console.log(navidad2017);