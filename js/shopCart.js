// Estructura de la CARD----
/* document.addEventListener("DOMContentLoaded", () => {
    eventBotonAddToCart();
}); */

// Dom content loaded en JQUERY $(document).ready(function())
$(eventBotonAddToCart());


// ===================================================================
// ======================== Button CARDS ==============================
// ===================================================================

function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll(".addToCart").forEach((item) => {
        item.addEventListener("click", clickAddToCart); // Call Back function clickAddtoCart
    });
}

// ===================================================================
// ==============CLICK EN EL BOTON PARA AGREGAR CARRITO ================
// ===================================================================

function clickAddToCart(event) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    event.preventDefault();
    const button = event.target;
    const producto = button.closest(".cards");
    const nombreProd = producto.querySelector(".cards__titulo__h4").textContent;
    let precioProd = producto.querySelector(".cards__precio-precio").textContent;
    precioProd = parseFloat(precioProd); // convertir a numero
    const imgProd = producto.querySelector(".cards__img").src;

    agregarCarrito(nombreProd, precioProd, imgProd); // ===Invocamos la funcion con estos parametros====
}
// ===================================================================
// ============== Busca en el ARRAY [Carrito] los productos===========

var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
// Si carrito existe en Local, parsear e; JSon. Else array vacio []

function agregarCarrito(nombreProd, precioProd, imgProd) {
    const encontrarProd = carrito.find((producto) => producto.nombreProd === nombreProd);

    if (encontrarProd) {
        encontrarProd.cantidadProd ++;
    } else {
        agregarProducto = {
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
    mostrarCantidadItems()
    localStorage.carrito = JSON.stringify(carrito); // Convertimo a string/JSON y guardamos en LOCAL STORAGE
}

// ==================================================================================
// ======================== Creamos el prodcuto en el NAV CART=======================
// ==================================================================================
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
                <span class = "remove-item">quitar</span>
            </div>
            <div class="navCart__cantidad">
            <input onchange="inputCantidad(event)" class="navCart__cantidad__items" type="number" min = "0" name = ${
            carrito.indexOf(producto)
        } value= ${
            producto.cantidadProd
        }>
                </div>`;

        itemsCarrito.innerHTML = navCartItems;
        contenidoCarrito.append(itemsCarrito);

    });
    cartTotal()
    mostrarCantidadItems()
    butonVaciarCarrito()

};

function cartTotal() {
    let total = 0;
    carrito.forEach(navCartItem => {
        const itemPrice = navCartItem.precioProd
        const itemCantidad = navCartItem.cantidadProd
        total = total + (itemPrice * itemCantidad);
    });
    totalCarrito.innerHTML = `${
        total.toFixed(2)
    }`
};

// ==============================================================================
// ===================== Clickeamos en el Icono de Carrrito =====================
// ==============================================================================
// ==============================================================================
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
})

// ========================================================================
// -----------Icono Cantidad de Productos en el Carrito----------------
// ========================================================================
const cantidadTotal = document.querySelector('.carrito-items');

function mostrarCantidadItems() {
    const totalItems = carrito.reduce((acum, item) => acum + item.cantidadProd, 0)
    cantidadTotal.innerHTML = `${totalItems}`

};

// var totalisimo = mostrarCantidadItems()// cantidadTotal.append(totalismo)// =============================================================================// ===========================INPUT CANTIDAD====================================// =============================================================================
function inputCantidad(event) {
    console.log(event.target.value);
}
// ==========================================================================
// ==========================================================================


// ==========================================================================
// ========================= VACIAR COMPRA ==================================
// ==========================================================================

const vaciarCart = document.createElement('button');
const buttons = document.querySelector('.navCart__buttons');

function butonVaciarCarrito() {
    if (carrito.length != 0) {
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
// ========================= QUITAR iTEM DE CARRITO =========================
// ==========================================================================


// ==========================================================================
// ========================= REALIZAR COMPRA ================================
// ==========================================================================


// SCOPES && CLOSURES VIDEO N19========


// var a = 10;
// var fn = function(){
//     console.log(a);
// };
// setTimeout(fn, 5000);
// console.log('Done');

// =========================================================================
