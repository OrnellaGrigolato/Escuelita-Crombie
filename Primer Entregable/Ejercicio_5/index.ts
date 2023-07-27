// Ejercicio 5: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.


function solution(n: number): number {
    return Math.pow(n, 2) + Math.pow(n - 1, 2) //Noté que el aumento en el area de la figura representaba
    //un aumento cuadrático y hallé esta ecuacion que resuelve el problema
}


console.log(solution(3)) //13
console.log(solution(5)) //41