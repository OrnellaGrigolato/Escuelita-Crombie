//Ejercicio 11:  A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.


function solution(n: number): boolean {
  const arrayOfDigits = Array.from(String(n), Number); //Creo un array con un numero en cada posicion
  const halfOfArray= arrayOfDigits.length / 2 //Me guardo el largo de la mitad de el array
  const firstHalf=arrayOfDigits.splice(0, halfOfArray) //Corto el array y almaceno la primer mitad
  const lastHalf=arrayOfDigits.splice(-halfOfArray, halfOfArray) //Corto el array y almaceno la segunda mitad
  const firstHalfSum= firstHalf.reduce( 
    (accumulator, currentValue) => accumulator + currentValue,
    0);
  const lastHalfSum= lastHalf.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0);
  return firstHalfSum === lastHalfSum ? true : false
}

console.log(solution(1230)) //true

console.log(solution(239017)) //false