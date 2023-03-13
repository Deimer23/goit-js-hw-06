function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeColor = document.querySelector('.change-color');
let changeBody = document.body;
let spanColor = document.querySelector('.color')
changeColor.addEventListener('click', (e) => { 
  changeBody.style.backgroundColor = getRandomHexColor();  
  spanColor.textContent = getRandomHexColor();
});
