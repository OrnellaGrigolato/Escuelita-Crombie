// Ejercicio 14: Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, 
// the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, 
// where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the 
// division is complete.


function solution(a: number[]): number[] {
    const teamOne = []
    const teamTwo = []
    for(let i = 0;i<a.length;i++){ 
        if((i+1)%2!=0){ //Si el elemento en el que me encuentro al dividirse por dos tiene un resto diferente a cero, es decir, es impar, va al team 1
            teamOne.push(a[i])
        }else{ //Si es par, va al team 2
            teamTwo.push(a[i])
        }
    }
    //Sumo los pesos de cada team
    const weigthTeamOne = teamOne.reduce( 
        (accumulator, currentValue) => accumulator + currentValue,
        0
        );

    const weigthTeamTwo = teamTwo.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
        );

    return [weigthTeamOne, weigthTeamTwo]
}


console.log(solution([50, 60, 60, 45, 70])) //[180, 105]

console.log(solution([100, 50, 50, 100])) //[150, 150]