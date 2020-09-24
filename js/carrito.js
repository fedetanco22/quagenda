var carrito = [];
// ------------- Function declaration ------------------------------
function agregarCarrito(id, nombre, precio, autor, categoria, cantidad, img) {

    var encontrarProd = carrito.find(producto => producto.id == id)

    if (encontrarProd) {
        encontrarProd.cantidad ++;

    } else {
        agregarProducto = {
            id: id,
            nombre: nombre,
            precio: precio,
            autor: autor,
            categoria: categoria,
            cantidad: 1,
            img: img
        }
        carrito.push(agregarProducto)

    }
    // ------------- Alerta cuando agregamos al carrito --------------------
    swal("Excelente!", 'Producto agregado al carrito de compras!', "success");

};


// CREAMOS UNA FUNCION PARA QUE en OPENMODAL Y CREAR CARDS se reconozcan los eventos!

// ---------------------CARDS-----------------------------------

function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll('.addToCart');
    $eventoAgregarCarrito.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', clickAddToCart)
    })
};

function clickAddToCart(e) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    const button = e.target;
    const producto = button.closest('.cards')
    const tituloProd = producto.querySelector('.cards__titulo__h4').textContent;
    const precioProd = producto.querySelector('.cards__precio-precio').textContent;
    const imgProd = producto.querySelector('.cards__img').src;

    // agregarCarritoClicked(tituloProd, precioProd, imgProd);
};

/* function agregarCarritoClicked(tituloProd, precioProd, imgProd) {}; */


// ---------------------MODAL----------------
// function eventBotonAddToCartModal() {
//    const $eventoAgregarCarrito = document.querySelectorAll('.addToCart');
//    $eventoAgregarCarrito.forEach(addToCartButton => {
//        addToCartButton.addEventListener('click', clickAddToCartModal)
//    })
// }
// function clickAddToCartModal(e) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
//    const buttonModal = e.target;
//    const productoModal = buttonModal.closest('.modal')
//    console.log("clickAddToCartModal -> productoModal", productoModal)
//
//
// }

// -------------------------------------------------------------------------------------------------------------
const cart = document.querySelector('.carrito');
const botonCarrito = document.querySelector('.carrito-button').addEventListener('click', carritoAside);


function carritoAside() {
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
    tituloCarrito.textContent = 'Carrito'

    // Descrption- Cant- Precio
    const descipProducto = document.createElement('h4');
    descipProducto.className = 'navCart__nombre';
    descipProducto.textContent = 'Carrito'


    // ------------------ITEMS---------------
    // Contenedor
    const itemsCarrito = document.createElement('div');
    itemsCarrito.className = 'navCart__items';
    // Imagen
    const imgCarrito = document.createElement('div');
    imgCarrito.className = 'navCart__items--img';
    imgCarrito.innerHTML = `<img src="images/img-solchus.jpg" >`


    // Nombre Productos
    const descripcionCarrito = document.createElement('div');
    descripcionCarrito.className = 'navCart__items__producto';
    const nombreCarrito = document.createElement('h4');
    nombreCarrito.className = 'navCart__items--nombre';
    nombreCarrito.textContent = 'Hecho Mejor que perfecto';
    const precioProd = document.createElement('h5');
    precioProd.className = 'navCart__items--precio';
    precioProd.textContent = 'AR$ 1150'


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
    numCantCarrito.textContent = '1'
    // flecha chevron abajo
    const chevAbajo = document.createElement('i');
    chevAbajo.className = 'navCart__items__cantidad--flecha fas fa-chevron-down';

    // -----CART FOOTER---------
    const footerCarrito = document.createElement('div');
    footerCarrito.className = 'navCart__footer'
    const totalCarrito = document.createElement('h3');
    totalCarrito.className = 'navCart__footer--h3';
    totalCarrito.textContent = 'total: AR$ '

    totalCarrito.setAttribute('span', 'cart-total')


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
    footerCarrito.appendChild(totalCarrito)
    navCarrito.appendChild(footerCarrito)


    itemsCarrito.appendChild(cantidadCarrito);

    cantidadCarrito.appendChild(chevArriba);
    cantidadCarrito.appendChild(numCantCarrito);
    cantidadCarrito.appendChild(chevAbajo);


};
