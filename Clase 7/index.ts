//Ejercicio 3: Crear un tipo Merge :advertencia:
// En este ejercicio, crearás un tipo de utilidad llamado Merge que tomará dos tipos y los combinará. Usando tipos dinamicos

type Persona = {
    edad: number
    nombre : string
}

type Alumno={
    cursos: string[]
}


type Merge<T, K>= T & K



const mezclaPersonaAlumno:Merge<Persona, Alumno>={edad:2,nombre:"Paulo", cursos:["Matematica", "Ingles"]}




