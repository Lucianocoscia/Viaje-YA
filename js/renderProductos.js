import {paquetes00} from "./paquetes-armados.js";
import { carritoLugares } from "./carritoLugares.js";
// Paquetes de lugares populares renderizados
const mostrarProductos = (productosARenderizar) => {
    const contenedorPaquetes = document.getElementById("card");

    paquetes00.forEach( paquete => {

        const div = document.createElement("div");
        div.classList.add("cards");

        div.innerHTML += `<img class="card__img" src="${paquete.img}"  alt="Cancún">
                        <h2 class="card__titulos">Destino: ${paquete.destino}</h2>
                        <p>Precio: $${paquete.precio}</p>
                        <span> Descripción: ${paquete.desc}</span>
                        <button class="boton1" id=boton${paquete.id} type="submit">Comprar<span class="span1"></span></button>
                        `
        contenedorPaquetes.appendChild(div);

        const boton = document.getElementById(`boton${paquete.id}`);

        boton.addEventListener( "click", () => {
            carritoLugares(paquete.id);
            alert(`Se agrego ${paquete.destino}`);
        })
    }  )

}
mostrarProductos(paquetes00);



