//Ejercicio 3: Given the string, check if it is a palindrome.

function solution(inputString: string): boolean {
    let inverted = inputString.split("").reverse().join('');
    return inverted===inputString ? true : false;
}

console.log(solution('Mama')) //False
console.log(solution('anana')) //true


// Aunque la solución anterior pasa todos los test de CodeSignal, una que hice en una de las tareas de la escuelita y que me parece 
// mejor es la siguiente, ya que funciona para casos más complejos que contengan espacios, simbolos, acentos y mayúsculas y
// tambien resuelve los test de la página


function quitarAcentos(cadena:string):string{
	const acentos:Record<string, string> = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

function isPalindrome(string:string):boolean{
    let invertedString = string.replace(/[^A-Za-z0-9áéíóúáéíóúÁÉÍÓÚ]/g,'').split('').reverse().join("").toLowerCase();
    let validString=  string.replace(/[^A-Za-z0-9áéíóúáéíóúÁÉÍÓÚ]/g,'').toLowerCase()
    if(quitarAcentos(validString) === quitarAcentos(invertedString)){
        return true
    }
    return false
}

console.log(isPalindrome("¿Acaso hubo búhos acá?")); //true
console.log(isPalindrome('Voy a comer al Mac')); //false