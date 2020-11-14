
let input  = document.querySelector('#name-input')

function eventEnter(event) {
 
    if (event.target.value != '') {
        let name = document.querySelector('#name-output');
        name.textContent = event.target.value;
        
        //console.log(event)
    }
    else {
        let name = document.querySelector('#name-output')
        name.textContent = 'незнакомец'
    }
   
        }
    
    
input.addEventListener('keydown', eventEnter)






