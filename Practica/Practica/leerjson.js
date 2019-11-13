var textoClientes = '[{"nombre":"Francisco","apellido":"Gutierrez","id":1258},{"nombre":"Damián","apellido":"López","id":1365},{"nombre":"Sabrina","apellido":"Gómez","id":1478},{"nombre":"Ignacio","apellido":"Martínez","id":9845},{"nombre":"Paula","apellido":"Torres","id":3654},{"nombre":"Alejandro","apellido":"Hernandez","id":2567},{"nombre":"Alejandra","apellido":"Borges","id":3579},{"nombre":"Tomás","apellido":"Cortazar","id":6321},{"nombre":"Facundo","apellido":"Garcia Marquez","id":4562},{"nombre":"Nicolás","apellido":"Tolstoi","id":2546}]'

// Leer el json y crear un objeto con la información de los clientes
// manipular ese objeto para escribir en pantalla

/*  El cliente 0 es Francisco Gutierrez y su id es 1258
    El cliente 1 es Damián López y su id es 1365
    ... */


var clientes=JSON.parse(textoClientes);

var cliente;
var indice;

clientes.forEach(function escribirCliente(cliente,indice){
  alert("El cleinte"+ indice + cliente.nombre + " "+ cliente.apellido + " y su Id es " + cliente.id + "<br>")
})