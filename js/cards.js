// Estructura de la CARD----
document.addEventListener('DOMContentLoaded', () => {
    eventBotonAddToCart()
})


var $quagenda = document.querySelector('#quagenda');
crearCard();

function crearCard() {
    data.forEach((producto) => { // -------CARDS-----------

        let $div = document.createElement('div');
        $div.setAttribute('id', producto['id'])
        $div.setAttribute('class', 'cards', 'prod__cards');
        $div.classList.add('prod__cards');

        // CONTENEDOR FOTO Y ANCLA
        let $divFoto = document.createElement('div');
        $divFoto.className = 'cards__fotoPpal';

        // Etiqueta ancla para que abra el modal
        let $linkFoto = document.createElement('a');
        $linkFoto.className = 'cards__link';
        $linkFoto.setAttribute('data-target', '#');

        // IMAGEN-------------------
        let $img = document.createElement('img');
        $img.className = 'cards__img';
        $img.setAttribute('src', producto['img'].img);

        // TITULOS Y TXTS----------------
        let $txt = document.createElement('div');
        $txt.className = 'cards__txt';

        let $titulo = document.createElement('div')
        $titulo.className = 'cards__titulo';

        let $h4 = document.createElement('div')
        $h4.className = 'cards__titulo__h4';
        $h4.textContent = `${
            producto.nombre
        }`;

        let $autor = document.createElement('div')
        $autor.className = 'cards__autor';

        let $h5 = document.createElement('div')
        $h5.className = 'cards__autor__h5';
        $h5.innerHTML = `<strong>Arte de tapa: </strong> ${
            producto.autor
        }`;
        let $cat = document.createElement('div')
        $cat.className = 'cards__autor__h5';
        $cat.innerHTML = `${
            producto.categoria
        }`;

        // PRECIOS--------
        let $dinero = document.createElement('div');
        $dinero.className = 'cards__precio';

        let $oferta = document.createElement('div');
        $oferta.className = 'cards__precio--tachado'
        $oferta.textContent = `${
            producto.oferta
        }`;

        let $precio = document.createElement('div');
        $precio.className = 'cards__precio cards__precio-precio';
        $precio.textContent = `${
            producto.precio
        }`;

        // BUTTONS------------
        let $buttons = document.createElement('div');
        $buttons.className = 'btn-flexbox'

        let $btnVerMas = document.createElement('button');
        $btnVerMas.className = 'btn btn__modal';
        $btnVerMas.textContent = 'Ver más!';
        setAttributes($btnVerMas, {
            'type': 'button',
            'data-toggle': "modal",
            'data-target': `#exampleModal${
                producto['id']
            }`
        })
        $btnVerMas.addEventListener('click', openModal)

        let $btnCarrito = document.createElement('button');
        $btnCarrito.className = 'btn btn__modal addToCart';
        setAttributes($btnCarrito, {
            'type': 'button',
            'marcador': producto['id']
        })

        let $iconoCarrito = document.createElement('i');
        $iconoCarrito.className = 'fas fa-shopping-cart';

        // PRE-VENTA-------------
        let $preVta = document.createElement('div');
        $preVta.className = 'preventa';


        let $iconoPreVta = document.createElement('span')
        $iconoPreVta.className = 'preventa-txt';
        $iconoPreVta.textContent = 'pre venta'

        // ----Agrego cada hijo  a su padre-----
        $linkFoto.appendChild($img);
        $divFoto.appendChild($linkFoto);


        $titulo.appendChild($h4);
        $txt.appendChild($titulo);
        $autor.appendChild($h5);
        $autor.appendChild($cat);
        $txt.appendChild($autor);
        $dinero.appendChild($oferta);
        $dinero.appendChild($precio);

        $buttons.appendChild($btnVerMas);
        $btnCarrito.appendChild($iconoCarrito)
        $buttons.appendChild($btnCarrito);

        $preVta.appendChild($iconoPreVta);

        $div.appendChild($divFoto);
        $div.appendChild($txt);
        $div.appendChild($dinero);
        $div.appendChild($buttons)
        $div.appendChild($preVta)


        $quagenda.appendChild($div);

    });

};


