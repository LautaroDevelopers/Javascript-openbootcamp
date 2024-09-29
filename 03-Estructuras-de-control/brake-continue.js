let lista = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

for (var i = 0; i < lista.length; i++) {
    if (i === 3) {
        continue
    }
    let j = 50
    console.log(lista[ i ])

    if (i === 5) {
        break
    }
}


// info: ambito de un bucle

console.log('el valor de i es:', i)
console.log('el valor de j es:', j)