/* Iteración #3: Calcular la suma */

/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. */

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sum = 0;
    if(!Array.isArray(param)) return "El argumento no es un array";
    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}

//Más limpito:
function sumAll2(param) {
    if(!Array.isArray(param)) return "El argumento no es un array";
    return param.reduce((a,b) => a +b );
}