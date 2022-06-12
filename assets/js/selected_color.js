// connection testing
console.log('linked file')

// variables
var selector, color

// get HTML elements
selector = document.querySelector('.form-select')
color = document.querySelector('.color-circle')

// funtion
function selectedColor() {

    if (selector.value === 'Color' ) {
        alert('Es necesario seleccionar el color')
        color.style.backgroundColor = 'whitesmoke'
    } else {
        color.style.backgroundColor = selector.value    
    }

}
