const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
   
let gallery = document.querySelector('#gallery')
let tegLiArr = []
let tegLi
for (const element of images) {
  tegLi = document.createElement('li');
  let { url, alt } = element
  tegLi.insertAdjacentHTML('afterbegin', `<img class='img'src='${url} alt='${alt}'/>`)
  tegLiArr.push(tegLi)
}

gallery.append(...tegLiArr)

gallery.style.display = 'flex'
gallery.style.width = '1600px'

let li =document.querySelectorAll('#gallery li')
li[0].style.marginRight = '20px'
li[1].style.marginRight = '20px'

let img = document.querySelectorAll('.img')

for (const element of img) {
  element.style.display = 'block';
  element.style.width = '100%';
}
/*------------СТАРЫЙ ВАРИАНТ-----------*/
/* let parent = document.querySelector('#gallery')
    let tegLi
    for (const element of images) {
    tegLi = document.createElement('li');
    let { url, alt } = element
    tegLi.insertAdjacentHTML('afterbegin', `<img class='img'src='${url} alt='${alt}'/>`)
    parent.append(tegLi)
  }*/













/*const arrayUrl = array => array
   .map(({ url }) => url)
     
const arrayAlt = array => array
    .map(({ alt }) => alt)    
   

function create(arrayUrl, arrayAlt, i) {
    let tegLi = document.createElement('li');
    let tegImg = document.createElement('img'); 
    tegImg.setAttribute('src', arrayUrl[i]);
    tegImg.setAttribute('alt', arrayAlt[i]);
    tegLi.appendChild(tegImg);
return tegLi
}
  
console.log(create(arrayUrl(images), arrayAlt(images), 0))
console.log(create(arrayUrl(images), arrayAlt(images), 1))
console.log(create(arrayUrl(images), arrayAlt(images), 2))

let parent = document.querySelector('#gallery')
parent.append(create(arrayUrl(images), arrayAlt(images), 0),
    create(arrayUrl(images), arrayAlt(images), 1),
    create(arrayUrl(images), arrayAlt(images), 2)
)*/