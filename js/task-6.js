
let input = document.querySelector('#validation-input')
//console.log(input)

function passwordEntry(event) {
    if (event.target.value.length === 6) {
        input.className='valid'
       // console.log(input)
      
    }
    else {
      input.className='invalid'
      //console.log(input)
    }
}


input.addEventListener('input',passwordEntry)
