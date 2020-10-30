// Dom content loaded en JQUERY $(document).ready(function())

$(eventBotonAddToCart());


// ===========================================================================
// ======================== Button CARDS =====================================
// ===========================================================================

function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll(".addToCart").forEach((item) => {
        item.addEventListener("click", clickAddToCart); // Call Back function clickAddtoCart
    });
}
// =============================================================================
// ==============CLICK EN EL BOTON PARA AGREGAR CARRITO ========================
// =============================================================================

function clickAddToCart(event) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    event.preventDefault();
    const button = event.target;
    const producto = button.closest(".cards");
    const idProd = producto.id
    const nombreProd = producto.querySelector(".cards__titulo__h4").textContent;
    let precioProd = producto.querySelector(".cards__precio-precio").textContent;
    precioProd = parseFloat(precioProd); // convertir a numero
    const imgProd = producto.querySelector(".cards__img").src;

    agregarCarrito(idProd, nombreProd, precioProd, imgProd); // ===Invocamos la funcion con estos parametros====
}
// =============================================================================
// ============== Busca en el ARRAY [Carrito] los productos=====================
// =============================================================================
var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
// Si carrito existe en Local, parsear e; JSon. sino q me de un array vacio []

function agregarCarrito(idProd, nombreProd, precioProd, imgProd) {

    const encontrarProd = carrito.find((producto) => producto.nombreProd === nombreProd);

    if (encontrarProd) {
        encontrarProd.cantidadProd ++;
    } else {
        agregarProducto = {
            idProd: idProd,
            nombreProd: nombreProd,
            precioProd: precioProd,
            imgProd: imgProd,
            cantidadProd: 1
        };
        carrito.push(agregarProducto); // Solo coloca en nuestro Array el producto nuevo con esas propiedades
    }
    // ===============Alerta cuando agregamos al carrito =====================
    swal("Excelente!", 'Producto agregado al carrito de compras!', "success");
    // =======================================================================
    cargarItemsAlCarrito(); // Crea el porducto en el NAV Cart
    mostrarCantidadItems(); // Icono en el carrito
    localStorage.carrito = JSON.stringify(carrito); // Convertimo a string/JSON y guardamos en LOCAL STORAGE
}

// =============================================================================
// ================================ Renderizamos ===============================
// ======================== Creamos el prodcuto en el NAV CART==================
// =============================================================================

const overlayCarrito = document.querySelector('.overlay');
const navCarrito = document.querySelector('.navCart');
const contenidoCarrito = document.querySelector('.navCart__contenido');
const totalCarrito = document.querySelector('.navCart__cartTotal');
// const cartTotal = document.querySelector('.navCart__cartTotal');

function cargarItemsAlCarrito() {
    contenidoCarrito.innerHTML = ''; // Vaciamos el contenido para que no se repitan los productos
    carrito.forEach((producto) => {

        const itemsCarrito = document.createElement("div");
        itemsCarrito.className = "navCart__items";

        // contenidoCarrito.appendChild(itemsCarrito);
        const navCartItems = `
            <div class="navCart__items--img">
                <img src=${
            producto.imgProd
        } alt="img-prod">
            </div>
            <div class="navCart__items__producto">
                <h4 class="navCart__items__nombre">${
            producto.nombreProd
        }</h4>
                <h5 class="navCart__items--precio">${
            producto.precioProd
        }</h5>
        <span class = "quitar-item" data-id = ${
            producto.idProd
        }>quitar</span>

            </div>
            <div class="navCart__cantidad">
                <i class = "fas fa-chevron-up navCart__cantidad__items--flecha" data-id=${
            producto.idProd
        } > </i>

                <input class="navCart__cantidad__items" type="number" min = "0" name = ${
            carrito.indexOf(producto)
        } value= ${
            producto.cantidadProd
        }>
                <i class = "fas fa-chevron-down navCart__cantidad__items--flecha" data-id=${
            producto.idProd
        }> </i>


                </div>`;

        itemsCarrito.innerHTML = navCartItems;
        contenidoCarrito.append(itemsCarrito);

    });
    cartTotal()
    mostrarCantidadItems()
    butonVaciarCarrito()
};

// ==============================================================================
// =========================== Suma TOTAL Compra ================================
// ==============================================================================
function cartTotal() {
    let total = 0;
    carrito.forEach(navCartItem => {
        const itemPrice = navCartItem.precioProd
        const itemCantidad = navCartItem.cantidadProd
        total = total + (itemPrice * itemCantidad);
    });
    totalCarrito.innerHTML = `${
        total.toFixed(2)
    }`;
    return total
};


// ==============================================================================
// ===================== Clickeamos en el Icono de Carrrito =====================
// =========================JQUERY NavCart Show & Close==========================
// ==============================================================================

$('.carrito-button').on('click', function () {
    $(overlayCarrito).addClass('overlay__transparentBcg');
    $(navCarrito).addClass('navCart__showCart');
    cargarItemsAlCarrito();
})

$('.navCart__close--icon').on('click', function () {
    $(overlayCarrito).removeClass('overlay__transparentBcg');
    $(navCarrito).removeClass('navCart__showCart');
    $(datos).hide()
});


