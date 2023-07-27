//Ejercicio 15: Given a rectangular matrix of characters, add a border of asterisks(*) to it.


function solution(picture: string[]): string[] {
    const length = picture[0].length; //Guardo el largo de los strings
    for(let i = 0;i<picture.length;i++){
         picture[i] = '*' + picture[i] + '*' //A cada string le agrego * al inicio y al final
    }
    let border = '';
    for(let i = 0;i<length+2;i++){ //Creo un borde con la cantidad de astericos que de la suma entre el largo de los strings y 2(por los bordes verticales)
        border = border + '*'
    }
    //Agrego el borde que cree adelante y atras del array
    picture.splice(0,0,border);
    picture.splice(picture.length,0,border);
    
    return picture;
}

console.log(solution(["abc","ded"])) //["*****","*abc*","*ded*","*****"]

console.log(solution(["abcde","fghij","klmno","pqrst","uvwxy"])) //["*******","*abcde*","*fghij*","*klmno*","*pqrst*","*uvwxy*","*******"]