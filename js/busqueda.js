import {paquetes00} from "./paquetes.js"

const barraBusqueda = document.getElementById("barraDeBusqueda");

const botonBuscar = document.getElementById("buscar")

botonBuscar.addEventListener("click", () =>{

    let busqueda = paquetes00.find( el => el.destino === barraBusqueda.value);

    Swal.fire({
        title:`${busqueda.destino}` ,
        text:'Mirá el destino que buscaste!' ,
        imageUrl: `${busqueda.img}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: `${busqueda.destino}`,
    })
    barraBusqueda.value = "";
});





/* 
function pregunta(){
    let pregunta1 = prompt("Desea buscar en nuestra lista de paquetes algo mas?");
    if (pregunta1 == "si" || pregunta1 == "SI"){
        let pregunta2 = prompt("Que paquete desea buscar? Escriba aqui el nombre del Destino.")
        // let listaDePaquetes = "";
        // let buscadorDePaquetes = [];
        let filtrados = paquetes00.filter(elemento => elemento.destino == pregunta2);
        for(const item of filtrados){
            console.log(item);
            // buscadorDePaquetes.push(item);
            // alert(`El item q busco es ${buscadorDePaquetes[0]}`);
        }
    }else {
        alert("Disfrute de nuestro portal! Gracias por visitarnos.")
    }
}
pregunta(); */