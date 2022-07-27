import { paquetes00 } from "./paquetes.js";

//array donde seran guardados los paquetes 
const paquetes = [];

//funcion q calcula el valor final de acuerdo al destino q elijan

function valorFinal (precio){
    const cuponDescuento = document.getElementById("descuento");
    let descuento = precio * 0.2;

    if (cuponDescuento.value === "VIAJE-YA" || cuponDescuento.value === "viaje-ya"){
        alert("Descuento aplicado! Se le hizo un descuento del 20%");
    }
    if (cuponDescuento.value === "viaje-ya" || cuponDescuento.value === "VIAJE-YA") {
            let resultado = precio - descuento;
            alert(`El valor final con el descuento aplicado es de $${resultado}`);
            paquetes.push(resultado); // [5]
    }

    cuponDescuento.value = "";
}

function reserva (){

    function mostrarPrecio (){

        //VALORES
        switch (destino.value) {
            case "Cancún":

                alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");

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

            case "Austsralia":

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
                alert("No ha ingresado un destino valido");
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
            alert("Se agrego la reserva al carrito");
// Intentando sumarlo al carrito
            const contenedorCarrito = document.getElementById("carrito-contenedor");
            
            let div = document.createElement("div");

            div.classList.add("productoEnCarrito2"); //00:49:36
            
            div.innerHTML = `<p class="productoEnCarrito2-p" >Fecha de Partida: ${paquetes[0].value} </p>
                            <p class="productoEnCarrito2-p" >Origen: ${paquetes[2].value} </p>
                            <p class="productoEnCarrito2-p" >Destino: ${paquetes[3].value} </p>
                            <p class="productoEnCarrito2-p" >Precio: $${paquetes[4]}</p>
                            <p class="productoEnCarrito2-p" >Precio con descuento: $${paquetes[5]}</p>
                            <p class="productoEnCarrito2-p" >Cantidad de pasajeros: ${paquetes[6].value}</p>
                            <p class="productoEnCarrito2-p"  id="cantidad${paquetes00.id}">Cantidad: ${paquetes00.cantidad}</p>
                            <button  id ="eliminar${paquetes00.id}" class = "boton-eliminar"><span class="icono2 jam jam-trash">
                            `
            contenedorCarrito.appendChild(div);



        }else if(vueloIdaYVuelta.checked) {

            const mensaje2 = `Su reserva quedo de esta manera: \n Fecha de partida: ${paquetes[0].value} \n Fecha de vuelta: ${paquetes[1].value} \n Origen: ${paquetes[2].value}\n Destino: ${paquetes[3].value} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]} \n Cantidad De pasajeros: ${paquetes[6].value}  `;

            alert(mensaje2);

            alert("Se agrego la reserva al carrito");

            const contenedorCarrito = document.getElementById("carrito-contenedor");
            
            let div = document.createElement("div");

            div.classList.add("productoEnCarrito2"); //00:49:36
            
            div.innerHTML = `<p class="productoEnCarrito2-p" >Fecha de Partida: ${paquetes[0].value} </p>
                                <p class="productoEnCarrito2-p" >Fecha de Vuelta: ${paquetes[1].value} </p>
                            <p class="productoEnCarrito2-p" >Origen: ${paquetes[2].value} </p>
                            <p class="productoEnCarrito2-p" >Destino: ${paquetes[3].value} </p>
                            <p class="productoEnCarrito2-p" >Precio: $${paquetes[4]}</p>
                            <p class="productoEnCarrito2-p" >Precio con descuento: $${paquetes[5]}</p>
                            <p class="productoEnCarrito2-p" >Cantidad de pasajeros: ${paquetes[6].value}</p>
                            <p class="productoEnCarrito2-p"  id="cantidad${paquetes00.id}">Cantidad: ${paquetes00.cantidad}</p>
                            <button  id ="eliminar${paquetes00.id}" class = "boton-eliminar"><span class="icono2 jam jam-trash">
                            `
            contenedorCarrito.appendChild(div);
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


//paquetese ya armados ponerlos en carrito. cards chicas


// INTENTANDO HACER DINAMICO LO DE MOSTRARPRECIO
/* 
        let busquedaPrecio = paquetes00.find( paquete => paquete.precio == destino.value);
        const precio = paquetes00.precio;

        console.log(precio);
        console.log(busquedaPrecio); */


// CODIGO ANTERIOR DE FUNCION RESERVA SIN APLICAR DOM

/* function reserva(){

    //VIAJE IDA || IDA Y VUELTA
    let consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");

    while(consulta != "ida" && consulta != "ida y vuelta" && consulta !="IDA" && consulta != "IDA Y VUELTA"){
        consulta = prompt("Ingrese si desea vuelo solo de ida o ida y vuelta");

    } 

    if (consulta === "ida" || consulta ==="IDA"){
        alert("Usted eligio solo ida");

    //FECHA
        let fecha1 = prompt("Ingrese la fecha de salida de esta forma: dd/mm/aaaa");
        alert(` La fecha que usted eligio de partida es: ${fecha1}`);
        paquetes.push(fecha1);


        
    }else if (consulta === "ida y vuelta" || consulta === "IDA Y VUELTA")  {
        alert("Usted eligio ida y vuelta");

    // FECHAS
        let fecha1 = prompt("Ingrese la fecha de salida de esta forma: dd/mm/aaaa");

        alert(` La fecha que usted eligio de partida es: ${fecha1}`);
        paquetes.push(fecha1);
    
        let fecha2 = prompt("Ingrese la fecha de vuelta de esta forma: dd/mm/aaaa");
        alert(` La fecha que usted eligio de vuelta es: ${fecha2}`);
        paquetes.push(fecha2);
    }
    

    // ORIGEN
    let origen = prompt("Ingrese desde donde viaja");
    paquetes.push(origen);
    alert(`Usted viaja desde : ${origen}`);
    
    // DESTINOS
    let destino = prompt("Ingrese hacia donde desea viajar:\n 1- Cancún \n 2- Punta Cana \n 3-Rio de Janeiro \n 4-Bariloche");

    while(destino != 1 && destino !=2 && destino != 3 && destino != 4){
        destino = prompt("Ingrese hacia donde desea viajar:\n 1- Cancún \n 2- Punta Cana \n 3-Rio de Janeiro \n 4-Bariloche");
    }


    switch (destino){
        case "1":
            let cancun = "Cancún";
            paquetes.push(cancun);

            alert("Usted eligio Cancún");
            break;
        case "2":
            let puntaCana = "Punta Cana";
            paquetes.push(puntaCana);

            alert("Usted eligio Punta Cana");
            break;
        case "3": 
            let rioDeJaneiro = "Rio de Janeiro";
            paquetes.push(rioDeJaneiro);

            alert("Usted eligio Rio de Janeiro");
            break;
        case "4":
            let bariloche = "Bariloche";
            paquetes.push(bariloche);

            alert("Usted eligio Bariloche");
            break;
        default :
            alert("No ha ingresado un lugar valido");
            break;
    }

    //VALORES
    let valor = prompt("Desea saber el valor del aereo + hotel del lugar que eligio?");

    while(valor != "si" && valor != "SI"){
        valor = prompt("Desea saber el valor del aereo + hotel del lugar que eligio?");
        }

    if(valor === "si" || valor === "SI"){
        
        switch (destino) {
            case "1":
                alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");
                let precio1 = 230000;
                paquetes.push(precio1);

                valorFinal(precio1);
                break;
            case "2":
                alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");
                let precio2 = 250000;
                paquetes.push(precio2);

                valorFinal(precio2);
                break;
            case "3":
                alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");
                let precio3 = 150000;
                paquetes.push(precio3);

                valorFinal(precio3);
                break;
            case "4":
                alert("El valor del aereo + hotel a Bariloche cuesta $70.000  por persona");
                let precio4 = 70000;
                paquetes.push(precio4);

                valorFinal(precio4);
                break;
            default:
                alert("No ha ingresado un valor valido");
                break;
        }
    }



    //Muestro por alert como almacene los datos q registro
        if(consulta == "ida y vuelta"){
            const mensaje2 = `Su reserva quedo de esta manera \n Fecha de partida: ${paquetes[0]} \n Fecha de vuelta: ${paquetes[1]} \n Origen: ${paquetes[2] }\n Destino: ${paquetes[3]} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]}  `;
            alert(mensaje2);
        }

        if(consulta == "ida"){
            const mensaje3 = `Su reserva quedo de esta manera \n Fecha de partida: ${paquetes[0]} \n Origen: ${paquetes[1] }\n Destino: ${paquetes[2]} \n Precio Final con descuento aplicado: $${paquetes[4]} \n Precio Lista:  $${paquetes[3]}   `;
            alert(mensaje3);
        }

}
reserva(); */