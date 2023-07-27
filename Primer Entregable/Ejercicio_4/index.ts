// Ejercicio 4: Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray: number[]): number {
    let higestNumber = -Infinity
    for(let i = 0; i<inputArray.length-1; i++){
        let multiplication = inputArray[i] * inputArray[i+1]
        if(multiplication > higestNumber) higestNumber = multiplication
    }
    return higestNumber
}


console.log(solution([3, 6, -2, -5, 7, 3])) //21
console.log(solution([5, 1, 2, 3, 1, 4])) //6