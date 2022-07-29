import { paquetes00 } from "./paquetes.js";

//array donde seran guardados los paquetes 
const paquetes = [];

//funcion q calcula el valor final de acuerdo al destino q elijan
function valorFinal (precio){
    const cuponDescuento = document.getElementById("descuento");
    let descuento = precio * 0.2;

    if (cuponDescuento.value === "VIAJE-YA" || cuponDescuento.value === "viaje-ya"){
        alert("Descuento aplicado! Se le hizo un descuento del 20%");
        console.log("entramos al sweet alert1", Swal.fire);
/*         Swal.fire(
            'Descuento aplicado!',
            'Se le hizo un descuento del 20%',
            'success'
        ) */
/*         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        }) */
        console.log("identificador");

    }
    if (cuponDescuento.value === "viaje-ya" || cuponDescuento.value === "VIAJE-YA") {
        let resultado = precio - descuento;
        alert(`El valor final con el descuento aplicado es de $${resultado}`);

/*         Swal.fire(
            `El valor final con el descuento aplicado es de $${resultado}`,
            '',
            'info'
        ) */
        paquetes.push(resultado); // [5]
        cuponDescuento.value = "";
    }
}


function reserva (){
    // aca comienza funcionalidad de apretar consultar y q lleve el titulo al input con id="destino"
    const listaReserva = document.querySelector("#contenedorPaquetes");

    //cuando agregas un destino presionando en "consultar"
    listaReserva.addEventListener("click", agregarDestino);

    function agregarDestino(e){
        if(e.target.classList.contains("agregar-destino")){
            const destinoSeleccionado =  e.target.parentElement

            leerDestino(destinoSeleccionado);
        }
    }
    // lee el contenido del HTML al q le dimos click y extrae la informacion de la reserva
    function leerDestino(destino){

        //creo un objeto con el contenido de la reserva
        const infoReserva = {
            titulo: destino.querySelector("h2").textContent
        }

        const destino1 = document.getElementById("destino");
        destino1.value = `${infoReserva.titulo}`;
    }


//funcion q muestra el precio dependiendo q destino se elija
    function mostrarPrecio (){

        //VALORES
        switch (destino.value) {
            case "Cancún":

                alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");
                // Swal.fire('El valor del aereo + hotel a Cancún cuesta $230.000  por persona');

                const precio1 = paquetes00[0].precio;
                paquetes.push(precio1); // [4]

                valorFinal(precio1); 
                break;

            case "Punta Cana":

                alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");
                const precio2 = paquetes00[1].precio;
                paquetes.push(precio2);

                valorFinal(precio2);
                break;

            case "Rio de Janeiro":

                alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");
                const precio3 = paquetes00[2].precio;
                paquetes.push(precio3);

                valorFinal(precio3);
                break;

            case "Bariloche":

                alert("El valor del aereo + hotel a Bariloche cuesta $70.000  por persona");
                
                const precio4 = paquetes00[3].precio;
                paquetes.push(precio4);

                valorFinal(precio4);
                break;

            case "Santa Cruz":

                alert("El valor del aereo + hotel a Santa Cruz cuesta $125.000  por persona");

                const precio5 = paquetes00[4].precio;
                paquetes.push(precio5);

                valorFinal(precio5);
                break;

            case "New York":

                alert("El valor del aereo + hotel a New York cuesta $350.000  por persona");

                const precio6 = paquetes00[5].precio;
                paquetes.push(precio6);

                valorFinal(precio6);
                break;

            case "Bali, Indonesia":

                alert("El valor del aereo + hotel a Bali, Indonesia cuesta $325.000  por persona");

                const precio7 = paquetes00[6].precio;
                paquetes.push(precio7);

                valorFinal(precio7);
                break;

            case "Italia":

                alert("El valor del aereo + hotel a Italia cuesta $385.000  por persona");

                const precio8 = paquetes00[7].precio;
                paquetes.push(precio8);

                valorFinal(precio8);
                break;

            case "Paris":

                alert("El valor del aereo + hotel a Paris cuesta $370.000  por persona");

                const precio9 = paquetes00[8].precio;
                paquetes.push(precio9);

                valorFinal(precio9);
                break;

            case "Australia":

                alert("El valor del aereo + hotel a Australia cuesta $350.000  por persona");

                const precio10 = paquetes00[9].precio;
                paquetes.push(precio10);

                valorFinal(precio10);
                break;

            case "Inglaterra":

                alert("El valor del aereo + hotel a Inglaterra cuesta $400.000  por persona");

                const precio11 = paquetes00[10].precio;
                paquetes.push(precio11);

                valorFinal(precio11);
                break;

            case "Punta del Este":

                alert("El valor del aereo + hotel a Punta del Este cuesta $350.000  por persona");

                const precio12 = paquetes00[11].precio;
                paquetes.push(precio12);

                valorFinal(precio12);
                break;
            default:
                alert("No ha ingresado un destino valido. Revise y elija uno de nuestro lista de paquetes.");
                break;
        }
    }


    const boton = document.getElementById("botonReserva");
    
    boton.addEventListener("click", () => {

        const vueloIda = document.getElementById("ida");

        const vueloIdaYVuelta = document.getElementById("idaYVuelta")
    
        const fecha1 = document.getElementById("fechaSalida");
        paquetes.push(fecha1); 
    
        const fecha2 = document.getElementById("fechaVuelta");
        paquetes.push(fecha2); 
    
        const origen = document.getElementById("origen");
        paquetes.push(origen); 
    
        const destino = document.getElementById("destino");
        paquetes.push(destino); 

        const cantidadDePasajeros = document.getElementById("pasajeros");

        mostrarPrecio();
        paquetes.push(cantidadDePasajeros);

        if(vueloIda.checked){

            const mensaje1 = `Su reserva quedo de esta manera: \n Fecha de partida: ${paquetes[0].value} \n Origen: ${paquetes[2].value}\n Destino: ${paquetes[3].value} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]} \n Cantidad De pasajeros: ${paquetes[6].value} `;
            alert(mensaje1);

            reservaAlCarrito();


        }else if(vueloIdaYVuelta.checked) {

            const mensaje2 = `Su reserva quedo de esta manera: \n Fecha de partida: ${paquetes[0].value} \n Fecha de vuelta: ${paquetes[1].value} \n Origen: ${paquetes[2].value}\n Destino: ${paquetes[3].value} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]} \n Cantidad De pasajeros: ${paquetes[6].value}  `;
            alert(mensaje2);

            reservaAlCarrito(); // consultar si hay manera de solo cambiar algo del inner.html
        }

    // borro datos de los inputs
        fecha1.value = "";
        fecha2.value = "";
        origen.value = "";
        destino.value = "";
        cantidadDePasajeros.value = "";
        vueloIdaYVuelta.checked = false;
        vueloIda.checked = false;
    })
}
// llamado de la funcion
reserva();

