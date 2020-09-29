window.onload = function () {
    var products = new Products();
    products.init(this.data);
    products.containerProducts()
    products.createProductsHtml()
    products.modal()

    var cart = new ShoppingCart();
    cart.storageCart();


}
