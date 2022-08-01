import { paquetes00 } from "./paquetes.js";

//array donde seran guardados los paquetes 
const paquetes = [];

//funcion q calcula el valor final de acuerdo al destino q elijan
function valorFinal (precio){
    const cuponDescuento = document.getElementById("descuento");
    let descuento = precio * 0.2;

    if (cuponDescuento.value === "VIAJE-YA" || cuponDescuento.value === "viaje-ya"){
        alert("Descuento aplicado! Se le hizo un descuento del 20%");
        // console.log("entramos al sweet alert1", Swal.fire);
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
        // console.log("identificador");

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
                let id = paquetes00[0].id;
    
                const precio1 = paquetes00[0].precio;
                paquetes.push(precio1); // [4]

                valorFinal(precio1);

                console.log(id);
                paquetes.push(id)
                break;

            case "Punta Cana":

                alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");

                let id2 = paquetes00[1].id;

                const precio2 = paquetes00[1].precio;
                paquetes.push(precio2);

                valorFinal(precio2);
                paquetes.push(id2);
                break;

            case "Rio de Janeiro":

                alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");

                let id3 = paquetes00[2].id;


                const precio3 = paquetes00[2].precio;
                paquetes.push(precio3);

                valorFinal(precio3);
                paquetes.push(id3);
                break;

            case "Bariloche":

                alert("El valor del aereo + hotel a Bariloche cuesta $70.000  por persona");

                let id4 = paquetes00[3].id;


                const precio4 = paquetes00[3].precio;
                paquetes.push(precio4);

                valorFinal(precio4);
                paquetes.push(id4);
                break;

            case "Santa Cruz":

                alert("El valor del aereo + hotel a Santa Cruz cuesta $125.000  por persona");

                let id5 = paquetes00[4].id;


                const precio5 = paquetes00[4].precio;
                paquetes.push(precio5);

                valorFinal(precio5);
                paquetes.push(id5);
                break;

            case "New York":

                alert("El valor del aereo + hotel a New York cuesta $350.000  por persona");
                let id6 = paquetes00[5].id;


                const precio6 = paquetes00[5].precio;
                paquetes.push(precio6);

                valorFinal(precio6);
                paquetes.push(id6);
                break;

            case "Bali, Indonesia":
                let id7 = paquetes00[6].id;


                alert("El valor del aereo + hotel a Bali, Indonesia cuesta $325.000  por persona");

                const precio7 = paquetes00[6].precio;
                paquetes.push(precio7);

                valorFinal(precio7);
                paquetes.push(id7);
                break;

            case "Italia":
                let id8 = paquetes00[7].id;

                alert("El valor del aereo + hotel a Italia cuesta $385.000  por persona");

                const precio8 = paquetes00[7].precio;
                paquetes.push(precio8);

                valorFinal(precio8);
                paquetes.push(id8);
                break;

            case "Paris":
                let id9 = paquetes00[8].id;

                alert("El valor del aereo + hotel a Paris cuesta $370.000  por persona");

                const precio9 = paquetes00[8].precio;
                paquetes.push(precio9);

                valorFinal(precio9);
                paquetes.push(id9);
                break;

            case "Australia":
                let id10 = paquetes00[9].id;

                alert("El valor del aereo + hotel a Australia cuesta $350.000  por persona");

                const precio10 = paquetes00[9].precio;
                paquetes.push(precio10);

                valorFinal(precio10);
                paquetes.push(id10);
                break;

            case "Inglaterra":
                let id11 = paquetes00[10].id;

                alert("El valor del aereo + hotel a Inglaterra cuesta $400.000  por persona");

                const precio11 = paquetes00[10].precio;
                paquetes.push(precio11);

                valorFinal(precio11);
                paquetes.push(id11);
                break;

            case "Punta del Este":

                alert("El valor del aereo + hotel a Punta del Este cuesta $350.000  por persona");
                let id12 = paquetes00[11].id;


                const precio12 = paquetes00[11].precio;
                paquetes.push(precio12);

                valorFinal(precio12);
                paquetes.push(id12);
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
        // console.log(paquetes[6]);

        if(vueloIda.checked){

            const mensaje1 = `Su reserva quedo de esta manera: \n Fecha de partida: ${paquetes[0].value} \n Origen: ${paquetes[2].value}\n Destino: ${paquetes[3].value} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]} \n Id: ${paquetes[6]} `;
            alert(mensaje1);

            // mostrarCarrito();

            // borrarDatos ();

        }else if(vueloIdaYVuelta.checked) {
            // console.log(paquetes.id);
            const mensaje2 = `Su reserva quedo de esta manera: \n Fecha de partida: ${paquetes[0].value} \n Fecha de vuelta: ${paquetes[1].value} \n Origen: ${paquetes[2].value}\n Destino: ${paquetes[3].value} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]} \n Id: ${paquetes[6]}  `;
            alert(mensaje2);

            // mostrarCarrito();
            // borrarDatos(); // consultar si hay manera de solo cambiar algo del inner.html
        }

        function borrarDatos (){
            // borro datos de los inputs
            fecha1.value = "";
            fecha2.value = "";
            origen.value = "";
            destino.value = "";
            cantidadDePasajeros.value = "";
            vueloIdaYVuelta.checked = false;
            vueloIda.checked = false;
        }

    })

}
// llamado de la funcion
reserva();


    // Intentando pasar la reserva al carrito
    const carrito = document.querySelector("#carrito");
    const contenedorCarrito = document.querySelector("#lista-carrito tbody");
    const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
    const listaReserva = document.querySelector("#contenedorReserva");

    let reservasCarrito = [];
    // INTENTO DE LOCALSTORAGE