// ========================================================================
// =========== Icono Cantidad de Productos en el Carrito ==================
// ========================================================================
document.addEventListener('DOMContentLoaded', mostrarCantidadItems)
const cantidadTotal = document.querySelector('.carrito-items');

function mostrarCantidadItems() {
    const totalItems = carrito.reduce((acum, item) => acum + item.cantidadProd, 0)
    cantidadTotal.innerHTML = `${totalItems}`
};


// ==============================================================================
// ============================ EVENT BUBBLING ==================================
// ==============================================================================
// ============================ QUITAR ELEMENTO =================================
// ==============================================================================
// =========================== Sumar y Restar ===================================
// =========================== Cantidad Items====================================
// ==============================================================================

document.addEventListener('DOMContentLoaded', function () {

    contenidoCarrito.addEventListener('click', event => {

        if (event.target.classList.contains('quitar-item')) {
            let quitarItem = event.target;
            let id = Number(quitarItem.dataset.id);

            let item = buscarItem(id); // cuardamos el valor devuelto de la funcion
            let indexItem = carrito.indexOf(item);
            carrito.splice(indexItem, 1);
            // eliminamos desde el index del item 1 lugar
            // Eliminamos el hijo de navCart__contenido
            contenidoCarrito.removeChild(quitarItem.parentElement.parentElement);

        } else if (event.target.classList.contains('fa-chevron-up')) {
            let itemCart = event.target;
            let id = Number(itemCart.dataset.id);

            let input = itemCart.nextElementSibling; // Sibling de la flecha
            let inputCantidad = Number(itemCart.nextElementSibling.value); // extraemos el valor en Numero
            let item = buscarItem(id); // buscamos nustro prod en el array
            inputCantidad++;
            item.cantidadProd ++;

            input.value = inputCantidad;

        } else if (event.target.classList.contains('fa-chevron-down')) {

            let itemCart = event.target;
            let id = Number(itemCart.dataset.id);

            let input = itemCart.previousSibling.previousSibling; // Sibling de la flecha
            let inputCantidad = Number(itemCart.previousSibling.previousSibling.value); // extraemos el valor en Numero
            let item = buscarItem(id); // buscamos nustro prod en el array
            inputCantidad--;
            item.cantidadProd --;

            input.value = inputCantidad;

            if (input.value == 0) {
                let indexItem = carrito.indexOf(item);
                carrito.splice(indexItem, 1);
                contenidoCarrito.removeChild(itemCart.parentElement.parentElement);
            }

        };
        butonVaciarCarrito()
        cartTotal()
        mostrarCantidadItems()

        localStorage.carrito = JSON.stringify(carrito)
    })


})

function buscarItem(id) {
    const encontrarItem = carrito.find((item) => item.idProd == id)
    return encontrarItem
}

// ==========================================================================
// ========================= VACIAR COMPRA ==================================
// ==========================================================================

const vaciarCart = document.createElement('button');
const buttons = document.querySelector('.navCart__buttons');

function butonVaciarCarrito() {
    if (carrito.length > 0) {
        vaciarCart.className = 'btn btn-danger';
        vaciarCart.textContent = 'vaciar';
        buttons.prepend(vaciarCart);
        // append node like first child
        buttons.style.display = 'inline-block';

        contenidoCarrito.classList.remove('navCart__contenido--vacio')

        const vaciarCarritoEvent = document.querySelector('.btn-danger');
        vaciarCarritoEvent.addEventListener('click', vaciarCarrito);

    } else {
        buttons.style.display = 'none'
    }
    localStorage.carrito = JSON.stringify(carrito)


};

function vaciarCarrito(event) { //
    event.preventDefault()
    // contenidoCarrito.remove()
    contenidoCarrito.classList.add('navCart__contenido--vacio')

    buttons.style.display = 'none';
    cantidadTotal.innerHTML = '0'
    totalCarrito.innerHTML = '0.00'
    localStorage.clear()
    carrito = []


};

// ==========================================================================
// ========================= REALIZAR COMPRA ================================
// ==========================================================================

// ANIMACION DATOS PERSONALES
const datos = document.querySelector('.datos')
const btnComprarCarrito = document.querySelector('.btn-comprar')
const pagarTotalBtn = document.querySelector('.datos__form__grupo--btn')


const comprar = btnComprarCarrito.addEventListener('click', comprarTotal)

function comprarTotal() {
    navCarrito.classList.remove('navCart__showCart');
    datos.style.display = 'flex'
    datos.classList.add('animate__backInDown', 'datos__mostrar');

    // Asignamos variable a la function de cart total q me devuelve el totaL a pagar
    let totalCompra = cartTotal();
    pagarTotalBtn.innerHTML = `Total a Pagar $${
        totalCompra.toFixed(2)
    }`;
    yearVencimiento()
    mesVencimiento()
}

// ======================================================
// OPTIONS VENCIMIENTO TARJETA ==========================
// ======================================================

function yearVencimiento() {
    const yearHoy = new Date().getFullYear();
    const max = yearHoy + 15

    const yearExpira = document.getElementById('year')

    for (let i = yearHoy; i <= max; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearExpira.appendChild(option)
    }
}
function mesVencimiento() {
    const mesExpira = document.getElementById('mes')

    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        mesExpira.appendChild(option)
    }
}
// ========================================================


// =========================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
// ==============================================================================
