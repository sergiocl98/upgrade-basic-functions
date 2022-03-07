/* **Iteración #6: Valores únicos** */

/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  //La forma más corta que se me ocurre
  function removeDuplicates(param) {
    if(!Array.isArray(param)) return "El argumento no es un array";
    let noDuplicates = new Set(param);
    return [...noDuplicates]
  }

  //Se puede hacer de muchas formas con bucles