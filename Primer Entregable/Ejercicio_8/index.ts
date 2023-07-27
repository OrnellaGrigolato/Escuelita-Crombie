// Ejercicio 8: Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return 
// the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).


//Se que no es la mejor solucion pero funciona 

function borrarHabitaciones(piso:number, matrix:number[][]):number[][]{
    const positionOfZero:number[] = [] //Array auxiliar donde guardare las posiciones en las que haya habitaciones gratuitas en el piso en el que me encuentre
    for(let i in matrix[piso]){ //i = posiciones de cada habitacion en el piso en el que nos encontramos
        if(matrix[piso][i]===0){  //Si la habitacion es gratuita guardo su posicion en mi array auxiliar
            positionOfZero.push(parseInt(i))
        }
    }
    for(let i=piso+1;i<matrix.length;i++){ //Recorro "el edificio" desde el piso dado hacia abajo
        positionOfZero.forEach(elem =>{ //Por cada posicion de habitacion gratuita que haya encontrado, coloco 0 en la misma columna de todas las filas inferiores
            matrix[i][elem]=0
        })
    }
    return matrix
}


function solution(matrix:number[][]):number {
    for (let piso = 0; piso < matrix.length; piso++){ //Ejecuto la funcion que borra habitaciones una vez por cada piso, iniciando desde el piso superior
        matrix = borrarHabitaciones(piso, matrix);
    }
    const result = matrix.map(elem => {  //Hago la suma de los precios de las habitaciones de cada piso y luego otra suma de todos los valores de ese array
        return elem.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    }).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return result 
}

console.log(solution([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])) //9
console.log(solution([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]])) //9
