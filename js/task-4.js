let counterValue=0
function increment() {
    counterValue += 1 
    renderValue()
}

function decrement() {
    counterValue -= 1
    renderValue()
   
}
function renderValue() {
  valueHTML.textContent=counterValue 
}


const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
const valueHTML = document.querySelector('#value')

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);





