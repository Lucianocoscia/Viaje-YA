import {paquetes00} from "./paquetes.js";

// renderizado los paquetes en la seccion de reserva

const paquetesScroll = (productosARenderizar) => {
    const contenedorPaquetes = document.getElementById("contenedorPaquetes");

    for (const paquete of paquetes00) {
        const div = document.createElement("div");
        div.classList.add("paquete__item")
        div.innerHTML += `<img class="paquete__img" src="${paquete.img}"  alt="Cancún">
                        <h2 class="absolute">${paquete.destino}</h2>
                        `
        contenedorPaquetes.append(div);
    }

}
paquetesScroll(paquetes00);