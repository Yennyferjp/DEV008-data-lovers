import { obtenerCategorias, obtenerSubcategorias, busqueda, menuArreglo, filtrado } from './data.js'

const categorias = obtenerCategorias()

// Cmbio tati - 16 -creo un arreglo con las categorias 


categorias.forEach(c => {
  const section = document.getElementById("filtro")
  
  const titulo = document.createElement("h3")
  const espacio= document.createElement("div")
  const subcategorias = obtenerSubcategorias(c);
  const select = document.createElement("select");
  select.setAttribute("name", "category")
  select.setAttribute("id", "ct")
  espacio.setAttribute("id", "es")

  titulo.innerHTML = c;
  let option
  espacio.appendChild(titulo);
  espacio.appendChild(select);
  section.appendChild(espacio);
  

  subcategorias.forEach(s => {
    option = document.createElement("option");
    option.setAttribute("value", s);
    option.innerHTML = s;
    select.appendChild(option);
  })

});

//CONTAINER DE PLATOS

const menuItemsContainer = document.getElementById('menu-items');

function renderMenuItems(menuArreglo) {
  menuItemsContainer.innerHTML = '';

  menuArreglo.forEach(function(item) {
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
    itemDescription.textContent = `${item.description}    \nPrecio: $${item.price}`

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemImgDesc);
    itemImgDesc.appendChild(itemImage);
    itemImgDesc.appendChild(itemDescription);

    menuItemsContainer.appendChild(itemContainer);
  });
}

// BARRA DE BUSQUEDA 

const searchBar = document.getElementById('search');

searchBar.addEventListener('keyup', function(event) {
  const searchText = event.target.value.toLowerCase();
  const filteredItems = busqueda(searchText);

  renderMenuItems(filteredItems);
});

const selects = document.querySelectorAll('#ct');

selects.forEach(select => select.addEventListener('click', event => { 
  const res= filtrado(event.target.value)
  renderMenuItems(res)

}));

renderMenuItems(menuArreglo);

//TESTIMONIOS
 
fetch('testimonios.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const testimoniosContainer = document.getElementById('testimoniosContainer');

    // Iterar sobre cada testimonio en los datos JSON
    data.carousel.forEach(function(testimonio, index) {
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

