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
    const encontrarProd = carrito.find((producto) => producto.nombreProd == nombreProd);

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
    // swal("Excelente!", 'Producto agregado al carrito de compras!', "success");
    agregarItemsAlCarrito();
    localStorage.carrito = JSON.stringify(carrito);
}

// ----CREAMOS EL NAV CART PARA EL CARRITO DE COMPRAS------
const cart = document.querySelector(".carrito");


const botonCarrito = document.querySelector(".carrito-button").addEventListener("click", navCarritoCompras);
const overlayCarrito = document.querySelector('.overlay')
const navCarrito = document.querySelector('.navCart')
const contenidoCarrito = document.querySelector('.navCart__contenido')

function navCarritoCompras() {
    showCart()
}

function showCart() {
    overlayCarrito.classList.add('overlay__transparentBcg');
    navCarrito.classList.add('navCart__showCart');
}

const closeIcon = document.querySelector('.navCart__close--icon').addEventListener('click', closeCart)

function closeCart() {
    overlayCarrito.classList.remove('overlay__transparentBcg');
    navCarrito.classList.remove('navCart__showCart');
}

function agregarItemsAlCarrito() {
    carrito.forEach((producto) => { // ------------------ITEMS---------------
        const itemsCarrito = document.createElement("div");
        itemsCarrito.className = "navCart__items";
        contenidoCarrito.appendChild(itemsCarrito);

        const imgCarrito = document.createElement("div");
        // Imagen
        imgCarrito.className = "navCart__items--img";
        imgCarrito.innerHTML = `<img src=" ${
            producto.imgProd
        }" >`;
        itemsCarrito.appendChild(imgCarrito);

        const descripcionCarrito = document.createElement("div");
        const nombreCarrito = document.createElement("h4");
        // Nombre Productos
        descripcionCarrito.className = "navCart__items__producto";
        nombreCarrito.className = "navCart__items--nombre";
        nombreCarrito.textContent = `${
            producto.nombreProd
        }`;
        const precioProducto = document.createElement("h5");
        precioProducto.className = "navCart__items--precio";
        precioProducto.textContent = `${
            producto.precioProd
        }`;
        const quitarProd = document.createElement("span");
        quitarProd.className = "remove-item";
        quitarProd.textContent = "quitar";

        descripcionCarrito.appendChild(nombreCarrito);
        descripcionCarrito.appendChild(precioProducto);
        descripcionCarrito.appendChild(quitarProd);
        itemsCarrito.appendChild(descripcionCarrito);

        // --------Cantidad---------
        const cantidad = document.createElement("div");
        cantidad.className = "navCart__cantidad";

        itemsCarrito.appendChild(cantidad);

        const cantidadCarrito = document.createElement("input");
        cantidadCarrito.className = "navCart__items__cantidad";
        setAttributes(cantidadCarrito, {
                name: `${
                carrito.indexOf(producto)
            }`,
            type: "change"
        });
        itemsCarrito.appendChild(cantidadCarrito);

        const chevArriba = document.createElement("i");

        const chevAbajo = document.createElement("i");
        // flecha chevron arriba
        chevArriba.className = "navCart__items__cantidad--flecha fas fa-chevron-up";

        // flecha chevron abajo
        chevAbajo.className = "navCart__items__cantidad--flecha fas fa-chevron-down";

        cantidad.appendChild(chevArriba);
        cantidad.appendChild(cantidadCarrito);
        cantidad.appendChild(chevAbajo);
    });
}

function inputCantidad() {
    const inputOnChange = document.querySelector(".navCart__items__cantidad");
    inputOnChange.forEach((inputChange) => {
        inputChange.addEventListener("change", changeInput);
    });
}

function changeInput(event) {
    event.preventDefault();
    const input = event.target;
    console.log(input);
}


// Cerrar Carrito---------------------------

let toggleStatus = false;
function closeToggle() {
    if (! toggleStatus) {
        document.querySelector('.carrito').style.right = "-500px";

    } else if (toggleStatus) {
        document.querySelector('.carrito').style.right = "0px"

    }
}
