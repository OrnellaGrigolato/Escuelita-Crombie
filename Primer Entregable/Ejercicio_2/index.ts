// Ejercicio 2: Given a year, return the century it is in. The first century 
// spans from the year 1 up to and including the year 100, the second - 
// from the year 101 up to and including the year 200, etc.


//Mi primera solucion 
function solution1(year: number): number {
    let firstTwoNumbers = Math.trunc(year / 100)
    if(year.toString().slice(-2) === "00"){ //Si el año termina en 00, debo devolver los primeros dos números
        return firstTwoNumbers
    } else{ //En cualquier otro caso, devuelvo los primeros dos números más uno(1)
        return firstTwoNumbers + 1
    }
}


//Una mucho mejor 
function solution2(year: number): number {
    return Math.ceil(year/100)
}



console.log(solution1(1920)) //20
console.log(solution2(1730)) //18