// info: Listas, arrays, arreglo u vectores

const lista = [ 1, 'Hola', true, undefined, null ]
const lista2 = new Array(1, 'Hola', true, undefined, null)
const lista3 = new Array(3)

lista3[ 0 ] = 'Soy el primer elemento'
const lista4 = [ lista, lista2, lista3 ]

console.log( lista )
console.log( lista2 )
console.log( lista3 )
console.log( lista4 )