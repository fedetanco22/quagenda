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
