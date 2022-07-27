// Storage del login

let usuarioCargado = sessionStorage.getItem("nombre");
if(usuarioCargado){
    alert(`Bienvenido nuevamente ${sessionStorage.nombre}`)
} else {
    alert("Inicia Sesion o registrate");
}

// Storage del carrito