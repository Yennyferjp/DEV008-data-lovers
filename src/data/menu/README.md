# DESCRIPCION DEL PROYECTO 

## DATA-LOVERS = DELIE TASTE 
Es una APLICACION WEB de un Restaurante de comida saludable donde el usuario va visualizar la pagina con todos sus menus e informacion ,con la finalidad de hacer busquedas especificas por plato o filtarla por categorias segun  dicho producto  .
 



##  Organizacion desarrollo de proyeco
###  Link Herramiestas TRELLO 

 `<link>` : <https://trello.com/invite/b/2iLzAdVP/ATTI8321a03eda30be91e6595a0ed4390850EE6571AB/data-love>

## Herramientas:
HTML para el FRONT con CSS , Javascript Vanilla con selectores para interactuar con el DOM

## Como iniciar el proyecto?

Instalar dependencias
```text
npm install
```

Ejecutar comando para iniciar proyecto
```
npm run start
```

Ejecutar test
```text
npm run test
```

##  PROTOTIPOS
Inicialmente se realizo prototipos en papel para darle forma a las ideas, además de pensar algunas ideas a futuro.
## Prototipo de Baja Fidelidad 

###  Screenshot de Drawio
![Image text](/src/img/Prototipo-baja%20-fidelidad%20.png)

## Prototipo de Alta Fidelidad 

### LINK Herramienta FIGMA

`<link>` : <https://www.figma.com/file/AnWHAVxpnZc48xXUNrj4lR/Let's-Food-UI-Kit---Landing-Page-(Community)?type=design&node-id=0-1&t=FlLlGZYEeY86esm2-0>

## Definicion de logo 

![Image text](/src/img/delietaste1.png)




# HISTORIA DE USUARIO

Como usuario, deseo obtener a través de una pagina web, la información de los productos generados a partir de una base de datos relacionada con el menú del restaurante DelyTaste, En dicha página debo puedo tener la posibilidad de hacer búsuedas y filtrados para así facilitar la forma en la que voy a obtener la información que necesito.
 
 ## Menu de Navegacion ☰ 
Como usuario quiero realizar una navegacion en el menu inicial de la página web para encontrar de forma  agil, el menu ,reseñas y contactos que despliega la pagina en general.

## Criterios de aceptación:
El menú de navegacion  deberá ser una barra en la parte inicial con forma home 🏠 en dispositivos de escritorio 🖥️ y cuando es responsive en dispositivos moviles 📲 y tablets toma forma de menu de hambuergesa ☰ en la cual el usuario notara de forma intuitiva como interactuar por la pagina wed  .

El menu de navegacion deberá contener un  botón en forma de 🏠  donde se generará la barra inicio con tres opciones de interaccion : menu - reseñas - contactos .
* Menu: todos los item por productos.
* Reseñas: el espacio donde los usuarios dan su testimonio de experiencia de usabilidad.
* Contactos: parte inferior 'footer' de la pagina donde el usuario puede apreciar , numero telefonico,direccion,email y  links de aplicativos asociados.


## Barra de busqueda 🔍
Como usuario quiero realizar búsquedas de productos dentro de la página web para encontrar los productos que necesito de forma rápida.

## Criterios de aceptación:
La barra de búsqueda  deberá ser una caja de texto en la cual el usuario va ingresar su producto a buscar.

La barra de búsqueda deberá contener un  botón en forma de lupa donde se generará la búsqueda de acuerdo a lo escrito en la barra .

Al hacer clic en el botón buscar debe mostrarse en la parte inferior los productos relacionados con la  búsqueda.

Cuando el  usuario   borra la búsqueda volverá a la página principal.

cuando el usuario busca algo que no existe en el menú ,saldrá un mensaje “lo sentimos no encontramos tu búsqueda”.

## FILTROS ⊽ 
Como usuario quiero realizar una búsqueda de datos a través de filtro por categoría dentro de la pagina Web  para agrupar los productos.

## Criterios de aceptación:
El filtro  deberá ser una caja que despliegue el listado de categorías.


Al hacer clic en el icono de filtrar se mostraran todas la categorías a seleccionar .

Cuando el usuario selecciona una categoría muestra los productos relacionados a esta .

Cuando el usuario quita el filtro  de  categoría regresa a la página principal.

## PRUEBAS DE USABILIDAD 
 Se compartio durante el desarrollo de la Pagina Wed  una  encuesta con las compañeras para identificar fallas y recibir  Feedback adjuntamos el link , para que interactuaran con la interfaz del proyecto.
### Link resultados de rncuesta dirigida al Usuario: 📊
 `<link>` : <https://docs.google.com/forms/d/1fpPqUphGXMEI2pLo0S0xlqa_Y6GgFBVGexuTdkR4o_0/edit#responses>

 Se hizo analisis de las resṕuestas recibidas , tomando en cuenta diversas fallas que se presentaban  en la interfaz tanto las fuentes y el despliegue de menú se veian mal , la cual verificamos con detalle en el codigo de CSS y lo corregimos ,tambien ayudo a mejorar el historial de usuario con sus respectivos crieteriosm de acetacion al usuario final .




# Tests de usabilidad 
## Listado de problemas  detectados:
```
obtenerCategorias › obtenerSubcategorias › returns an array of subcategories for a given category

   expect(received).toBeGreaterThan(expected)
    Expected: > 0
    Received:   0
      14 |       const subcategories = obtenerSubcategorias(category);
      15 |       expect(Array.isArray(subcategories)).toBe(true);
    > 16 |       expect(subcategories.length).toBeGreaterThan(0);
         |                                    ^
      17 |     });
      18 |   });
      19 | });
      at Object.<anonymous> (test/data.spec.js:16:36)
```
* Error que esperaba recibir un arreglo con categorias pero recibia un arreglo con 0 categorias.

```
     expect(new Set(categories).size).toBe(categories.length); 
```

 * Nos ayudo a verificar que no salgan las  categorías duplicadas.

```
expect(received).toBe(expected) // Object.is equality

    If it should pass with deep equality, replace "toBe" with "toStrictEqual"

    Expected: ["Fuerte", "Entrada", "Postre", "Bebida"]
    Received: serializes to the same string

```
* error que espera la comparacion en el 'expect' sea entre 'strings' pero a cambio estaba enviando dos arrays.

```
12:04
13:9  error  'cat' is defined but never used  no-unused-vars

```
* Error detectado de variable no definida 'cat' .

```
31:1  error  Expected indentation of 2 spaces but found 3              indent

```
* Error de indendacion de espaciado , identificado por linea de este tipo de error salieron varios la cual fueron verificados.
```
  31:4  error  'filteredItems' is never reassigned. Use 'const' instead  prefer-const

```
* Error que recomienda usar 'Const' para reasignar variable  'filteredItems' 

```