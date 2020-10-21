let data = [];
document.addEventListener('DOMContentLoaded', cargar);

function cargar() {
    $.ajax({
        url: '/js/data.json',
        success: function (dataBase) { // console.log(data)
            data = dataBase;
            crearCards(data);
            openModal();
            eventBotonAddToCart();
            mostrarCantidadItems()
        },
        error: function (error) {
            console.log(error);
        }
    })
}
