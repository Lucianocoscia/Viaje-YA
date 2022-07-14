alert("Bienvenido/a! Para realizar una compra en nuestro portal debes loguearte!");
// Clase constructora de usuario
class Usuario {

    constructor(nombre,email,contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

}
// array de usuarios donde van a ir almacenados los usarios q se logueen
const usuarios = [];

// me tira siempre q es incorrecto y no se porque 
function validarEmail(email){
    let expReg =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(email);
    if(esValido == true){
        alert("El correo electronico es válido.")
    }else{
        alert("El correo electronico NO es válido. Verifique de estar utilizando el '@' y su respectivo '.com'.")

    }

}

function loguearte (){
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su email");
    // validarEmail();
    let contraseña = prompt("Ingrese su contraseña");
    alert("Felicitaciones! Has creado tu cuenta con exito! Te regalamos un cupon del 20% en tu reserva ingresando 'viaje-ya'.")
    alert(`Bienvenido/a! ${nombre}`);

//Creo los usarios como objetos para luego pushearlos
const login = new Usuario(nombre, email, contraseña);

//push hacia el array de usuarios, (almaceno los usuarios en esa lista)
usuarios.push(login);

//Muestro por alert como almacene los datos q registro
const mensaje = `Cuenta registrada: \nNombre: ${login.nombre} \nEmail: ${login.email}\nContraseña: ${login.contraseña}`;
alert(mensaje);
}
// Si no la q se me ocurre es tirar un promp en el else de validarEmail() y luego validar q si es tal pushe tal cosa y sino otra, al igual q hice con mensaje2 y mensaje3

loguearte ();

//array donde seran guardados los paquetes 
const paquetes = [];

//funcion q calcula el valor final de acuerdo al destino q elijan

function valorFinal (precio){
    let cuponDescuento = prompt("Ingrese aqui su cupon de descuento");
    let descuento = precio * 0.2;

    if (cuponDescuento === "viaje-ya") {
            let resultado = precio - descuento;
            alert(`El valor final con el descuento aplicado es de $${resultado}`);
            paquetes.push(resultado);
    }
    if (cuponDescuento === "VIAJE-YA" || cuponDescuento === "viaje-ya"){
        alert("Descuento aplicado! Se le hizo un descuento del 20%");
    }
}


function reserva(){
    let consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");

    while(consulta != "ida" && consulta != "ida y vuelta" && consulta !="IDA" && consulta != "IDA Y VUELTA"){
        consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");

    } 

    if (consulta === "ida" || consulta ==="IDA"){
        alert("Usted eligio solo ida");

        let fecha1 = prompt("Ingrese la fecha de salida de esta forma: dd/mm/aaaa");
        alert(` La fecha que usted eligio de partida es: ${fecha1}`);
        paquetes.push(fecha1);


        
    }else if (consulta === "ida y vuelta" || consulta === "IDA Y VUELTA")  {
        alert("Usted eligio ida y vuelta");

        let fecha1 = prompt("Ingrese la fecha de salida de esta forma: dd/mm/aaaa");

        alert(` La fecha que usted eligio de partida es: ${fecha1}`);
        paquetes.push(fecha1);
    
        let fecha2 = prompt("Ingrese la fecha de vuelta de esta forma: dd/mm/aaaa");
        alert(` La fecha que usted eligio de vuelta es: ${fecha2}`);
        paquetes.push(fecha2);
    }
    


    let origen = prompt("Ingrese desde donde viaja");
    paquetes.push(origen);
    alert(`Usted viaja desde : ${origen}`);
    

    let destino = prompt("Ingrese hacia donde desea viajar:\n 1- Cancún \n 2- Punta Cana \n 3-Rio de Janeiro \n 4-Bariloche");

    while(destino != 1 && destino !=2 && destino != 3 && destino != 4){
        destino = prompt("Ingrese hacia donde desea viajar:\n 1- Cancún \n 2- Punta Cana \n 3-Rio de Janeiro \n 4-Bariloche");
    }

    switch (destino){
        case "1":
            let cancun = "Cancún";
            paquetes.push(cancun);

            alert("Usted eligio Cancún");
            break;
        case "2":
            let puntaCana = "Punta Cana";
            paquetes.push(puntaCana);

            alert("Usted eligio Punta Cana");
            break;
        case "3": 
            let rioDeJaneiro = "Rio de Janeiro";
            paquetes.push(rioDeJaneiro);

            alert("Usted eligio Rio de Janeiro");
            break;
        case "4":
            let bariloche = "Bariloche";
            paquetes.push(bariloche);

            alert("Usted eligio Bariloche");
            break;
        default :
            alert("No ha ingresado un lugar valido");
            break;
    }


    let valor = prompt("Desea saber el valor del aereo + hotel del lugar que eligio?");

    while(valor != "si" && valor != "SI"){
        valor = prompt("Desea saber el valor del aereo + hotel del lugar que eligio?");
        }

    if(valor === "si" || valor === "SI"){
        
        switch (destino) {
            case "1":
                alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");
                let precio1 = 230000;
                paquetes.push(precio1);

                valorFinal(precio1);
                break;
            case "2":
                alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");
                let precio2 = 250000;
                paquetes.push(precio2);

                valorFinal(precio2);
                break;
            case "3":
                alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");
                let precio3 = 150000;
                paquetes.push(precio3);

                valorFinal(precio3);
                break;
            case "4":
                alert("El valor del aereo + hotel a Bariloche cuesta $70.000  por persona");
                let precio4 = 70000;
                paquetes.push(precio4);

                valorFinal(precio4);
                break;
            default:
                alert("No ha ingresado un valor valido");
                break;
        }
    }



//Muestro por alert como almacene los datos q registro
if(consulta == "ida y vuelta"){
    const mensaje2 = `Su reserva quedo de esta manera \n Fecha de partida: ${paquetes[0]} \n Fecha de vuelta: ${paquetes[1]} \n Origen: ${paquetes[2] }\n Destino: ${paquetes[3]} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]}  `;
    alert(mensaje2);
}

if(consulta == "ida"){
    const mensaje3 = `Su reserva quedo de esta manera \n Fecha de partida: ${paquetes[0]} \n Origen: ${paquetes[1] }\n Destino: ${paquetes[2]} \n Precio Final con descuento aplicado: $${paquetes[4]} \n Precio Lista:  $${paquetes[3]}   `;
    alert(mensaje3);
}


}
reserva();

const paquetes00 = [
    { id: 1, nombre: "Cancún", precio: 230000 },
    { id: 2, nombre: "Punta Cana", precio: 250000 },
    { id: 3, nombre: "Rio de Janeiro", precio: 150000 },
    { id: 4, nombre: "Bariloche", precio: 70000 },
    { id: 5, nombre: "Ushuaia", precio: 100000 },
    { id: 6, nombre: "New York", precio: 350000 },
    { id: 7, nombre: "Los Angeles", precio: 300000 },
];

function pregunta(){
    let pregunta1 = prompt("Desea buscar en nuestra lista de paquetes algo mas?");
    if (pregunta1 == "si" || pregunta1 == "SI"){
        let pregunta2 = prompt("Que paquete desea buscar? Escriba aqui el nombre del Destino.")
        let listaDePaquetes = "";
        let filtrados = paquetes00.filter(elemento => elemento.nombre == pregunta2);
        for(const item of filtrados){
            console.log(item);
        }
    }else {
        alert("Disfrute de nuestro portal! Gracias por visitarnos.")
    }
}
pregunta();



// APUNTES Y PRUEBAS

/* El detalle está en las validaciones por ejemplo.. es un tema que se tocó hace muy poco de todos modos, pero para la siguiente entrega podrias implementar función de validación en un mail (por ejemplo que haya un arroba), en las fechas (tiene que se superior al año 2022 por lo menos). */
// VALIDE MAIL PERO ME FALTA CREARLE WHILE SI ES Q NO INGRESA BIEN EL DATO Y CON ESO MODIFICAR EL ARRAY YA Q EL VALOR Q ME TOMARIA NO ES EL DE ANTES SINO UNO NUEVO VA O ESO ME PASO ANTES.
// VALIDAR FECHAS ESTARIA BUENO, BUSCATE VIDEO DE YOUTUBE.
// - Métodos de búsqueda y filtrado sobre el Array fijarme como implementar esto y entregar. Y luego entrar lo de DOM. 

/*
filter filtra dependiendo de la condicion pasada
let valor = prompt("Ingrese el valor minimo");
let nombres = "";
let filtrados = productos.filter(elemento => elemento.precio > valor);
for(const item of filtrados){
  log(item)
}
alert(nombres); */






//\n -> es salto de linea


// ejemplo de class construtora 

/* class ViajeExtranjero {
    constructor(lugar, precio, dias){
        this.lugar = lugar;
        this.precio = precio;
        this.duracion = dias;
        this.vendido = false;

    }
    vender(){
        this.vendido = true;
    }

}

const viaje1 = new ViajeExtranjero("New York", "5000 USD", 7);

console.log(viaje1);
viaje1.vender();
console.log(viaje1);

if (this.vendido = true) {
    console.log("Usted ha comprado un viaje con Viaje-ya");
} */


// clase constructora de los paquetes 
/* class Paquete {

    constructor(origen,destino,valor){
        this.origen = origen;
        this.destino = destino;
        this.precio = valor;
    }

} */
//Creo los usarios como objetos para luego pushearlos
// const viajeArmado = new Paquete(origen,destino, valor);

//push hacia el array de paquetes, (almaceno los destinos y precios en esa lista)
// paquetes.push(viajeArmado);

// Ejemplo de entrega para dom, aplicar a si quiere ver nuestra lista de paquetes

/* let lista = document.getElementById("contenedor");

let productos = [
{id: 1, destino: "Punta Cana", precio: 5000 },
{id: 2, destino: "Rio de Janeiro", precio: 5000 },
{id: 3, destino: "Cancún", precio: 5000 },
{id: 4, destino: "Bariloche", precio: 5000 } ,   
]

for(const producto of productos){
    let li = document.createElement("li");
    li.innerHTML = `<h2>El ID del viaje es: ${producto.id}</h2>
                    <p>El Destino q eligio es: ${producto.destino}</p>
                    <span>El Precio es de: ${producto.precio}</span>
                   `
    lista.append(li);
} */