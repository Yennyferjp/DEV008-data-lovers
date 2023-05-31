import { obtenerCategorias, obtenerSubcategorias, busqueda, menuArreglo, filtrado } from './data.js'

// Cambio tati - 16 -creo un arreglo con las categorias 
function creacionCajonCategorias() {
  const categorias = obtenerCategorias();

  const section = document.getElementById("filtro");
  const espacio = document.createElement("div");
  const select = document.createElement("select");
  select.setAttribute("name", "category");
  select.setAttribute("id", "ct");
  espacio.setAttribute("id", "es");

  categorias.forEach(c => {
    let option;

    espacio.appendChild(select);
    section.appendChild(espacio);
    option = document.createElement("option");
    option.setAttribute("value", c);
    option.innerHTML = c;
    select.appendChild(option);
  });
}

function creacionCajonSubCategorias(categoria) {
  const subcategoria = obtenerSubcategorias(categoria);

  for (let i = select.options.length; i >= 0; i--) {
    select.remove(i);
  }

  subcategoria.forEach(s => {
    let option

    espacio.appendChild(select);
    section.appendChild(espacio);
    option = document.createElement("option");
    option.setAttribute("value", s);
    option.innerHTML = s;
    select.appendChild(option);

  })

  const selects = document.querySelectorAll('#sct');

  selects.forEach(select => select.addEventListener('click', event => {
    const res = filtrado(event.target.value)
    limitRender(res, 12)
  }));
}

creacionCajonCategorias()
const section = document.getElementById("filtro")
const espacio = document.createElement("div")
const select = document.createElement("select");
select.setAttribute("name", "subcategory")
select.setAttribute("id", "sct")
espacio.setAttribute("id", "es")

const selectSub = document.querySelectorAll('#ct');

selectSub.forEach(select => select.addEventListener('click', event => {
  const categoria = event.target.value
  creacionCajonSubCategorias(categoria)

  

}));

//CONTAINER DE PLATOS

const menuItemsContainer = document.getElementById('menu-items');

function renderMenuItems(menuArreglo) {
  menuItemsContainer.innerHTML = '';

  menuArreglo.forEach(function (item) {
    const itemContainer = document.createElement('article');
    itemContainer.classList.add('menu-item');

    const itemName = document.createElement('h3');
    itemName.textContent = item.name;

    const itemImgDesc = document.createElement('div')
    itemImgDesc.setAttribute("id", "img-desc")

    const itemImage = document.createElement('img');
    itemImage.src = item.imageUrl;
    itemImage.alt = item.name;
    itemImage.setAttribute("id", "imgProducto")

    const itemDescription = document.createElement('p');
    itemDescription.setAttribute("id", "description")
    itemDescription.innerHTML =  `<br> ${item.description}   <br> <strong> \nPrecio: $${item.price} </strong>`

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemImgDesc);
    itemImgDesc.appendChild(itemImage);
    itemImgDesc.appendChild(itemDescription);

    menuItemsContainer.appendChild(itemContainer);
  });
}




// BARRA DE BUSQUEDA 

const searchBar = document.getElementById('search');
let next = []
searchBar.addEventListener('keyup', function (event) {
  let limit = 0;
  const searchText = event.target.value.toLowerCase();
  const filteredItems = busqueda(searchText);

  limitRender(filteredItems, 12)
});

const verMasBtn = document.getElementById('vermas')
verMasBtn.addEventListener('click', function (e) {
  const menuItem = document.getElementsByClassName("menu-item").length
  if (menuItem < menuArreglo.length) {
    limitRender(menuArreglo, menuItem + 12)
  }
});

const verMenos = document.getElementById('vermenos')
const menuItem = document.getElementsByClassName("menu-item").length

verMenos.addEventListener('click', function (e) {
  const menuItem = document.getElementsByClassName("menu-item").length
  if (menuItem > 12 ) {
    limitRender(menuArreglo, menuItem - 12)
  }
});

function limitRender(menu, limit) {
  if (limit <= menuArreglo.length) {
    const nextMenu = menu.slice(0, limit)
    renderMenuItems(nextMenu)
  }
}

limitRender(menuArreglo, 12)

//TESTIMONIOS

fetch('testimonios.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const testimoniosContainer = document.getElementById('testimoniosContainer');

    // Iterar sobre cada testimonio en los datos JSON
    data.carousel.forEach(function (testimonio, index) {
      // Crear elementos HTML para mostrar los datos del testimonio
      const carouselItem = document.createElement('div');
      carouselItem.classList.add('carousel-item');
      if (index === 0) {
        carouselItem.classList.add('active');
      }

      const containerTestimonios = document.createElement('div');
      containerTestimonios.classList.add('container_testimonios');

      const imagen = document.createElement('img');
      imagen.classList.add('testimonios');
      imagen.src = testimonio.image;
      imagen.alt = testimonio.name;

      const nombre = document.createElement('h4');
      nombre.classList.add('fonth4');
      nombre.innerHTML = testimonio.name + " <br> " + testimonio.rating;

      const mensaje = document.createElement('p');
      mensaje.classList.add('parrafo-testimonio');
      mensaje.textContent = testimonio.testimonial;

      containerTestimonios.appendChild(imagen);
      containerTestimonios.appendChild(document.createElement('br'));
      containerTestimonios.appendChild(nombre);
      containerTestimonios.appendChild(mensaje);
      containerTestimonios.appendChild(document.createElement('br'));

      carouselItem.appendChild(containerTestimonios);

      testimoniosContainer.appendChild(carouselItem);

    });
  });
////////////////////////////////////////////////////////////////////////////////////////

