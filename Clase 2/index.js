//Ejercicio 1
function areaDeUnCirculo(radio){
    return (Math.PI * Math.pow(radio, 2))
}
console.log('El area del circulo es: ' + areaDeUnCirculo(2));

//Ejercicio 2
function profes(listaProfes){
    return listaProfes[1] + ' ' + listaProfes[listaProfes.length -1]
}
console.log('El segundo y el ultimo profe de la lista son: ' + profes(['juani', 'valentin', 'lauti', 'giuliano']));

//Objeto ejercicio 3
const alumno1 = {
    'nombre' : 'Julian',
    'apellido': 'Gomez',
    'edad': 22,
    'lenguajeDeProgramacion': "Javascript"
}
//Ejercicio 3
function ObtenerPropAlumno(alumno, caracteristica){
    console.log("El nombre del alumno y la caracteristica pedida son: " + alumno.nombre + ' ' + alumno[caracteristica])
}
ObtenerPropAlumno(alumno1, 'edad');


