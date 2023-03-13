const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingreLi = document.querySelector('#ingredients');

for (let ingredient of ingredients) { 
  const elementLi = document.createElement('li');
  elementLi.classList.add('item');  
  elementLi.textContent = ingredient;
  ingreLi.append(elementLi);
}
console.log(ingreLi);
