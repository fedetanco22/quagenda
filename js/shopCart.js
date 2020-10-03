// Estructura de la CARD----
document.addEventListener("DOMContentLoaded", () => {
    eventBotonAddToCart();

});

// ---Button CARDS
function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll(".addToCart").forEach((item) => {
        item.addEventListener("click", clickAddToCart); // Call Back function clickAddtoCart
    });
}

function clickAddToCart(event) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    event.preventDefault();
    const button = event.target;
    const producto = button.closest(".cards");
    const nombreProd = producto.querySelector(".cards__titulo__h4").textContent;
    let precioProd = producto.querySelector(".cards__precio-precio").textContent;
    precioProd = parseFloat(precioProd); // convertir a numero
    const imgProd = producto.querySelector(".cards__img").src;

    agregarCarrito(nombreProd, precioProd, imgProd);
}

var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
// Si carrito existe en Local, else array vacio []
// ------------- Function declaration ------------------------------
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
        carrito.push(agregarProducto);
    }
    // ------------- Alerta cuando agregamos al carrito --------------------
    swal("Excelente!", 'Producto agregado al carrito de compras!', "success");
    agregarItemsAlCarrito();
    localStorage.carrito = JSON.stringify(carrito);
}

// ----CREAMOS EL NAV CART PARA EL CARRITO DE COMPRAS------
// const cart = document.querySelector(".carrito");

const botonCarrito = document.querySelector(".carrito-button").addEventListener("click", navCarritoCompras);
const overlayCarrito = document.querySelector('.overlay')
const navCarrito = document.querySelector('.navCart')
const contenidoCarrito = document.querySelector('.navCart__contenido')

function navCarritoCompras() {
    showCart()
}

function agregarItemsAlCarrito() {

    carrito.forEach((producto) => { // ------------------ITEMS---------------

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
                <input type = "number" name = "" class = "navCart__cantidad__items" value ="1">
                </div>`;

        itemsCarrito.innerHTML = navCartItems;
        contenidoCarrito.append(itemsCarrito);

        cartTotal();
        mostrarCantidadItems()


    });
};

function cartTotal() {
    let total = 0;
    const cartTotal = document.querySelector('.navCart__cartTotal');
    const cartItems = document.querySelectorAll('.navCart__items');
    cartItems.forEach(navCartItem => {
        const itemPrice = parseInt(navCartItem.querySelector('.navCart__items--precio').textContent);
        const itemCantidad = parseInt(document.querySelector('.navCart__cantidad__items').value);
        total = total + itemPrice * itemCantidad;
    });
    cartTotal.innerHTML = `${
        total.toFixed(2)
    }`
};

function showCart() {
    overlayCarrito.classList.add('overlay__transparentBcg');
    navCarrito.classList.add('navCart__showCart');
}

const closeIcon = document.querySelector('.navCart__close--icon').addEventListener('click', closeCart)

function closeCart() {
    overlayCarrito.classList.remove('overlay__transparentBcg');
    navCarrito.classList.remove('navCart__showCart');
}


function mostrarCantidadItems() {
    let totalItems = 0;
    const cantidadTotal = document.querySelector('.carrito-items');
    const cartItems = document.querySelectorAll('.navCart__items');
    cartItems.forEach(item => {
        const itemCantidad = parseInt(item.querySelector('.navCart__cantidad__items').value);
        totalItems = totalItems + itemCantidad
    })

    cantidadTotal.innerHTML = `${totalItems}`
};
