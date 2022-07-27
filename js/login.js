// Clase constructora de usuario
class Usuario {

    constructor(nombre,email,contrasenia){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
    }

}
// array de usuarios donde van a ir almacenados los usarios q se logueen
const usuarios = [];

//validacion de email
// HACER LO DE STORAGE, VALIDACIONES EN LOGUEOS, Y EMAILS O CONTRASEÑAS

// comienzo de funcion de logueo

function loguearte (){


    const nombre = document.getElementById("nombre");

    const email = document.getElementById("email");

    const contrasenia = document.getElementById("contrasenia");

    const boton = document.getElementById("botonRegistro");

    let usuarioCargado = localStorage.getItem("nombre");



    boton.addEventListener("click", () => {

        if(nombre.value === ""  || email.value === ""  || contrasenia.value === "" ){
            alert("Complete los campos indicados. Para que el registro se aplique de manera correcta.")
        }else {
            alert("Felicitaciones! Has creado tu cuenta con exito! Te regalamos un cupon del 20% en tu reserva ingresando 'viaje-ya'.")

            //Creo los usarios como objetos para luego pushearlos
            const login = new Usuario(nombre, email, contrasenia);
    
            //push hacia el array de usuarios, (almaceno los usuarios en esa lista)
            usuarios.push(login);
    
            //Muestro por alert como almacene los datos q registro
            const mensaje = `Cuenta registrada: \nNombre: ${login.nombre.value} \nEmail: ${login.email.value}\nContraseña: ${login.contrasenia.value}`;
            alert(mensaje);

            sessionStorage.setItem("nombre", nombre.value);
            sessionStorage.getItem("nombre");
        }
    })

    // INICIO DE SESION
    const email2 = document.getElementById("email2");

    const contrasenia2 = document.getElementById("contrasenia2");

    const boton2 = document.getElementById("botonInicioSesion");


    boton2.addEventListener("click", () => {

        console.log(contrasenia.value);
        console.log(contrasenia2.value);
        if(email2.value === ""  || contrasenia2.value === "" ){

            alert("Complete los campos indicados. Para que el registro se aplique de manera correcta.")

        }else if (contrasenia.value != contrasenia2.value){

            alert("Contraseña incorrecta. Intente nuevamente.")

        } else {
            alert("Inicio de sesión realizado.")
            alert(`Bienvenido/a! ${nombre.value}`);
    

        }
        nombre.value = "";
        email.value = "";
        contrasenia.value ="";
        email2.value = "";
        contrasenia2.value ="";
    })
}

loguearte ();

// export {loguearte} ;
/* let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let usuario = usuarioStorage;
  let mensaje = `Bienvenid@ ${usuario}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
} */

// cerrar sesion con un boton y meter el sessionstorage.clear()
    

/* function validarEmail(email){
    let expReg =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(email);
    if(esValido == true){
        alert("El correo electronico es válido.")
    }else{
        alert("El correo electronico NO es válido. Verifique de estar utilizando el '@' y su respectivo '.com'.")

    }

} */



