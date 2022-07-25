//array donde seran guardados los paquetes 
const paquetes = [];

//funcion q calcula el valor final de acuerdo al destino q elijan

function valorFinal (precio){
    const cuponDescuento = document.getElementById("descuento");
    let descuento = precio * 0.2;

    if (cuponDescuento.value === "viaje-ya") {
            let resultado = precio - descuento;
            alert(`El valor final con el descuento aplicado es de $${resultado}`);
            paquetes.push(resultado); // [5]
    }
    if (cuponDescuento.value === "VIAJE-YA" || cuponDescuento.value === "viaje-ya"){
        alert("Descuento aplicado! Se le hizo un descuento del 20%");
    }
    cuponDescuento.value = "";
}

function reserva (){

//funcion q muestra el precio para pasarla luego en un boton.addEventListener donde muestre el precio

function mostrarPrecio (){

    //VALORES
    switch (destino.value) {
        case "Cancún":
            alert("El valor del aereo + hotel a Cancún cuesta $230.000  por persona");

            let precio1 = 230000;
            paquetes.push(precio1); // [4]

            valorFinal(precio1); 
            break;
        case "Punta Cana":
            alert("El valor del aereo + hotel a Punta Cana cuesta $250.000  por persona");
            let precio2 = 250000;
            paquetes.push(precio2);

            valorFinal(precio2);
            break;
        case "Rio de Janeiro":
            alert("El valor del aereo + hotel a Rio de Janeiro cuesta $150.000  por persona");
            let precio3 = 150000;
            paquetes.push(precio3);

            valorFinal(precio3);
            break;
        case "Bariloche":
            alert("El valor del aereo + hotel a Bariloche cuesta $70.000  por persona");
            let precio4 = 70000;
            paquetes.push(precio4);

            valorFinal(precio4);
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

        }else if(vueloIdaYVuelta.checked) {

            const mensaje2 = `Su reserva quedo de esta manera: \n Fecha de partida: ${paquetes[0].value} \n Fecha de vuelta: ${paquetes[1].value} \n Origen: ${paquetes[2].value}\n Destino: ${paquetes[3].value} \n Precio Final con descuento aplicado: $${paquetes[5]} \n Precio Lista: $${paquetes[4]} \n Cantidad De pasajeros: ${paquetes[6].value}  `;

            alert(mensaje2);
        }

    // borro datos de los inputs
        fecha1.value = "";
        fecha2.value = "";
        origen.value = "";
        destino.value = "";
        // cuponDescuento.value = "";
        cantidadDePasajeros.value = "";
        vueloIdaYVuelta.checked = false;
        vueloIda.checked = false;
    })
}
// llamado de la funcion
reserva();

//paquetese ya armados ponerlos en carrito. cards chicas

// reserva guardarla en carrito de reserva.




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