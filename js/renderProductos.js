import {paquetes00} from "./productos.js";
import { carritoLugares } from "./carritoLugares.js";

const mostrarProductos = (productosARenderizar) => {
    const contenedorPaquetes = document.getElementById("card");

    paquetes00.forEach( paquete => {

        const div = document.createElement("div");
        div.classList.add("cards");

        div.innerHTML += `<img class="card__img" src="${paquete.img}"  alt="Cancún">
                        <h2 class="card__titulos">Destino: ${paquete.destino}</h2>
                        <p>Precio: $${paquete.precio}</p>
                        <span> Descripción: ${paquete.desc}</span>
                        <button class="boton1" id=boton${paquete.id} type="submit">Reservar<span class="span1"></span></button>
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

/* 
// card1

let producto = document.getElementById("card");
let div = document.createElement("div");
div.classList.add("cards");
    
div.innerHTML = `<img class="card__img" src="${paquetes00[0].img}"  alt="Cancún">
                <h2 class="card__titulos">Destino: ${paquetes00[0].destino}</h2>
                <p>Precio: $${paquetes00[0].precio}</p>
                <span> Id: ${paquetes00[0].id}</span>
                <button type="submit"><span class="span1"></span>Reservar</button>
                `
producto.append(div);

// card2

let lista2 = document.getElementById("card2");
let div2 = document.createElement("div");
div2.classList.add("cards");  

div2.innerHTML = `<img class="card__img" src="${paquetes00[3].img}"  alt="Bariloche">
                    <h2 class="card__titulos">Destino: ${paquetes00[3].destino}</h2>
                    <p>Precio: $${paquetes00[3].precio}</p>
                    <span> Id: ${paquetes00[3].id}</span>
                    <button type="submit"><span class="span1"></span>Reservar</button>
                `
lista2.append(div2);
    
// card3

let lista3 = document.getElementById("card3");
let div3 = document.createElement("div");
div3.classList.add("cards");  

div3.innerHTML = `<img class="card__img" src="${paquetes00[1].img}"  alt="Cancún">
                    <h2 class="card__titulos">Destino: ${paquetes00[1].destino}</h2>
                    <p>Precio: $${paquetes00[1].precio}</p>
                    <span> Id: ${paquetes00[1].id}</span>
                    <button type="submit"><span class="span1"></span>Reservar</button>
                `
lista3.append(div3);
    
// card4

let lista4 = document.getElementById("card4");
let div4 = document.createElement("div");

div4.classList.add("cards");   

div4.innerHTML = `<img class="card__img" src="${paquetes00[2].img}"  alt="Cancún">
                    <h2 class="card__titulos">Destino: ${paquetes00[2].destino}</h2>
                    <p>Precio: $${paquetes00[2].precio}</p>
                    <span> Id: ${paquetes00[2].id}</span>
                    <button type="submit"><span class="span1"></span>Reservar</button>
                `
lista4.append(div4); */