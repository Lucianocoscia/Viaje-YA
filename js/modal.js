import { carritoLugares } from "./carritoLugares.js";
import { paquetes00 } from "./paquetes-armados.js";

const modalContenedor = document.querySelector(".modal-container");

const abrirCarrito = document.getElementById("open");

const cerrarCarrito = document.getElementById("cerrar");

const modalCarrito = document.querySelector(".modal-carrito");

abrirCarrito.addEventListener( "click", () =>{
    modalContenedor.classList.toggle("modal-active");

})

cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('modal-active')
})

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
})

modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
})


// si son un mismo producto q se sumen con un condicional se puede hacer, INVESTIGAR
// tomar id y aplicar splice. es decir q se elimine el valor
