/* Iteración #2: Buscar la palabra más larga */

/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longestWord='';
    if(!Array.isArray(param)) return "El argumento no es un array";

    param.forEach(word => {
        if(longestWord.length<word.length){
            longestWord= word;
        }
    });
    return longestWord;
}