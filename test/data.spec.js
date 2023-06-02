import { obtenerCategorias} from '../src/data.js';


describe('test funcion obtenerCategorias', () => {
  it('verificamos que sea funcion', () => {
    expect(typeof obtenerCategorias).toBe('function');
  });

  it('verifica que retorne arreglo con categorias', () => {
    const llamadaFuncion = obtenerCategorias()
    const categoriasEsperadas = ["Fuerte", "Entrada","Postre","Bebida"]

    expect(JSON.stringify(llamadaFuncion)).toBe(JSON.stringify(categoriasEsperadas));
  });
});



