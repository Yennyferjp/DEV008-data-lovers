import menuArchivo from './data/menu/menu.js'

export const menuArreglo  = menuArchivo.menu;

export function obtenerCategorias(){
  let categorias = []

  menuArreglo.forEach((producto) =>{
    if (!categorias.includes(producto.categoryType)) {
      categorias.push(producto.categoryType)
    }
  })

  return categorias;
}

export function obtenerSubcategorias(categoria){
  let subcategorias = [];

   menuArreglo.forEach((producto) =>{
    if (producto.categoryType === categoria) {
       if (!subcategorias.includes(producto.category)){
        subcategorias.push(producto.category)
       }
    }
   })
   return subcategorias;
}


export function busqueda(searchText){
  const filteredItems = menuArreglo.filter(function(item) {
  return item.name.toLowerCase().includes(searchText) || item.description.toLowerCase().includes(searchText);
  });

  return filteredItems;
}

export function filtrado(subcategoria){
  let productos=[];
  menuArreglo.forEach((producto)=>{
    if (producto.category === subcategoria) {
      productos.push(producto)     
    }
  })

  return productos
}