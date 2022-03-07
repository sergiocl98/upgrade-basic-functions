/* Iteración #4: Calcular el promedio */

/* Calcular un promedio es una tarea extremadamente común.
Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    if(!Array.isArray(param)) return "El argumento no es un array";
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum+= param[i];
    }
    return sum/param.length;
}

//Más limpito:
function average2(param) {
    if(!Array.isArray(param)) return "El argumento no es un array";
    return param.reduce((a,b) => a + b)/param.length;
}