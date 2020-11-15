const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/*---------------- ВАРИАНТ 1------------*/

let elementsLi = ingredients.map(elementArr => {
  let li=document.createElement('li');
  li.textContent = elementArr;
  //console.log(li)
  return li;
})

let ingrid = document.querySelector('#ingredients')
ingrid.append(...elementsLi)


/*---------------- ВАРИАНТ 2------------*/

/*const element1 = document.createElement('li')
element1.textContent = ingredients[0]
const element2 = document.createElement('li')
element2.textContent = ingredients[1]
const element3 = document.createElement('li')
element3.textContent = ingredients[2]
const element4 = document.createElement('li')
element4.textContent = ingredients[3]
const element5 = document.createElement('li')
element5.textContent = ingredients[4]
const element6 = document.createElement('li')
element6.textContent = ingredients[5]

let parent= document.querySelector('#ingredients')
parent.append(element1,element2,element3,element4,element5,element6)


console.log(element1)
console.log(element2)
console.log(element3)
console.log(element4)
console.log(element5)
console.log(element6)
*/



