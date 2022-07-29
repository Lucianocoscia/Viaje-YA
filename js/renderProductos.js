// Paquetes armados para agregar directo al carrito

const paquetes00 = [
    { id: 1, img:  "../images/cancun.jpg" ,destino: "Cancún", desc: "6 dias, 5 noches. Del 22/08/2022 al 28/08/2022", precio: 230000, cantidad: 1, },
    { id: 2, img:  "../images/punta-cana.jpg" ,destino: "Punta Cana", desc: "6 dias, 5 noches. Del 01/11/2022 al 07/11/2022", precio: 250000, cantidad: 1, },
    { id: 3, img:   "../images/rio-janeiro.jpg" ,destino: "Rio de Janeiro", desc: "6 dias, 5 noches. Del 2/02/2023 al 08/02/2023", precio: 150000, cantidad: 1, },
    { id: 4, img:  "../images/bariloche.jpg" ,destino: "Bariloche", desc: "6 dias, 5 noches. Del 02/01/2023 al 08/01/2023", precio: 70000, cantidad: 1, },
];

// Paquetes de lugares populares renderizados
const mostrarProductos = (productosARenderizar) => {

    const contenedorPaquetes = document.getElementById("card");

    for (const paquete of paquetes00){
        const div = document.createElement("div");
        div.classList.add("cards");

        div.innerHTML += `<img class="card__img" src="${paquete.img}"  alt="Cancún">
                        <h2 class="card__titulos">Destino: ${paquete.destino}</h2>
                        <p>Precio: $${paquete.precio}</p>
                        <span> Descripción: ${paquete.desc}</span>
                        <button class="boton1 agregar-carrito" data-id=${paquete.id} type="submit">Comprar<span class="span0"></span></button>
                        `
        contenedorPaquetes.appendChild(div);
}
}
mostrarProductos(paquetes00);
