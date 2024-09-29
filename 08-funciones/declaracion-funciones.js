// info:

const nom = "Lautaro";
saludar(nom);

function saludar(parametro) {
  console.log(`Hola ${parametro}`);
}

let nombre_2 = "Lautaro";
console.log(nombre_2);

despedir(nombre_2);

function despedir(parametro) {
  parametro = "Diego";
  console.log(`Adios ${parametro}`);
}

let persona = {
  nombre: "Lautaro",
  apellido: "Ledesma",
};
console.log(persona);
saludarPersona(persona);
console.log(persona);

function saludarPersona(persona) {
  persona.apellido = "Developers";
  console.log(`Hola ${persona.nombre} ${persona.apellido}`);
}

// saludarPersona();

//

function imprimirNumero(numero = 7) /* note: Parametros por defecto */ {
  console.log(numero);
}

imprimirNumero();

///////////////////////////////

function imprimir(...parametros) {
  console.log(parametros);
}

imprimir("Lautaro", "Ledesma", "Developers", 35, true);

// log: Sumar

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(s);

////

let variable = "Hola";
function multiplicar(a = 0, b = 0) {
  console.log(variable);
  let variable_interna = "Adios";
  return a * b;
}

// console.log(variable_interna); // error: No se puede acceder a varibles de una funcion

console.log(multiplicar(4, 9));