function openModal() {
    productos.forEach((producto) => {
        let $modal = document.createElement('div');
        $modal.className = ' modal fade';
        setAttributes($modal, {
                'id': `exampleModal${
                producto['id']
            }`,

            'tabindex': '-1',
            'aria-labelledby': 'exampleModalLabel',
            'aria-hidden': "true"
        })

        let $modalBody = `<div class="modal-dialog modal-dialog-centered modal-lg">
										<div class="modal-content">
											<div class="modal-header">
												<img class="modal-logo" src="images/Logo-web-AM.svg" alt="logo">
												<button type="button" class="close" data-dismiss="modal"
													aria-label="Close">
													<span aria-hidden="true">&times;</span>
											</div>
											<div class="modal-body">
												<div id="carouselExampleIndicators${
            producto['id']
        }"                                          class="carousel slide"
													data-ride="carousel">
													<ol class="carousel-indicators">
														<li class="bg-img bg-img-${
            producto['id']
        }-1"
															data-target="#carouselExampleIndicators${
            producto['id']
        }"
															data-slide-to="0" class="active"></li>
														<li class="bg-img bg-img-${
            producto['id']
        }-2"
															data-target="#carouselExampleIndicators${
            producto['id']
        }"
															data-slide-to="1">
														</li>
														<li class="bg-img bg-img-${
            producto['id']
        }-3"
                                                        data-target="#carouselExampleIndicators${
            producto['id']
        }"
															data-slide-to="2">
														</li>
													</ol>
													<div class="carousel-inner">
														<div class="carousel-item active">
															<img src=${
            producto['img'].img2
        }
																class="d-block w-100" alt="viajar-frente">
														</div>
														<div class="carousel-item">
															<img src=${
            producto['img'].img3
        }
																class="d-block w-100" alt="viajar-dorso">
														</div>
														<div class="carousel-item">
															<img src= ${
            producto['img'].img4
        } 
                                                                class="d-block w-100"
																alt="viaje-celular">
														</div>
													</div>

												</div>
											</div>
											<div class="modal-footer">
												<div class="modal-footer__caract">
													<div class="modal-footer__caract__titulo">
														<strong>CARACTER&Iacute;STICAS</strong>
													</div>
													<ul class="modal-footer__caract__list">
														<li class="card__caract__item">
															<strong>Tama&ntilde;o:&nbsp;</strong>${
            producto['caracteristicas'].tamanio
        }
														</li>
														<li class="modal-footer__caract__item">
															<strong>Interior:&nbsp;</strong>${
            producto['caracteristicas'].interior
        }</li>
														<li class="modal-footer__caract__item">
															<strong>Encuadernacion:&nbsp;</strong>${
            producto['caracteristicas'].encuadernacion
        }</li>
														<li class="modal-footer__caract__item">
															<strong>Papel:&nbsp;</strong>${
            producto['caracteristicas'].papel
        }</li>
														<li class="modal-footer__caract__item cards__precio--modal">
															AR$ ${
            producto['precio']
        }</li>
													</ul>
												</div>
												<button type="button" class="btn btn__modal addToCartModal"
													data-toggle="modal" data-target="#cart" marcador="${
            producto['id']
        }">
													<i class="fas fa-shopping-cart"></i>
													<h4 class="agregar">Comprar</h4>
												</button>
											</div>
										</div>
                                    </div>`;
        $modal.innerHTML = $modalBody;
        $quagenda.appendChild($modal);
    })
    // Event para reconocer los Butoons con class addToCart
    // eventBotonAddToCartModal()
};

// Funcion
function setAttributes(elem, attrs) {
    for (var key in attrs) {
        elem.setAttribute(key, attrs[key]);
    }
}


// ---Button CARDS
function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll('.addToCart');
    $eventoAgregarCarrito.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', clickAddToCart)
    })
};

// ---Button MODAL
function eventBotonAddToCartModal() {
    const $eventoAgregarCarritoModal = document.querySelectorAll('.addToCartModal');
    $eventoAgregarCarritoModal.forEach(addToCartButtonModal => {
        addToCartButtonModal.addEventListener('click', clickAddToCartModal)
    })
};

function clickAddToCart(event) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    event.preventDefault();
    const button = event.target;
    console.log("clickAddToCart -> button ", button)
    const producto = button.closest('.cards');
    const nombreProd = producto.querySelector('.cards__titulo__h4').textContent;
    let precioProd = producto.querySelector('.cards__precio-precio').textContent;
    precioProd = Number(precioProd)
    const imgProd = producto.querySelector('.cards__img').src;
    const cantidadProd = 0;


    agregarCarrito(nombreProd, precioProd, imgProd, cantidadProd);
};

// ---Button MODAL
function clickAddToCartModal(event) {

    const buttonModal = event.target;
    const productoModal = buttonModal.closest('.modal-content')
    console.log("clickAddToCartModal -> productoModal", productoModal)

    // const nombreProdModal = producto.querySelector('.cards__titulo__h4').textContent;
    // let precioProdModal = producto.querySelector('.cards__precio-precio').textContent;
    // precioProdModal = Number(precioProd)
    // const imgProdModal = producto.querySelector('.cards__img').src;
    // const cantidadProdModal = 0;


    // agregarCarrito(nombreProd, precioProd, imgProd, cantidadProd);
};

var carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];
// Si carrito existe en Local, else array vacio []
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
        carrito.push(agregarProducto);
    }
    // ------------- Alerta cuando agregamos al carrito --------------------
    // swal("Excelente!", 'Producto agregado al carrito de compras!', "success");
    agregarItemsAlCarrito();
    localStorage.carrito = JSON.stringify(carrito);
};

// ----CREAMOS EL NAV CART PARA EL CARRITO DE COMPRAS------
const cart = document.querySelector('.carrito');
const botonCarrito = document.querySelector('.carrito-button').addEventListener('click', navCarritoCompras);
const contenidoCarrito = document.createElement('div');


function navCarritoCompras() { // Darle un target a un evento para generar la carga de los productos!

    const overlayCarrito = document.createElement('div');
    overlayCarrito.className = 'overlay';
    cart.appendChild(overlayCarrito);
    const navCarrito = document.createElement('div');
    navCarrito.className = 'navCart';
    cart.appendChild(navCarrito);

    // ----BOTON CERRAR CARRITO------
    const closeCarrito = document.createElement('span');
    const closeIcon = document.createElement('i');
    closeCarrito.className = 'navCart__close';
    closeIcon.className = 'navCart__close--icon far fa-times-circle';
    closeCarrito.appendChild(closeIcon);
    navCarrito.appendChild(closeCarrito);


    const tituloCarrito = document.createElement('h2');
    tituloCarrito.className = 'navCart__titulo';
    tituloCarrito.textContent = 'Carrito';
    navCarrito.appendChild(tituloCarrito);

    // -----Contendio GRAL----- variable en global scope
    contenidoCarrito.className = 'navCart__contenido';
    navCarrito.appendChild(contenidoCarrito);


    // ---- -CART FOOTER -- -- -- -- -
    const footerCarrito = document.createElement('div');
    const totalCarrito = document.createElement('h3');
    footerCarrito.className = 'navCart__footer';
    totalCarrito.className = 'navCart__footer--h3';
    totalCarrito.innerHTML = `total: <span class="navCart__cartTotal" > ${
        productos.precio // Ver como poner esto
    } </span>`;
    const comprarCarrito = document.createElement('button');
    comprarCarrito.className = 'navCart__footer--comprarBtn btn';
    comprarCarrito.textContent = 'comprar';
    // separar con un span el total del $precio total
    footerCarrito.appendChild(totalCarrito);
    navCarrito.appendChild(footerCarrito);
    navCarrito.appendChild(comprarCarrito);

};


function agregarItemsAlCarrito() {

    carrito.forEach(producto => { // ------------------ITEMS---------------
        const itemsCarrito = document.createElement('div')
        itemsCarrito.className = 'navCart__items';
        contenidoCarrito.appendChild(itemsCarrito)

        const imgCarrito = document.createElement('div');
        // Imagen
        imgCarrito.className = 'navCart__items--img';
        imgCarrito.innerHTML = `<img src=" ${
            producto.imgProd
        }" >`
        itemsCarrito.appendChild(imgCarrito);

        const descripcionCarrito = document.createElement('div');
        const nombreCarrito = document.createElement('h4');
        // Nombre Productos
        descripcionCarrito.className = 'navCart__items__producto';
        nombreCarrito.className = 'navCart__items--nombre';
        nombreCarrito.textContent = `${
            producto.nombreProd
        }`;
        const precioProducto = document.createElement('h5');
        precioProducto.className = 'navCart__items--precio';
        precioProducto.textContent = `${
            producto.precioProd
        }`;
        const quitarProd = document.createElement('span');
        quitarProd.className = 'remove-item';
        quitarProd.textContent = 'quitar'

        descripcionCarrito.appendChild(nombreCarrito);
        descripcionCarrito.appendChild(precioProducto);
        descripcionCarrito.appendChild(quitarProd);
        itemsCarrito.appendChild(descripcionCarrito)

        // --------Cantidad---------
        const cantidadCarrito = document.createElement('input');
        cantidadCarrito.className = 'navCart__items__cantidad';
        setAttributes(cantidadCarrito, {
                'name': `${
                producto.indexOf(carrito)
            }`,
            /* 'onchange': */
        })
        itemsCarrito.appendChild(cantidadCarrito);


        const chevArriba = document.createElement('i');
        const numCantCarrito = document.createElement('p');
        const chevAbajo = document.createElement('i');
        // flecha chevron arriba
        chevArriba.className = 'navCart__items__cantidad--flecha fas fa-chevron-up';
        // Cantidad Productos
        numCantCarrito.className = 'navCart__items__cantidad--num';
        numCantCarrito.textContent = `${
            producto.cantidadProd
        }`;
        // flecha chevron abajo
        chevAbajo.className = 'navCart__items__cantidad--flecha fas fa-chevron-down';

        cantidadCarrito.appendChild(chevArriba);
        cantidadCarrito.appendChild(numCantCarrito);
        cantidadCarrito.appendChild(chevAbajo);

    })

};
