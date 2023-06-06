import { obtenerCategorias,obtenerSubcategorias,busqueda,filtrado} from '../src/data.js';
describe('obtenerCategorias', () => {
  it('returna un array de categorias unicas', () => {
    const categorias = obtenerCategorias();
    expect(Array.isArray(categorias)).toBe(true);
    expect(categorias.length).toBeGreaterThan(0);
  });
  it('verificamos que sea funcion', () => {
    expect(typeof obtenerCategorias).toBe('function');
  });
  it('verifica que retorne arreglo con categorias', () => {
    const llamadaFuncion = obtenerCategorias()
    const categoriasEsperadas = ["Fuerte", "Entrada","Postre","Bebida"]
    expect(JSON.stringify(llamadaFuncion)).toBe(JSON.stringify(categoriasEsperadas));
  });
});
describe('obtenerSubcategorias', () => {
  it('verificamos que sea funcion', () => {
    expect(typeof obtenerSubcategorias).toBe('function');
  });
  it('returna un array de subcategorias unicas', () => {
    const subcategoria = obtenerSubcategorias("Entrada");
    expect(Array.isArray(subcategoria)).toBe(true);
    expect(subcategoria.length).toBeGreaterThan(0);
  });
})
describe('busqueda', () => {
  it('verificamos que sea funcion', () => {
    expect(typeof busqueda).toBe('function');
  });
  it('devuelve elementos filtrados según el texto de búsqueda', () => {
    const searchText = 'keyword';
    const filteredItems = busqueda(searchText);
    expect(Array.isArray(filteredItems)).toBe(true);
  });
});
describe('filtrado', () => {
  it('verificamos que sea funcion', () => {
    expect(typeof filtrado).toBe('function');
  });
  it('devuelve productos  filtrados por subcategoria', () => {
    const producto ="Panadería";
    const filtradoproducto = filtrado(producto)
    expect(Array.isArray(filtradoproducto)).toBe(true);
    expect(filtradoproducto.length).toEqual(7)
  });
  it('devuelve productos  filtrados por subcategoria', () => {
    const producto ="noexiste";
    const filtradoproducto = filtrado(producto)
    expect(filtradoproducto.length).toEqual(0);
  });
});

