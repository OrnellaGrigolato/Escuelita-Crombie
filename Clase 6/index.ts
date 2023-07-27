//Ejercicio 1: Quiero crear una constante que al escribir “” y 
//presionar ctrl + espacio me aparezcan automáticamente estas 3 variedades con el auto corrector

type Hamburguesas = 'Vegetariana' | "Con Carne" | 'Con pollo'

const Hamburguesa:Hamburguesas = "Vegetariana"



//Ejercicio 2: Segundo ejercicio:
// Se está desarrollando una aplicación que pagina distintos tipos de entidades, como por ejemplo usuarios, post, categorias, etc.
// Se requiere hacer una función que se le pase el listado de usuario o cualquier otra entidad y que esta función te devuelve el paginado.
// El paginado tendrá este tipo de respuesta
// {
//   items:(arreglo de usuarios/post/etc),
//   page:1,
//   maxPages:10,
// }

const users = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Michael Johnson",
      age: 25,
      email: "michael.johnson@example.com",
    },
    {
      id: 4,
      name: "Emily Brown",
      age: 26,
      email: "emily.brown@example.com",
    },
    {
      id: 5,
      name: "William Lee",
      age: 31,
      email: "william.lee@example.com",
    },
    {
      id: 6,
      name: "Olivia Davis",
      age: 29,
      email: "olivia.davis@example.com",
    },
    {
      id: 7,
      name: "James Wilson",
      age: 27,
      email: "james.wilson@example.com",
    },
    {
      id: 8,
      name: "Sophia Taylor",
      age: 30,
      email: "sophia.taylor@example.com",
    },
    {
      id: 9,
      name: "Alexander Martinez",
      age: 33,
      email: "alexander.martinez@example.com",
    },
    {
      id: 10,
      name: "Ava Anderson",
      age: 24,
      email: "ava.anderson@example.com",
    },
    {
      id: 11,
      name: "Ethan Thomas",
      age: 28,
      email: "ethan.thomas@example.com",
    },
    {
      id: 12,
      name: "Isabella White",
      age: 31,
      email: "isabella.white@example.com",
    },
    {
      id: 13,
      name: "Benjamin Harris",
      age: 25,
      email: "benjamin.harris@example.com",
    },
    {
      id: 14,
      name: "Mia Martin",
      age: 29,
      email: "mia.martin@example.com",
    },
    {
      id: 15,
      name: "Daniel Thompson",
      age: 26,
      email: "daniel.thompson@example.com",
    },
    {
      id: 16,
      name: "Abigail Garcia",
      age: 32,
      email: "abigail.garcia@example.com",
    },
    {
      id: 17,
      name: "Matthew Robinson",
      age: 30,
      email: "matthew.robinson@example.com",
    },
    {
      id: 18,
      name: "Charlotte Lewis",
      age: 27,
      email: "charlotte.lewis@example.com",
    },
    {
      id: 19,
      name: "David Hall",
      age: 28,
      email: "david.hall@example.com",
    },
    {
      id: 20,
      name: "Sofia Walker",
      age: 25,
      email: "sofia.walker@example.com",
    },
    {
      id: 21,
      name: "Joseph Allen",
      age: 31,
      email: "joseph.allen@example.com",
    },
    {
      id: 22,
      name: "Grace Young",
      age: 29,
      email: "grace.young@example.com",
    },
    {
      id: 23,
      name: "Andrew Hernandez",
      age: 26,
      email: "andrew.hernandez@example.com",
    },
    {
      id: 24,
      name: "Chloe King",
      age: 27,
      email: "chloe.king@example.com",
    },
    {
      id: 25,
      name: "Logan Scott",
      age: 30,
      email: "logan.scott@example.com",
    },
    {
      id: 26,
      name: "Zoe Green",
      age: 28,
      email: "zoe.green@example.com",
    },
    {
      id: 27,
      name: "Ryan Baker",
      age: 33,
      email: "ryan.baker@example.com",
    },
    {
      id: 28,
      name: "Harper Hill",
      age: 24,
      email: "harper.hill@example.com",
    },
    {
      id: 29,
      name: "Elijah Adams",
      age: 31,
      email: "elijah.adams@example.com",
    },
    {
      id: 30,
      name: "Lily Wright",
      age: 29,
      email: "lily.wright@example.com",
    },
  ];

function paginarEntidad<T>(entitie: T[], page: number){

    let items = entitie.slice((page - 1) * 10, page * 10)
    
    return {page:page,totalPages: entitie.length/10,items:items}
}

let paginacion = paginarEntidad(users, 1)
console.log(paginarEntidad(users, 1)) 
console.log(paginarEntidad(users, 2))

