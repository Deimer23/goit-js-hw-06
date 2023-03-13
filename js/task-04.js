let counterValue = 0;
let valueSpan = document.querySelector('#value');
let increment = document.querySelector('button[data-action="increment"]');
let decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});

decrement.addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});
