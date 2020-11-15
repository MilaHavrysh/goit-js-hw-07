

let sizeControlInput = document.querySelector('#font-size-control')

function fontSize(event) {
        let textSpan = document.querySelector('#text');
        let size = `${event.target.value}px`;
        text.style.fontSize=size;                
    }

sizeControlInput.addEventListener('change',fontSize )