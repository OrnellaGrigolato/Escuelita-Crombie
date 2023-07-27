//Ejercicio 10: Given two strings, find the number of common characters between them.


function solution(s1: string, s2: string): number {
    const arr1 = s1.split(''); //Convierto a s1 en un array
    const arr2 = s2.split(''); //Convierto a s2 en un array
    let commonCharacters = 0;
    for(let i of arr1){ //Recorro el arreglo que representa a s1
        if (arr2.includes(i)) { //Si s2 incluye el caracter de s1 en el que estoy en este momento, aumento el contador y elimino ese caracter de arr2
        commonCharacters++;
        arr2.splice(arr2.indexOf(i), 1);
        }
    }
    return commonCharacters
}

console.log(solution("aabcc", "adcaa")) //3


console.log(solution("abca", "xyzbac")) //3