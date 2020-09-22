// ------------- Crear const con mis productos ---------------------
// const viajar = ;
// const luna = ;
// const sol = ;
// const sol1 = ;
// const sol2 = ;

// ------------- Crear los elementos  que cuando -------------------
// ------------- hacemos click en agregar al carrito ---------------
// ------------- le de parametros a la funcion ---------------------
// ------------- agregarCarrito(nombre, precio)---------------------

// ------------- Array Carrito vacio para agregar productos ---------------------


// Estructura de la CARD----
var $quagenda = document.querySelector('#quagenda');
var $cuaderno = document.querySelector('#cuaderno');
var $bitacora = document.querySelector('#bitacora');


function crearCard() {
    productos.forEach((producto) => { // -------CARDS-----------
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
        $img.setAttribute('src', producto['img']);

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

        // PRECIOS--------
        let $dinero = document.createElement('div');
        $dinero.className = 'cards__precio';
        let $oferta = document.createElement('div');
        $oferta.className = 'cards__precio--tachado'
        $oferta.textContent = `AR$ ${
            producto.oferta
        }`;
        let $precio = document.createElement('div');
        $precio.className = 'cards__precio';
        $precio.textContent = `AR$ ${
            producto.precio
        }`;

        // BUTTONS------------
        let $buttons = document.createElement('div');
        $buttons.className = 'btn-flexbox'

        let $btnVerMas = document.createElement('button');
        $btnVerMas.className = 'btn btn__modal';
        $btnVerMas.textContent = 'Ver más!'


        let $btnCarrito = document.createElement('button');
        $btnCarrito.className = 'btn btn__modal';
        $btnCarrito.addEventListener('click', agregarCarrito);
        $btnCarrito.setAttribute('type', 'button');
        $btnCarrito.setAttribute('marcador', producto['id']);

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
}
crearCard();
