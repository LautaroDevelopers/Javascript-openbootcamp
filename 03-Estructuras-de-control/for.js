// for(inicializacion; condicion; actualizacion){
//     //bloque de instrucciones
// }

// log: sumar 1 a variable (i)

// i = i + 1
// i += 1
// i++

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let lista = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ]
for (let i = 0; i < lista.length; i++) {
    console.log( lista[ i ] *2)
}

// log: Estructura For of
for (let valor of lista) {
    console.log( valor )
}

// log: Estructura ForEach
lista.forEach((valor) => {
    console.log( valor )
})

// log: Estructura For in
let persona = {
    nombre: 'Lautaro',
    apellidos: 'Ledesma',
    edad: 15,
    isDeveloper: true
}

for (let prop in persona) {
    console.log(prop, persona[prop])
}