function reservaAlCarrito (){
    // Intentando sumar la reserva al carrito
    const contenedorCarrito = document.querySelector("#lista-carrito tbody");

    //vaciar carrito
    const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

    const row = document.createElement("tr");
    // row.classList.add ("row")
    row.innerHTML = `
                    <td class="productoEnCarrito2-p" >Fecha de Partida: ${paquetes[0].value} 
                                                    <p>Fecha de Vuelta: ${paquetes[1].value}</p>
                                                    <p>Origen: ${paquetes[2].value}</p>
                                                    <p>Destino: ${paquetes[3].value}</p> 
                    </td>
                    
                    <td class="productoEnCarrito2-p" >Precio: $${paquetes[4]}
                                                    <p>Precio con descuento: $${paquetes[5]}</p>
                    </td>
                    <td class="productoEnCarrito2-p" >Cantidad de pasajeros: ${paquetes[6].value}</td>
                    <td><button data-id ="${paquetes00.id}" class = "boton-eliminar icono2 jam jam-trash"></button></td>
                    `;
    // Agrega el html del carrito en el tbody
    contenedorCarrito.append(row);

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

    function vaciarCarrito (e){
        if(e.target.classList.contains("vaciar-carrito")){
            contenedorCarrito.innerHTML = "";
        }
    }
    alert("Se agrego la reserva al carrito");
/*     Swal.fire(
        'Buen trabajo!',
        'Se agrego la reserva al carrito',
        'success'
    ).then( async ()=>{
        await Swal.fire(
            'Buen trabajo!',
            'Se agrego la reserva al carrito',
            'success'
        )
        await Swal.fire(
            'Buen trabajo!',
            'Se agrego la reserva al carrito',
            'success'
        )
        await Swal.fire(
            'Buen trabajo!',
            'Se agrego la reserva al carrito',
            'success'
        )
        await Swal.fire(
            'Buen trabajo!',
            'Se agrego la reserva al carrito',
            'success'
        )
    } ) */

}

// INTENTANDO HACER DINAMICO LO DE MOSTRARPRECIO
/* 
        let busquedaPrecio = paquetes00.find( paquete => paquete.precio == destino.value);
        const precio = paquetes00.precio;

        console.log(precio);
        console.log(busquedaPrecio); */
/* 
        <td class="productoEnCarrito2-p" >Fecha de Vuelta: ${paquetes[1].value} </td> */
