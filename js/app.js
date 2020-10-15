let data = [];
document.addEventListener('DOMContentLoaded', cargar);

function cargar() {
    $.ajax({
        url: 'data.json',
        success: function (data) {
            console.log(data)
            // data = data

        }
    })
}
