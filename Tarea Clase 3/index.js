// // EJERCICIO 1: Crear una función que reciba un numero entero y devuelva un error 
// en caso de que el argumento recibido no sea del tipo solicitado.

function checkNumber(num){
    if(typeof num != typeof 1 || !Number.isInteger(num)){
    return "Error, el argumento recibido no es un numero entero"}
}
console.log(checkNumber(3.54))


// // EJERCICIO 2: Crear una función que reciba un array y genere una copia del mismo pero con 
// todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)
function multiplicarPorCinco(array){
    return  array.map(elem =>{
        return elem *= 5
    })
}
console.log(multiplicarPorCinco([2,5,3,1,2]))



// EJERCICIO 3: Crear una función que reciba un arreglo y devuelva el promedio de un rango especificado. 
//Es decir, debe recibir (arreglo, inicio, fin) y deberá calcular el promedio de los valores que se encuentran en ese rango.
function promedioDeRango(array, inicio, fin){
    let newArray = array.slice(inicio, (fin +1))
    let sum = newArray.reduce((accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / newArray.length
}
console.log(promedioDeRango([2,5,3,1,2], 1, 3))



// EJERCICIO 4: Definir una función que devuelva TRUE si el argumento recibido como texto un palíndromo, 
//osea que se lee de la misma forma de izquierda y derecha. Ejemplo de palíndromo "¿Acaso hubo búhos acá?".
function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

function isPalindrome(string){

    let invertedString = string.replace(/[^A-Za-z0-9áéíóúáéíóúÁÉÍÓÚ]/g,'').split('').reverse().join("").toLowerCase();
    let validString=  string.replace(/[^A-Za-z0-9áéíóúáéíóúÁÉÍÓÚ]/g,'').toLowerCase()
    if(quitarAcentos(validString) === quitarAcentos(invertedString)){
        return true
    }
}
console.log(isPalindrome("¿Acaso hubo búhos acá?"));


// EJERCICIO 5: Crear una función para validar los datos que se ingresaron en un formulario. 
//Recibirá como parametros email, password y description.
// Deberá comprobar que se cumplan las siguientes condiciones:
// - El email debe contener "@" y ".com".
// - La contraseña deberá tener entre 8 y 16 caracteres, y tener una mayúscula como mínimo.
// - La descripción podrá tener hasta 400 caracteres pero no puede contener guiones (-).
// Mostrar un error en caso de que no se cumplan todos los requisitos, de lo contrario dar un mensaje 
//de registro exitoso (usando console.log)

function validation(email, password, description){
    let status = []
    if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)){
        status.push(true)
    } else{
        status.push(false)
    }
    if(/(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm.test(password)){
        status.push(true)
    }else{
        status.push(false)
    }
    
    if(description.length <= 400 && !description.includes("-")){
        status.push(true)
    }else{
        status.push(false)
    }

    if(status.includes(false)){
        console.log('Error, no se ha podido registrar, el gmail, la contraseña o la descripcion no son validos')
    } else{
        console.log('Se ha registrado con exito!')
    }
}
validation("pablo@gmail.com", '3422175A', "ng software like Aldus PageMaker including versions of Lorem Ipsum.")
validation("hola", '123', "pppsasas-de")