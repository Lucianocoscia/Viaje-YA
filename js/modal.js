// aca tengo tengo funcionalidad de abrir y cerrar carrito 
const modalContenedor = document.querySelector("#carrito");

const abrirCarrito = document.getElementById("open");

const cerrarCarrito = document.getElementById("cerrar");

const modalCarrito = document.querySelector("#carrito");

abrirCarrito.addEventListener( "click", () =>{
    modalContenedor.classList.toggle("carrito-visible");

})

cerrarCarrito.addEventListener('click', ()=>{

    modalContenedor.classList.remove('carrito-visible')

})

/* modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})
 */

