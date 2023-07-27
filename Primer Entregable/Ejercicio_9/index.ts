// Ejercicio 9: Given an array of strings, return another array containing all of its longest strings.


function solution(inputArray: string[]): string[] {
    let maxLength = -Infinity 
    for(let i of inputArray){ //Recorro cada elemento del array
        if(i.length >= maxLength){ //Si es mas largo que el mas largo anterior, su largo pasa a ser 'maxLength'
            maxLength = i.length
        }
    }
    const result:string[] = []
    inputArray.forEach(elem=>{ //Recorro cada elemento del array
        if(elem.length===maxLength){ //Si tiene el mismo largo que el maxLength que encontre antes, es parte del resultado
            result.push(elem)
        }
    })

    return result
}


console.log(solution(["aba", "aa", "ad", "vcd", "aba"])) //["aba", "vcd", "aba"]

console.log(solution(["abc", "eeee", "abcd","dcd"])) // ["eeee", "abcd"]