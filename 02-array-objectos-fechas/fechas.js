// info: Librerias de apoyo Moment JS

const ahora = new Date()

console.log(ahora)

const fecha_milis = new Date(10) // Utilizando milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("september 16 2024"); // Utilizando una cadena
console.log(fecha_cadena)

const fecha_valores = new Date(2024, 8, 16); // Utilizando valores
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const año = ahora.getFullYear()
console.log(dia, mes, año)