let val = document.querySelector('#validation-input');
let tam = 0;
val.addEventListener('blur', (e) => {    
    
    e.preventDefault();    
    tam = e.currentTarget.value;
    if (tam.length >= 6) {
        val.classList.add('valid');
    } else {
        val.classList.add('invalid');
    }
});