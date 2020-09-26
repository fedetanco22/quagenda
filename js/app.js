function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll('.addToCart');
    $eventoAgregarCarrito.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', clickAddToCart)
    })
};

function clickAddToCart(event) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    const button = event.target;
    const producto = button.closest('.cards');
    const nombreProd = producto.querySelector('.cards__titulo__h4').textContent;
    const precioProd = producto.querySelector('.cards__precio-precio').textContent;
    const imgProd = producto.querySelector('.cards__img').src;
    const cantidadProd = 0;


    agregarCarrito(nombreProd, precioProd, imgProd, cantidadProd);
};

// ----CREAMOS EL NAV CART P[ARA EL CARRITO DE COMPRAS------
const cart = document.querySelector('.carrito');
const botonCarrito = document.querySelector('.carrito-button').addEventListener('click', navCarritoCompras);

const navCarrito = document.createElement('div');
const overlayCarrito = document.createElement('div');
const closeCarrito = document.createElement('span');
const closeIcon = document.createElement('i');
const contenidoCarrito = document.createElement('div');
const tituloCarrito = document.createElement('h2');
// ---- -CART FOOTER -- -- -- -- -
const footerCarrito = document.createElement('div');
const totalCarrito = document.createElement('h3');
const comprarCarrito = document.createElement('button');

const carritoDeCompras = document.querySelector('.carrito');


function navCarritoCompras() { // Darle un target a un evento para generar la carga de los productos!
    overlayCarrito.className = 'overlay';
    cart.appendChild(overlayCarrito);

    navCarrito.className = 'navCart';
    cart.appendChild(navCarrito);
    // ----BOTON CERRAR CARRITO------
    closeCarrito.className = 'navCart__close';
    closeIcon.className = 'navCart__close--icon far fa-times-circle';
    closeCarrito.appendChild(closeIcon);
    navCarrito.appendChild(closeCarrito);
    // ----TITULO-----
    tituloCarrito.className = 'navCart__titulo';
    tituloCarrito.textContent = 'Carrito';
    navCarrito.appendChild(tituloCarrito);
    // -----Contendio GRAL-----
    contenidoCarrito.className = 'navCart__contenido';
    navCarrito.appendChild(contenidoCarrito);


    // ---- -CART FOOTER -- -- -- -- -

    footerCarrito.className = 'navCart__footer';

    totalCarrito.className = 'navCart__footer--h3';
    totalCarrito.innerHTML = `total: <span class="navCart__cartTotal" > ${
        productos.precio // Ver como poner esto
    } </span>`

    comprarCarrito.className = 'navCart__footer--comprarBtn btn';
    comprarCarrito.textContent = 'comprar';
    // separar con un span el total del $precio total


    footerCarrito.appendChild(totalCarrito);
    navCarrito.appendChild(footerCarrito);


    navCarrito.appendChild(comprarCarrito);


};

var carrito = [];

// ------------- Function declaration ------------------------------
function agregarCarrito(nombreProd, precioProd, imgProd, cantidadProd) {

    var encontrarProd = carrito.find(producto => producto.nombreProd == nombreProd)

    if (encontrarProd) {
        encontrarProd.cantidadProd ++

    } else {
        agregarProducto = {
            nombreProd: nombreProd,
            precioProd: precioProd,
            imgProd: imgProd,
            cantidadProd: 1
        }
        carrito.push(agregarProducto)

    }
    // ------------- Alerta cuando agregamos al carrito --------------------
    swal("Excelente!", 'Producto agregado al carrito de compras!', "success");

    agregarItemsAlCarrito()


};

const itemsCarrito = document.createElement('div');
const imgCarrito = document.createElement('div');
const descripcionCarrito = document.createElement('div');
const nombreCarrito = document.createElement('h4');
const precioProducto = document.createElement('h5');
const quitarProd = document.createElement('span');
const cantidadCarrito = document.createElement('div');
const chevArriba = document.createElement('i');
const numCantCarrito = document.createElement('p');
const chevAbajo = document.createElement('i');


function agregarItemsAlCarrito(nombreProd, precioProd, imgProd, cantidadProd) {

    carrito.forEach(producto => {
        // ------------------ITEMS---------------
        // Contenedor
        itemsCarrito.className = 'navCart__items';
        // Imagen
        imgCarrito.className = 'navCart__items--img';
        imgCarrito.innerHTML = `<img src=" ${
            producto.imgProd
        }" >`
        // Nombre Productos
        descripcionCarrito.className = 'navCart__items__producto';
        nombreCarrito.className = 'navCart__items--nombre';
        nombreCarrito.textContent = `${
            producto.nombreProd
        }`; // va dependiendo el producto ${prodctos.nombre}
        precioProducto.className = 'navCart__items--precio';
        precioProducto.textContent = `${
            producto.precioProd
        }`;
        quitarProd.className = 'remove-item';
        quitarProd.textContent = 'quitar'
        // --------Cantidad---------
        cantidadCarrito.className = 'navCart__items__cantidad';
        // flecha chevron arriba
        chevArriba.className = 'navCart__items__cantidad--flecha fas fa-chevron-up';
        // Cantidad Productos
        numCantCarrito.className = 'navCart__items__cantidad--num';
        numCantCarrito.textContent = `${
            producto.cantidadProd
        }`;
        // flecha chevron abajo
        chevAbajo.className = 'navCart__items__cantidad--flecha fas fa-chevron-down';


        contenidoCarrito.appendChild(itemsCarrito);
        itemsCarrito.appendChild(imgCarrito);

        descripcionCarrito.appendChild(nombreCarrito);
        descripcionCarrito.appendChild(precioProducto);
        descripcionCarrito.appendChild(quitarProd);

        itemsCarrito.appendChild(descripcionCarrito)
        itemsCarrito.appendChild(cantidadCarrito);

        cantidadCarrito.appendChild(chevArriba);
        cantidadCarrito.appendChild(numCantCarrito);
        cantidadCarrito.appendChild(chevAbajo);

    })

};
