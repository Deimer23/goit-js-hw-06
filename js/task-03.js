const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
let getimage1 = "";
const gallery = document.querySelector('.gallery');
const getImage = images.map((image) => { `<li><img src="${image.url}" alt="${image.alt}"/></li>` }).join("");

for (let image of images) {
  getimage1 += `<li><img src="${image.url}" alt="${image.alt}" width="200px"/></li>`;
}

gallery.insertAdjacentHTML("beforeend", getimage1)
gallery.insertAdjacentHTML("beforebegin", "<h2>GALLERY</h2>");
console.log(getimage1);