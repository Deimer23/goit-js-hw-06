let form = document.querySelector('.login-form');

function validForm(e) {
    e.preventDefault();   
    const { elements: { email, password } } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Todos los campos deben estar llenos");
    } else {
        console.log(`Email: ${email.value} y Password: ${password.value}`);
    }    
}


form.addEventListener('submit', validForm);


