// import {
//   suma,
//   resta,
//   multiplicar,
//   dividir,
//   elevar,
//   factorial,
//   nombre,
// } from "./modules/math.js";

import * as math from "./modules/math.js";
import getAuthor, { libro } from "./modules/literals.js";

const sum = math.suma(12, 90);
console.log("Suma:", sum);

const potencia = math.elevar(2, 3);
console.log("Potencia:", potencia);

const fact = math.factorial(5);
console.log("Factorial:", fact);

const div = math.dividir(12, 90);
console.log("División:", div);

const mult = math.multiplicar(12, 90);
console.log("Multiplicación:", mult);

const res = math.resta(12, 90);
console.log("Resta:", res);

console.log(math.nombre);

console.log(getAuthor());
console.log(libro);
