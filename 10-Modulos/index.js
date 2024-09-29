// info: Formas de importar/exportar módulos
// 1. CommonJS - require()
// 2. ES6 - import/export

// const moduloMath = require("./modules/math.js");
// const {
//   suma,
//   resta,
//   multiplicar,
//   dividir,
//   factorial,
// } = require("./modules/math.js");

let {
  suma,
  resta,
  multiplicar,
  dividir,
  factorial,
} = require("./modules/math.js");

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);
