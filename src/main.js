// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/menu/menu.js'
//importo la data del menu 
const menu = data.menu;
console.log("mimenu", menu)

// console.log(example, data);

function toggleNav() {

  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('nav-active');
}
// Cmbio tati - 16 -creo un arreglo con las categorias 
const categorias = [
  "Entradas", "Fuertes", "Postres", "Bebidas"
]

categorias.forEach(c => {
  const section = document.getElementById("filtro")

  const p = document.createElement("p");
  const select = document.createElement("select");
  select.setAttribute("name", "category")
  select.setAttribute("id", "ct")

  const option = document.createElement("option");
  option.setAttribute("value", "entradas")

  option.innerHTML = c;

  select.appendChild(option);
  section.appendChild(select);
});

