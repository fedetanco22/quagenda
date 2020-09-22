var carrito = [];
// ------------- Function declaration ------------------------------
// let agregarCarrito = (nombre, precio) => Arrow Function no se si funciona
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

function contadorCarrito() {
    let i = 0;
    let cartTotal = document.querySelector('.carrito-items');
    // AGREGAR CLASE ADDTOCART EN LOS BUTTONS
    let button = document.querySelectorAll('.addToCart')
    let num = () => {
        for (let i = 0; i < carrito.length; i++) {
            return cartTotal = i;
        }
    };
    cartTotal.textContent = num();

}
contadorCarrito()


/* function calcularTotal() { // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    for (let item of carrito) { // De cada elemento obtenemos su precio
        let miItem = baseDeDatos.filter(function (itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    // Renderizamos el precio en el HTML
    total.textContent = total.toFixed(2);
}
calcularTotal() */
console.log()
