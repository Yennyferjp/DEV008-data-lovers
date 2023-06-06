import { obtenerCategorias, obtenerSubcategorias, busqueda, menuArreglo, filtrado} from './data.js'

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
    itemDescription.innerHTML = `<br> ${item.description}   <br> <strong> \nPrecio: $${item.price} </strong>`

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemImgDesc);
    itemImgDesc.appendChild(itemImage);
    itemImgDesc.appendChild(itemDescription);

    menuItemsContainer.appendChild(itemContainer);
  });
}

// CUANDO ABRO LA PAGINA LO PRIMERO QUE HACE ES EJECUTAR ESTA 
//FUNCION QUE SOLO MUESTRA 12 PRODUCTOS
limitRender(menuArreglo, 12)

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
    

    espacio.appendChild(select);
    section.appendChild(espacio);
    const option = document.createElement("option");
    option.setAttribute("value", c);
    option.innerHTML = c;
    select.appendChild(option);
  });
}

creacionCajonCategorias()

//CREACION CAJON SUBCATEGORIAS
const section = document.getElementById("filtro")
const espacio = document.createElement("div")
const select = document.createElement("select");
select.setAttribute("name", "subcategory")
select.setAttribute("id", "sct")
espacio.setAttribute("id", "es")

const selectCat = document.querySelectorAll('#ct');

selectCat.forEach(select => select.addEventListener('click', event => {
  const categoria = event.target.value
  creacionCajonSubCategorias(categoria)
}));


function creacionCajonSubCategorias(categoria) {
  const subcategoria = obtenerSubcategorias(categoria);

  //BORRANDO OPCIONES PAR EVITAR QUE SE REPITAN
  for (let i = select.options.length; i >= 0; i--) {
    select.remove(i);
  }

  //RELLENA CAJON SUBCATEGORIA
  subcategoria.forEach(s => {
    

    espacio.appendChild(select);
    section.appendChild(espacio);
    const option = document.createElement("option");
    option.setAttribute("value", s);
    option.innerHTML = s;
    select.appendChild(option);

  })

  const selectSubcat = document.querySelectorAll('#sct');

  selectSubcat.forEach(select => select.addEventListener('click', event => {
    //LLAMA A FILTRADO PARA RETORNAR EL MENU DE ACUERDO A LA SUBCATEGORIA
    const res = filtrado(event.target.value)
    limitRender(res, 12)
  }));
}

// BARRA DE BUSQUEDA 
const searchBar = document.getElementById('search');
searchBar.addEventListener('keyup', function (event) {
  const searchText = event.target.value.toLowerCase();
  const filteredItems = busqueda(searchText);

  limitRender(filteredItems, 12)
});

// BOTON VER MAS
const verMasBtn = document.getElementById('vermas')
verMasBtn.addEventListener('click', function () {
  //BUSCA CUANTOS PRODUCTOS TENGO EN PANTALLA
  const menuItem = document.getElementsByClassName("menu-item").length
  if (menuItem < menuArreglo.length) {
    limitRender(menuArreglo, menuItem + 12)
  }
});


// FUNCION CON LIMITE DE PRODUCTOS
function limitRender(menu, limit) {
  //SLICE CORTA EL ARREGLO PARA QUE TRAIGA PRODUCTOS DESDE EL CERO HASTA UN LIMITE 12
  menu = ordenarMenu(menu);
  const nextMenu = menu.slice(0, limit)
  renderMenuItems(nextMenu)
}

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
  

function ordenarMenu(menuNoOrdenado) {
  const menuClonado = [...menuNoOrdenado]
  return menuClonado.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;}); 
}
////////////////////////////////////////////////////////////////////////////////////////

