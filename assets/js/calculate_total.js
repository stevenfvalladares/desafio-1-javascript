// connection testing
console.log('linked file')

// variables
const price = 400000
var quantity, calculate, total  

// get HTML elements
quantity = document.getElementById('quantity')
calculate = document.getElementById('btn')

// function
function calculateTotal() {

    total = price * parseInt(quantity.value)

    if (isNaN(parseInt(quantity.value))) {
        alert('Es necesario ingresar un número')
    } else if (parseInt(quantity.value) === 0) {
        alert('El número ingresado debe ser igual o mayor a 1')
    }
     else {
        document.getElementById('total').innerHTML = ' '.concat(Intl.NumberFormat('de-DE').format(total))
        document.getElementById('selected_quantity').innerHTML = ' '.concat(quantity.value)
    }

}








