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

function loguearte (){
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su email");
    let contraseña = prompt("Ingrese su contraseña");
    alert("Felicitaciones! Has creado tu cuenta con exito! ")
    alert(`Bienvenido/a! ${nombre}`);

//Creo los usarios como objetos para luego pushearlos
const login = new Usuario(nombre, email, contraseña);

//push hacia el array de usuarios, (almaceno los usuarios en esa lista)
usuarios.push(login);

//Muestro por alert como almacene los datos q registro
const mensaje = `Nombre: ${login.nombre} \nEmail: ${login.email}\nContraseña: ${login.contraseña}`;
alert(mensaje);
}


loguearte ();



function preguntaVuelo (){
    let consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");

    while(consulta != "ida" && consulta != "ida y vuelta" && consulta !="IDA" && consulta != "IDA Y VUELTA"){
        consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");

    } 

    if (consulta === "ida" || consulta ==="IDA"){
        alert("Usted eligio solo ida");
    }else if (consulta === "ida y vuelta" || consulta === "IDA Y VUELTA")  {
        alert("Usted eligio ida y vuelta");
    }
}

preguntaVuelo ();

//funcion q calcula el valor final de acuerdo al destino q elijan

function valorFinal (precio){
    let cuponDescuento = prompt("Ingrese aqui su cupon de descuento");
    let descuento = precio * 0.2;

    if (cuponDescuento === "viaje-ya") {
            let resultado = precio - descuento;
            alert(`El valor final con el descuento aplicado es de $${resultado}`);
    }
    if (cuponDescuento === "VIAJE-YA" || cuponDescuento === "viaje-ya"){
        alert("Descuento aplicado! Se le hizo un descuento del 20%");
    }
}



//array donde seran guardados los paquetes 
const paquetes = [];

function reserva(){
    
    let fecha1 = prompt("Ingrese la fecha de salida de esta forma: dd/mm/aaaa");
    alert(` La fecha que usted eligio de partida es: ${fecha1}`);
    paquetes.push(fecha1);


    let fecha2 = prompt("Ingrese la fecha de vuelta de esta forma: dd/mm/aaaa");
    alert(` La fecha que usted eligio de vuelta es: ${fecha2}`);
    paquetes.push(fecha2);


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
                paquetes.push("230.000");
                alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");
                let precio1 = 230000;

                paquetes.push(precio1);
                valorFinal(precio1);
                break;
            case "2":
                paquetes.push("250.000");
                alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");
                let precio2 = 250000;

                paquetes.push(precio2);
                valorFinal(precio2);
                break;
            case "3":
                paquetes.push("150.000");
                alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");
                let precio3 = 150000;

                paquetes.push(precio3);
                valorFinal(precio3);
                break;
            case "4":
                paquetes.push("70.000");
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
const mensaje2 = `Su reserva quedo de esta manera \n Fecha de partida: ${paquetes[0]} \n Fecha de vuelta: ${paquetes[1]} \n Origen: ${paquetes[2] }\n Destino: ${paquetes[3]} \n Precio: $${paquetes[4]}   `;
alert(mensaje2);

}
reserva();






// APUNTES Y PRUEBAS

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