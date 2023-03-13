const valu = document.querySelector('#font-size-control');
const valueSpan = document.querySelector('#text');
valu.addEventListener('input', (e) => {     
    valueSpan.style.fontSize = e.currentTarget.value + 'px';   
});

console.log(valueSpan.style.fontSize);