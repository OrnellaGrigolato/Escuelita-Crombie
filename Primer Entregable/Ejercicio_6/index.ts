// Ejercicio 6: We want to arrange statues from smallest to largest so that each statue will be bigger than the previous one. 
// We may need some additional statues to be able to accomplish that. Given an array, find the minimum number of additional statues needed.


function solution(statues: number[]): number {
    let orderedArray = statues.sort((a, b) => a - b) //Ordeno el array original
    let newArray = [] //Creo un nuevo array auxiliar
    for(let i = orderedArray[0]; i<=orderedArray[orderedArray.length-1];i++){
        newArray.push(i) //Pongo en mi nuevo array todos los numeros enteros que hay entre el primer y el ultimo valor del array de estatuas 
    }
    return newArray.length - orderedArray.length //Resto el largo de mi nuevo array con el largo de el de estatuas
}


console.log(solution([6, 2, 3, 8])) // 3
console.log(solution([5, 4, 6])) //0