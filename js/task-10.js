function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let controls = document.querySelector('#controls');
let cantDiv = controls.querySelector('input');
let inserDiv = document.querySelector('button[data-create]');
let deletex = document.querySelector('button[data-destroy]');
let boxes = document.querySelector('#boxes');
let width = 30;
let height = 30;

function createBoxes(event) {
  event.preventDefault();  
  if (cantDiv.value < 1 || cantDiv.value == "") {
    alert("El numero debe ser positivo mayor que 0")
  } else {
    for (let i = 1; i <= cantDiv.value; i++){
    let elementDiv = document.createElement('div');
    elementDiv.style.width = width + 'px';
    elementDiv.style.height = height +'px';
    elementDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(elementDiv);
    width += 10;
    height += 10;         }  
  } 
  
}
function destroyBoxes(event) {
  boxes.remove();
}

inserDiv.addEventListener('click', createBoxes);

deletex.addEventListener('click', destroyBoxes);