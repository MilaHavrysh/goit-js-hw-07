const findElement =
  document.querySelectorAll('#categories .item ');
  console.log(`В списке ${findElement.length} категории.`)
findElement.forEach((element) =>
  console.log(`Категория:${element.querySelector('h2').textContent}\nКоличество элементов: ${element.querySelectorAll('li').length}`))