/*     let reservasCarrito =  JSON.parse(localStorage.getItem("reservaCarrito")) ;
    if(!reservasCarrito){
        reservasCarrito = [];
    }  */

    registroEventListener();

    function registroEventListener(){

        // cuando agregas reserva al apretar "buscar Reserva"
        listaReserva.addEventListener("click", agregarReserva);

        // eliminar cursos del carrito
        carrito.addEventListener("click", eliminarReserva); 

        // vaciar el carrito
        vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
    }

        
    function vaciarCarrito (e){
        if(e.target.classList.contains("vaciar-carrito")){
            contenedorCarrito.innerHTML = "";
        }
    }

    function agregarReserva(e){

        if(e.target.classList.contains("boton-reservar")){
            const reservaSeleccionada = e.target.parentElement.parentElement;
            leerDatosReserva(reservaSeleccionada);
        }
    }

    // elimina la reserva del carrito NECESITO EL ID PARA ESTO

    function eliminarReserva(e){

        // console.log('desde eliminar reserva');

        if(e.target.classList.contains("boton-eliminar")){
            // console.log(e.target.getAttribute("data-id"));
            const reservaId = e.target.getAttribute("data-id");

            // elimina del arreglo la reserva por el data id 

            reservasCarrito = reservasCarrito.filter ( reserva => reserva.id !== reservaId); // no me funca con dos iguales y con uno me cambia el valor del id
            console.log(reservasCarrito);
            reservaHTML();  // volvemos aiterar sobre el carrito y muestra el html
        }
    } 



    // lee el contenido de la reserva
    function leerDatosReserva(reserva){
        // console.log(reserva);

        // crear objeto
        const infoReserva = {
            fechaPartida: reserva.querySelector("#fechaSalida").value,
            fechaVuelta: reserva.querySelector("#fechaVuelta").value,
            origen: reserva.querySelector("#origen").value,
            destino: reserva.querySelector("#destino").value,
            precio: paquetes[4],
            precioDescuento: paquetes[5] ,
            id: paquetes[6],
            cantidad: 1,
        }
    // agrega elementos al arreglo de reservacarrito
        reservasCarrito = [...reservasCarrito, infoReserva];

        console.log(reservasCarrito);

        reservaHTML();
    }

    // muestra en el carrito el html
    function reservaHTML(){

        // localStorage.setItem("reservaCarrito", JSON.stringify(reservasCarrito));

        //limpiar el html
        limpiarHTML();

        //recorre el carrito y genera el html
        reservasCarrito.forEach( reserva => {
            // optimizando con variables
            const { fechaPartida, fechaVuelta, origen, destino, precio, precioDescuento, id, cantidad} = reserva;
            
            const row = document.createElement("tr");
            // row.classList.add ("row")
            row.innerHTML = `
                                <td class="productoEnCarrito2-p" >Fecha de Partida: ${fechaPartida} 
                                                                <p>Fecha de Vuelta: ${fechaVuelta}</p>
                                                                <p>Origen: ${origen}</p>
                                                                <p>Destino: ${destino}</p> 
                                </td>
                                
                                <td class="productoEnCarrito2-p" >Precio: $${precio}
                                                                <p>Precio con descuento: $${precioDescuento}</p>
                                </td>
                                <td>${cantidad}</td>
                                <td><button data-id ="${id}" class = "boton-eliminar icono2 jam jam-trash"></button></td>
                                <td> <button data-id ="${id}" class = "boton-resta  icono2 jam jam-minus"></button> </td>
                                <td> <button data-id ="${id}" class = "boton-suma  icono2 jam jam-plus"></button> </td>
                            `;
            // Agrega el html de la reserva en el tbody
            contenedorCarrito.append(row);
        })
        // alert("Se agrego al carrito")
    }

    // elimina las reservas del tbody
    function limpiarHTML(){
        // forma lenta de borrado
        // contenedorCarrito.innerHTML = "";

        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }
    }

    // Necesito el id para esto}

    contenedorCarrito.addEventListener("click", (e) =>{

        const mas = e.target.classList.contains("boton-suma");
        const menos = e.target.classList.contains("boton-resta");

        if( mas || menos){
            for(let i = 0; i < reservasCarrito.length; i++){
                if(reservasCarrito[i].id === e.target.dataset.id){
                    if(mas){
                        reservasCarrito[i].cantidad += 1;
                    }
                    else if(menos){
                        reservasCarrito[i].cantidad -= 1;
                    }
                    reservasCarrito[i].precio = reservasCarrito[i].precioBase * reservasCarrito[i].cantidad;
                }
                if(reservasCarrito[i].cantidad <= 0){
                    reservasCarrito.splice(i,1);
                }
            }
            reservaHTML();
        }
    }); 





// INTENTANDO HACER DINAMICO LO DE MOSTRARPRECIO
/* 
        let busquedaPrecio = paquetes00.find( paquete => paquete.precio == destino.value);
        const precio = paquetes00.precio;

        console.log(precio);
        console.log(busquedaPrecio); */
/* 
        <td class="productoEnCarrito2-p" >Fecha de Vuelta: ${paquetes[1].value} </td> */
