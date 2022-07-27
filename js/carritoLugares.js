const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaPaquetes = document.querySelector("#lista-paquetes");

let paquetesCarrito = [];

// FUNCIONES
function agregarPaquete (e){
    // e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")){
        const paqueteSeleccionado = e.target.parentElement

        leerDatosPaquete(paqueteSeleccionado);
    }

}

function cargarEventListeners (){
    // cuando agregas un paquete presionando "Agregar al Carrito"
    listaPaquetes.addEventListener("click", agregarPaquete);

    //elimina paquetes del carrito
    carrito.addEventListener("click", eliminarPaquete);

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () =>{
        paquetesCarrito = []; // reseteamos el carrito
        limpiarHTML(); // eliminamos todo del HTML
    })
}
cargarEventListeners();


// funcion para limpiar el carrito
function limpiarHTML(){
    // forma lenta
    // contenedorCarrito.innerHTML = "";

    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

// Muestra el carrito de compras en el html
function carritoHTML (){

    //Limpiar el html
    limpiarHTML();

    // Recorre el carrito y genera el html
    paquetesCarrito.forEach( paquete => {

        // optimizando con variables
        const { titulo, precio, cantidad, id } = paquete;

        const row = document.createElement("tr");
        // row.classList.add ("row")
        row.innerHTML = `
                        <td>${titulo}</td>
                        <td>${precio}</td>
                        <td>${cantidad}</td>
                        <td> <button data-id ="${id}" class = "boton-eliminar icono2 jam jam-trash"></button> </td>
                        `;
        // Agrega el html del carrito en el tbody
    contenedorCarrito.append(row);
    })
}

// ELimina paquete del carrito
function eliminarPaquete (e){
    if(e.target.classList.contains("boton-eliminar")){;
        const paqueteId = e.target.getAttribute("data-id");

        //Elimina del arreglo de paquetesCarrito por el data-id
        paquetesCarrito = paquetesCarrito.filter (  paquete => paquete.id !== paqueteId);

        carritoHTML(); //iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del HtML, al q le dimos click y extrae la informacion del paquete

function leerDatosPaquete(paquete){
    // console.log(paquete);

    //Creo el objeto con el contenido del paquete actual
    const infoPaquete = {
        imagen: paquete.querySelector("img").src,
        titulo: paquete.querySelector("h2").textContent,
        precio: paquete.querySelector("p").textContent,
        id: paquete.querySelector("button").getAttribute("data-id"),
        cantidad: 1,
    }

    //revisa si un elemento ya existe een el carrito
    const existe = paquetesCarrito.some ( paquete => paquete.id === infoPaquete.id);
    if(existe){

        //actualizamos la cantidad .map crea un nuevo arreglo por eso la variable
        const paquetes = paquetesCarrito.map ( paquete => {
            if(paquete.id === infoPaquete.id){
                paquete.cantidad++;
                return paquete; // retorna el objeto actualizado
            }else{
                return paquete; // retorna los objetos que no son los duplicados
            }
        })
        paquetesCarrito = [...paquetes];

    } else{ 
    // Agrega elementos al arreglo del carrito
    paquetesCarrito = [...paquetesCarrito, infoPaquete];
    }



    console.log(paquetesCarrito);
    carritoHTML();
} 




