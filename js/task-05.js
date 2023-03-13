let inputValue = document.querySelector('#name-input');
let valueSpan = document.querySelector('#name-output');
inputValue.addEventListener('input', (e) => {
    e.preventDefault();
    if (e.currentTarget.value == "") {
        valueSpan.textContent = 'Anonymous';
    } else {
        valueSpan.textContent = e.currentTarget.value;
    }
    
});