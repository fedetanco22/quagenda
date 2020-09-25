function eventBotonAddToCart() {
    const $eventoAgregarCarrito = document.querySelectorAll('.addToCart');
    $eventoAgregarCarrito.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', clickAddToCart)
    })
};

function clickAddToCart(event) { // capturamos el buttom y queremos todo el id del Prodcuto con el closest (elemento padre mas cercano con el id)
    const button = event.target;
    const producto = button.closest('.cards')
    const nombreProd = producto.querySelector('.cards__titulo__h4').textContent;
    const precioProd = producto.querySelector('.cards__precio-precio').textContent;
    const imgProd = producto.querySelector('.cards__img').src;
    const cantidadProd = 0;


    agregarCarrito(nombreProd, precioProd, imgProd, cantidadProd);
};
