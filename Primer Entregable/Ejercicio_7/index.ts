// Ejercicio 7: Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence 
// by removing no more than one element from the array.


function solution(sequence: number[]): boolean {
    let maximo = -Infinity 
    let maximoPrevio = -Infinity
    let removidos= 0;
    for(let i of sequence){
       //Si el elemento en el que nos encontramos es mayor al maximo, registramos nuevo maximo
       if(i>maximo){
           maximoPrevio=maximo;
           maximo =i;
       }else{
        //Si el elemento en el que nos encontramos no es mayor que el maximo pero si mayor que el maximo previo, 
        //"removemos" el maximo anterior y registramos al elemento como el nuevo maximo
           if(i>maximoPrevio){
              removidos+=1
              maximo = i               
           }else{
               //Si no es mayor que ninguno de los maximos, lo "removemos"
               removidos+=1
           }
       }
    }

    return removidos > 1 ? false : true
}


console.log(solution([1, 3, 2, 1])) //false

console.log(solution([1, 3, 2])) //true