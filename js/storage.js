// Storage del login

let usuarioCargado = sessionStorage.getItem("nombre");
if(usuarioCargado){
    // alert(`Bienvenido nuevamente ${sessionStorage.nombre}`);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: 'success',
        title: `Bienvenido nuevamente ${sessionStorage.nombre}`
    })
} else {
    // alert("Inicia Sesion o registrate");
    Swal.fire(
        'Inicia Sesion o Registrate',
        '',
        'info'
    )
/*     Toastify({
        text: "This is a toast",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast(); */
}

// Storage del carrito
/* let paquetesCarrito =  JSON.parse(localStorage.getItem("carrito")) ;
if(!paquetesCarrito){
    paquetesCarrito = [];
} */