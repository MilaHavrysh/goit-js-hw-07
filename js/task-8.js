/*<div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Создать</button>
    <button type="button" data-action="destroy">Очистить</button>
    <div id="boxes"></div>
</div>*/

let buttonRender = document.querySelector('[data-action="render"]')
//buttonRender.addEventListener('click', createBoxes)

/*function createBoxes() {
    let inputForm = document.querySelector('#controls input').value;
    let tegDiv
    //console.log(inputForm);
    for (let i = 1; i <= inputForm; i += 1) {
        tegDiv = document.createElement('div')
        console.log(tegDiv)
     
    }
    let boxes = document.querySelector('#boxes'); 
    boxes.append(tegDiv)
}
//let boxes = document.querySelector('#boxes'); 
//boxes.append(createBoxes())
*/
function getAmount() {
    let inputForm = document.querySelector('#controls input').value;
    console.log(inputForm);
}
function createBoxes(amount) {
    console.log(amount)
    for (let i = 1; i <= amount; i += 1){
    let tegDiv=document.createElement('div')
    console.log(tegDiv)
   }
}

//console.log(createBoxes(getAmount()))
console.log(buttonRender.addEventListener('click', getAmount))
onsole.log(buttonRender.addEventListener('click', createBoxes))