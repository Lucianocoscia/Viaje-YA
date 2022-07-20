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

    let nombre;
    let nombreStorage = sessionStorage.getItem("nombre");

    if(nombreStorage){
        nombre = nombreStorage;
        let mensaje = `Bienvenid@ ${nombre}`;
        alert(mensaje);
    }else{
        alert("Bienvenido/a! Para realizar una compra en nuestro portal debes loguearte!");
        nombre = prompt("Ingrese su nombre");
        sessionStorage.setItem("nombre", nombre);

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




}
// Si no la q se me ocurre es tirar un promp en el else de validarEmail() y luego validar q si es tal pushe tal cosa y sino otra, al igual q hice con mensaje2 y mensaje3

loguearte ();