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

};

// ---------------------CARDS PRODs-----------------------------------


const cart = document.querySelector('.carrito');
const botonCarrito = document.querySelector('.carrito-button').addEventListener('click', navCarritoCompras);
const botonCerrarCarrito = document.querySelector('.navCart__close');
const botonVaciarCarrito = document.querySelector('.navCart__footer--vaciarBtn');
const overlayCarrito = document.querySelector('.overlay');
const itemsCarrito = document.querySelector('.navCart__items__producto');
const totalCarrito = document.querySelector('navCart__items__cantidad--num');


// ------Navegador del Carrito de Compras------------------------

function navCarritoCompras(event) { // Darle un target a un evento para generar la carga de los productos!
    const button = event.target;
    console.log("navCarritoCompras -> button", button)

    const overlayCarrito = document.createElement('div');
    overlayCarrito.className = 'overlay';

    const closeCarrito = document.createElement('span');
    closeCarrito.className = 'navCart__close';
    const closeIcon = document.createElement('i');
    closeIcon.className = 'navCart__close--icon far fa-times-circle';

    const navCarrito = document.createElement('div');
    navCarrito.className = 'navCart';
    const contenidoCarrito = document.createElement('div');
    contenidoCarrito.className = 'navCart__contenido';

    const tituloCarrito = document.createElement('h2');
    tituloCarrito.className = 'navCart__titulo';
    tituloCarrito.textContent = 'Carrito';


    // ------------------ITEMS---------------
    // Contenedor
    const itemsCarrito = document.createElement('div');
    itemsCarrito.className = 'navCart__items';
    // Imagen
    const imgCarrito = document.createElement('div');
    imgCarrito.className = 'navCart__items--img';
    imgCarrito.innerHTML = ``


    // Nombre Productos
    const descripcionCarrito = document.createElement('div');
    descripcionCarrito.className = 'navCart__items__producto';
    const nombreCarrito = document.createElement('h4');
    nombreCarrito.className = 'navCart__items--nombre';
    nombreCarrito.textContent = ''; // va dependiendo el producto ${prodctos.nombre}
    const precioProd = document.createElement('h5');
    precioProd.className = 'navCart__items--precio';
    precioProd.textContent = '';

    const quitarProd = document.createElement('span');
    quitarProd.className = 'remove-item';
    quitarProd.textContent = 'quitar'


    // --------Cantidad---------
    const cantidadCarrito = document.createElement('div');
    cantidadCarrito.className = 'navCart__items__cantidad';
    // flecha chevron arriba
    const chevArriba = document.createElement('i');
    chevArriba.className = 'navCart__items__cantidad--flecha fas fa-chevron-up';

    // Cantidad Productos
    const numCantCarrito = document.createElement('p');
    numCantCarrito.className = 'navCart__items__cantidad--num';
    numCantCarrito.textContent = ''
    // flecha chevron abajo
    const chevAbajo = document.createElement('i');
    chevAbajo.className = 'navCart__items__cantidad--flecha fas fa-chevron-down';

    // -----CART FOOTER---------
    const footerCarrito = document.createElement('div');
    footerCarrito.className = 'navCart__footer';
    const totalCarrito = document.createElement('h3');
    totalCarrito.className = 'navCart__footer--h3';
    totalCarrito.innerHTML = `total: ar$ <span class="navCart__cartTotal" > ${
        productos.precio // Ver como poner esto
    } </span>`

    const vaciarCarrito = document.createElement('button');
    vaciarCarrito.className = 'navCart__footer--vaciarBtn btn';
    vaciarCarrito.textContent = 'Vaciar carrito';

    // separar con un span el total del $precio total


    cart.appendChild(overlayCarrito);
    cart.appendChild(navCarrito);
    closeCarrito.appendChild(closeIcon);
    navCarrito.appendChild(closeCarrito);
    navCarrito.appendChild(contenidoCarrito);
    contenidoCarrito.appendChild(tituloCarrito);

    navCarrito.appendChild(itemsCarrito);
    itemsCarrito.appendChild(imgCarrito);

    itemsCarrito.appendChild(descripcionCarrito);
    descripcionCarrito.appendChild(nombreCarrito);
    descripcionCarrito.appendChild(precioProd);
    descripcionCarrito.appendChild(quitarProd);
    footerCarrito.appendChild(totalCarrito);
    navCarrito.appendChild(footerCarrito);

    navCarrito.appendChild(vaciarCarrito);


    itemsCarrito.appendChild(cantidadCarrito);

    cantidadCarrito.appendChild(chevArriba);
    cantidadCarrito.appendChild(numCantCarrito);
    cantidadCarrito.appendChild(chevAbajo);


};
