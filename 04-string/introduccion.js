let str = "Soy un string con comillas dobles"
let str_sng = 'Soy un string con comillas simples'

console.log(str)
console.log(str_sng)

let str_comillas = "El otro dia me dijo literalmente \"Hola mundo\""
let str_comillas_simples = 'El otro dia me dijo literalmente "Hola mundo"';
let str_comillas_dobles = "El otro dia me dijo literalmente 'Hola mundo'";

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles);

// log: Comillas invertidas (Backticks)

let str_backticks = `Hola esto es un string con backticks`
console.log(str_backticks)

let nombre = 'Lautaro'
let apellidos = 'Ledesma'
let saludo = `Hola ${nombre} ${apellidos} bienvenido`

console.log(saludo)

// log: Plantillas HTML

let plantilla = `
<html>
        <title>Plantilla HTML</title>
        <h1>Hola ${nombre} ${apellidos}</h1>
</html>
`

console.log(plantilla)

// info: Introduccion de varibles en html

let libros = [ 'Empieza por el porque', 'Cien años de soledad', 'El amor en los tiempos del colera', 'El monje que vendió su Ferrari', 'El poder del ahora' ]

