// Storage del login

let usuarioCargado = sessionStorage.getItem("nombre");
if(usuarioCargado){
    alert(`Bienvenido nuevamente ${sessionStorage.nombre}`)
} else {
    // alert("Inicia Sesion o registrate");
    Swal.fire(
        'Inicia Sesion o Registrate',
        '',
        'info'
    )
}

// Storage del carrito
/* let paquetesCarrito = sessionStorage.getItem("paquetesCarrito")
if(paquetesCarrito){
    alert("Hay algo en el carrito");
}else{
    alert("No hay nada en el carrito");
} */