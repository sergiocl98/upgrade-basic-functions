/* Iteración #1: Buscar el máximo */

/* Completa la función que tomando dos números como argumento devuelva el más alto. */

// SUMA según la función de notion
function sum(numberOne , numberTwo) {
    return numberOne + numberTwo;
}

//Ejercicio
function bigger(numberOne,numberTwo){
    if(numberOne> numberTwo) return numberOne;
    else if (numberOne < numberTwo) return numberTwo;
    else return "Son iguales"
}

bigger(1,2);
bigger(2,2);
bigger(3,2);