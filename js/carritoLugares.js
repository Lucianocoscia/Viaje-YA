import { paquetes00 } from "./paquetes-armados.js";
// Aca renderizo los paquetes en el carrito
let carritoDeCompras = [];

export const carritoLugares = (paqueteId) => {

    const contenedorCarrito = document.getElementById("carrito-contenedor");


const renderPaquetesCarrito = () => {

    let paquete = paquetes00.find( producto => producto.id == paqueteId);
    carritoDeCompras.push(paquete);

    paquete.cantidad = 1;

    let div = document.createElement("div");

    div.classList.add("productoEnCarrito"); //00:49:36
    
    div.innerHTML = `<p>${paquete.destino} </p>
                    <p>Precio: $${paquete.precio}</p>
                    <p id="cantidad${paquete.id}">Cantidad: ${paquete.cantidad}</p>
                    <button id ="eliminar${paquete.id}" class = "boton-eliminar"><span class="icono2 jam jam-trash">
                    `
    contenedorCarrito.appendChild(div);
}
renderPaquetesCarrito();
}

