function ShoppingCart() {
    cart = [];

    this.storageCart = function () {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [] // function que busca el carrito en LOCAL y si esta los parsea para usar el OBJETO Data. Si no hay nada en LOCAL. Me devuelve el carrito vacio
    };


}
