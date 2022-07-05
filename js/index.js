alert("Bienvenido/a! Para realizar una compra en nuestro portal debes loguearte!");

function loguearte (){
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su email");
    let contraseña = prompt("Ingrese su contraseña");
    alert("Felicitaciones! Has creado tu cuenta con exito! ")
    alert(`Bienvenido/a! ${nombre}`);
/* class Usuario {

    constructor(nombre,email,contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

}
// const login = new Usuario("new york", "5000 USD", 7);
// alert(login); */

}

loguearte ();

//desde aca funcionaria

/* function saludar (){
    let nombre  = prompt("Ingrese su nombre")
    alert("Bienvenido/a " + nombre);
}
saludar();
 */


function pregunta (){
    let consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");
    if (consulta === "ida" || "IDA"){
        alert("Usted eligio solo ida");
    }else if (consulta === "ida y vuelta" || "IDA Y VUELTA")  {
        alert("Usted eligio ida y vuelta");
    }else {
        alert("Ingrese una opción valida")
        pregunta();
    }
}


pregunta ();


function lugar(){

    let origen = prompt("Ingrese desde donde viaja");
    alert(`Usted viaja desde : ${origen}`);

    let destino = prompt("Ingrese hacia donde desea viajar: 1- Cancún / 2- Punta Cana / 3-Rio de Janeiro / 4-Bariloche");


    switch (destino){
        case "1":
            alert("Usted eligio Cancún");
            break;
        case "2":
            alert("Usted eligio Punta Cana");
            break;
        case "3": 
            alert("Usted eligio Rio de Janeiro");
            break;
        case "4": 
            alert("Usted eligio Bariloche");
            break;
        default :
            alert("No ha ingresado un lugar valido");
            let destino = prompt("Ingrese hacia donde desea viajar: 1- Cancún / 2- Punta Cana / 3-Rio de Janeiro / 4-Bariloche");
            break;
    }
}
lugar();


function fechas () {
    let fecha1 = prompt("Ingrese la fecha de salida de esta forma: dd/mm/aaaa");
    alert(` La fecha que usted eligio de partida es: ${fecha1}`);

    let fecha2 = prompt("Ingrese la fecha de vuelta de esta forma: dd/mm/aaaa");
    alert(` La fecha que usted eligio de vuelta es: ${fecha2}`);

}
fechas(); 

function valores (){
    let precio = prompt("Para saber el valor del aereo + hotel ingrese a que lugar desea ir: 1- Cancún / 2- Punta Cana / 3- Rio de Janeiro / 4- Bariloche")

    switch(precio){
        case "1":
            alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");
            break;
        case "2":
            alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");
            break;
        case "3":
            alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");
            break;
        case "4":
            alert("El valor del aereo + hotel a Bariloche cuesta $70.000  por persona");
            break;
        default:
            alert("No ha ingresado un valor valido");
            break;

    }
}
valores();

function valorFinal (){
    let cuponDescuento = prompt("Ingrese aqui su cupon de descuento");
    let precio = 100.000;
    let descuento = 100.000 * 0.2;
    if (descuento === "VIAJE-YA" || "viaje-ya"){
        alert("Descuento aplicado! Se le hara un descuento del 20%");
    }
    switch (descuento == true) {
        case 1:
            let resultado = `${precio} - ${descuento} ` ;
            alert(resultado);
            break;
    
        default:
            break;
    }
}
valorFinal();




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