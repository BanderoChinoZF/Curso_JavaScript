//TEMPLATES EN JavaScript

const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;

let html;

html = '<ul>'+
       '<li>Orden: ' + producto1 + '</li>' +
       '<li>Precio: ' + precio1 + '</li>' +
       '<li>Orden: ' + producto2 + '</li>' +
       '<li>Precio: ' + precio2 + '</li>' +
       '<li>Total: ' + (precio1+precio2) + '</li>' +
       '</ul>';

document.getElementById('app').innerHTML = html;

let html2;

html2 = `
    <ul>
        <li>Orden: ${producto1}</li>
        <li>Precio: ${precio1}</li>
        <li>Orden: ${producto2}</li>
        <li>Precio: ${precio2}</li>
        <li>Precio: ${total(precio1,precio2)}</li>

    </ul>
`;

function total(precio1,precio2)
{
    return precio1+precio2;
}

document.getElementById('app2').innerHTML = html2;