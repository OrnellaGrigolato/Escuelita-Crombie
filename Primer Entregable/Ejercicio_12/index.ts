//Ejercicio 12: Some people are standing in a row in a park. There are trees between them which cannot be moved. 
//Your task is to rearrange the people by their heights in a non-descending order without moving the trees.


function solution(a: number[]): number[] {
    const positionsOfTrees:number[] = [] 
    for(let i = 0;i<a.length;i++){
        if(a[i]===-1)positionsOfTrees.push(i)
    }
    const noTrees=a.filter(elem=>elem!=-1).sort((a,b)=>a-b)  //Creo un array que no incluye a los arboles y lo ordeno de menor a mayor
    if(noTrees.length !=0){ 
        for(let j = 0;j<=noTrees.length;j++){ //Recorro la lista sin arboles
        positionsOfTrees.forEach(elem=>{
            if(j===elem)noTrees.splice(elem,0,-1) //Si la posicion en la que me encuentro es igual a alguna de las posiciones en la que habia arboles, agrego un arbol en esa posicion 
        })
    }}else{ //Si la lista sin arboles estaba vacia, pongo los arboles nuevamente como estaban
        positionsOfTrees.forEach(elem=>{
            noTrees.splice(elem,0,-1)
        })
    }
    return noTrees
}
    

   console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])) //[-1, 150, 160, 170, -1, -1, 180, 190]
   console.log(solution([4, 2, 9, 11, 2, 16])) //[2, 2, 4, 9, 11, 16]
   