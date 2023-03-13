const contarElementos = document.querySelector('#categories');
console.log(`Number of categories: ` + contarElementos.children.length);

for (let element of contarElementos.children) {
    console.log(`Category: ` + element.querySelector('h2').textContent);
    console.log(`Element: ` + element.querySelectorAll('li').length);
}