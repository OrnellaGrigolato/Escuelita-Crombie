//Ejercicio 1: ordenar a los alumnos por nota
const lista = [{
    'nombre': "Jose",
    'nota': 10,
  },
  {
    'nombre': "pepe",
    'nota': 5,
  },
  {
    'nombre': "Carlos",
    'nota': 1,
  },
  {
    'nombre': "Maria",
    'nota': 9,
  }, {
    'nombre': "Pablo",
    'nota': 10,
  }]

function ordenarAlumnosPorNota(){
    let notaMayor=0;
    for (let i = 0; i < lista.length; i++) {
        if (notaMayor<=lista[i].nota) {
            notaMayor=lista[i].nota
        }
    }

    const alumnos = lista.filter(element => element.nota === notaMayor);
    return alumnos
}

console.log(ordenarAlumnosPorNota());

//Ejercicio 2: ordenar los numeros sin usar sort
const numbers = [3, 23, 11, 15, 6, 19, 32, 9]
function ordenarNumeros(){
    let auxiliar;
    for (let k = 1; k < numbers.length; k++) {
        for (let i = 0; i < (numbers.length - k); i++) {
            if (numbers[i] > numbers[i + 1]) {
                auxiliar = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = auxiliar;
            }
        }
    }
    return numbers
}

console.log(ordenarNumeros())



//Ejercicio 3: obtener las letras que estan en mayuscula
const string = 'LaCrOmbiNeTa'
function obtenerMayusculas(){
    let array = string.split('')
    let filtered = array.filter((elem)=>{
        if(elem === elem.toUpperCase()){
            return elem
        }
    })
    return filtered
}
console.log(obtenerMayusculas());
