/* **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    if(!Array.isArray(param)) return "El argumento no es un array";
    let resultado= [];
    for(let i=0;i<param.length;i++ ){
        param[i] in resultado ? resultado[param[i]]++ : resultado[param[i]]=1;
    }
    return resultado;
  }