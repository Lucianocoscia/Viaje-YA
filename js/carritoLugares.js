const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaPaquetes = document.querySelector("#lista-paquetes");

// let paquetesCarrito = [];
let paquetesCarrito =  JSON.parse(localStorage.getItem("carrito")) ;
if(!paquetesCarrito){
    paquetesCarrito = [];
}

// Agrega el html del carrito en el tbody



// FUNCIONES
function agregarPaquete (e){
    // e.preventDefault(); //para q no se te tire para arriba

    if(e.target.classList.contains("agregar-carrito")){
        const paqueteSeleccionado = e.target.parentElement;

        leerDatosPaquete(paqueteSeleccionado);
    }

}

// Elimina paquete del carrito
function eliminarPaquete (e){
    if(e.target.classList.contains("boton-eliminar")){
        const paqueteId = e.target.getAttribute("data-id");
        //Elimina del arreglo de paquetesCarrito por el data-id
        paquetesCarrito = paquetesCarrito.filter (  paquete => paquete.id !== paqueteId);

        carritoHTML(); //iterar sobre el carrito y mostrar su HTML
    }
}

// funcion para limpiar el carrito
function limpiarHTML(){
    // forma lenta
    // contenedorCarrito.innerHTML = "";

    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
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


// Muestra el carrito de compras en el html
function carritoHTML (){

    localStorage.setItem("carrito", JSON.stringify(paquetesCarrito));
    
    //Limpiar el html
    limpiarHTML();

    // Recorre el carrito y genera el html
    paquetesCarrito.forEach( paquete => {

        // optimizando con variables
        const { titulo, precio, cantidad, id } = paquete;

        const row = document.createElement("tr");
        row.innerHTML = `
                        <td>${titulo}</td>
                        <td>${precio}</td>
                        <td>${cantidad}</td>
                        <td> <button data-id ="${id}" class = "boton-eliminar icono2 jam jam-trash"></button> </td>
                        <td> <button data-id ="${id}" class = "boton-resta  icono2 jam jam-minus"></button> </td>
                        <td> <button data-id ="${id}" class = "boton-suma  icono2 jam jam-plus"></button> </td>
                        `;
        // Agrega el html del carrito en el tbody
        contenedorCarrito.append(row);
    })
}



//Lee el contenido del HTML, al q le dimos click y extrae la informacion del paquete
function leerDatosPaquete(paquete){
    // console.log(paquete);

    //Creo el objeto con el contenido del paquete actual
    const infoPaquete = {
        imagen: paquete.querySelector("img").src,
        titulo: paquete.querySelector("h2").textContent,
        precio: paquete.querySelector("p").textContent,
        id: paquete.querySelector("button").getAttribute("data-id"),
        precioBase: paquete.querySelector("p").textContent,
        cantidad: 1,
    }

    //revisa si un elemento ya existe en el carrito
    const existe = paquetesCarrito.some ( paquete => paquete.id === infoPaquete.id);

    if(existe){
        //actualizamos la cantidad .map crea un nuevo arreglo por eso la variable
        const paquetes = paquetesCarrito.map ( paquete => {
            if(paquete.id === infoPaquete.id){
                paquete.cantidad += 1;
                // paquete.precio = paquete.precioBase * cantidad;
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
    Swal.fire(
        'Buen trabajo!',
        'Se ha guardado el paquete en el carrito',
        'success'
    )
    console.log(paquetesCarrito);

/*     sessionStorage.setItem("paquetesCarrito", JSON.stringify(paquetesCarrito))
    sessionStorage.getItem("paquetesCarrito") */

    carritoHTML();
} 
carritoHTML();

contenedorCarrito.addEventListener("click", (e) =>{
    const mas = e.target.classList.contains("boton-suma");
    const menos = e.target.classList.contains("boton-resta");
    if( mas || menos){
        for(let i = 0; i < paquetesCarrito.length; i++){
            if(paquetesCarrito[i].id === e.target.dataset.id){
                if(mas){
                    paquetesCarrito[i].cantidad += 1;
                }
                else if(menos){
                    paquetesCarrito[i].cantidad -= 1;
                }
                paquetesCarrito[i].precio = paquetesCarrito[i].precioBase * paquetesCarrito[i].cantidad;
            }
            if(paquetesCarrito[i].cantidad <= 0){
                paquetesCarrito.splice(i,1);
            }
        }
        carritoHTML();
    }
});
