const productos = [
    {marca:"Walmart", stock:3, nombre: "Lavarropas", precio: 20000},
    {marca:"Fravega", stock:2, nombre: "Heladera", precio: 30000},
    {marca:"Musimundo", stock:1, nombre: "Estufa", precio: 15000},
    {marca:"Samsung", stock:10, nombre: "Televisor", precio: 50000}
]

//Devolver array de productos de la marca pasada por parametro
function productosDeUnaMarca(marca){
    return productos.filter(elem=> elem.marca === marca)
}
console.log(productosDeUnaMarca("Fravega"))



//Devolver array de productos con precios mayores al enviado por parametro
function productosConPrecioMayor(precio){
    return productos.filter(elem=> elem.precio >precio)
}
console.log(productosConPrecioMayor(20000))




//Cambiar nombre de una marca
function cambiarNombre(marca, nuevoNombre){
    let producto = productos.filter(elem=> elem.marca === marca)
    for(let i in producto){
        productos[i].marca=nuevoNombre
    }
    
}
cambiarNombre('Walmart', 'Chango Mas')
console.log(productos)


//Devolver la suma de todos los precios, el promedio, el maximo y el minimo
function analisisDePrecios(){
    let suma = 0
    for(let i =0; i<productos.length;i++){
        suma+=productos[i].precio
    }

    let promedio = suma /productos.length
    let precios = productos.map(elem=>elem.precio)
    let precioMaximo = precios.reduce((a, b) => Math.max(a, b), -Infinity);
    let precioMinimo = precios.reduce((a, b) => Math.min(a, b), Infinity);
    console.log(`La suma de los precios es ${suma}, el precio promedio es ${promedio}, el precio maximo ${precioMaximo} y el precio minimo es ${precioMinimo}`)
}

analisisDePrecios()