//OBJETOS EN JavaScript 

//CREAR UN OBJETO

const persona = {
    nombre: 'Luis Angel',
    apellido: 'Zaragoza Farrera',
    profesion: 'Ing. En Sistemas Computacionales',
    email: 'luisangel.zafa@gmail.com',
    edad: 22,
    numero_tel: 9515266028,
    musica: ['Pop','JPop','Rock'],
    hogar: {
        ciudad: 'Oaxaca',
        pais: 'México'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
};

const persona2 = {
    nombre: 'Luis Angel',
    apellido: 'Zaragoza Farrera',
    profesion: 'Ing. En Sistemas Computacionales',
    email: 'luisangel.zafa@gmail.com',
    edad: 25,
    numero_tel: 9515266028,
    musica: ['Pop','JPop','Rock'],
    hogar: {
        ciudad: 'Oaxaca',
        pais: 'México'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
};

//PODEMOS AGREGAR ELEMENTOS A UN ARREGLO DENTRO DE UN OBJETO
persona.musica.push('Alternative');

//PARA ACCEDER A LOS ELEMENTOS DE UN OBJETO TENDREMOS QUE UTILIZAR EL . Y
//EL NOMBRE DEL ATRIBUTO DEL OBJETO PARA ACCEDER A ELLOS.

//console.log(persona.apellido);
//console.log(persona.numero_tel);
//console.log(persona.musica[0]);

//ACCEDER A UN OBJETO DENTRO DE OTRO OBJETO
//console.log(persona.hogar.ciudad);

//console.log(persona2.nacimiento());

//DESCOMENTAR LAS LINEAS DE CODIGO CON console.log() PARA OBSERVAR COMO SE
//REALIZARON LOS CAMBIOS

//--------------------------------------------------------------------------------
//CREANDO ARREGLOS DE OBJETOS
const autos = [

    {modelo: 'Mustang', motor: 6.0},
    {modelo: 'Camaro', motor: 6.1},
    {modelo: 'Challenger', motor: 6.3}

];

/*
console.log(autos);
console.log(autos[0]);
console.log(autos[0].modelo);
*/

//RECORREMOS QUE PARA RECORRER UN ARREGLO DEBEMOS HACERLO MEDIANTE UN CICLO
for(let i = 0; i<autos.length ;i++)
{
    //console.log(autos[i]);
    console.log(`${autos[i].modelo} ${autos[i].motor}`);

}

//SI PODEMOS MODIFICAR LOS VALORES DE UN OBJETOS COMO SI HABLARAMOS
//DE MODIFICAR VALORES DE UN ARREGLO.