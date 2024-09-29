// info: Operador .valueOf() - Obtener valor numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// info: NaN (Not a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 2;

console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

// info: Convertir a los string a valores numericos con Number, parseInt, parseFloat
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // error: Error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero)); // note: Obtener solo parte entera
console.log(parseFloat(numero)); // note: Obtener con parte decimal

let num3 = 4;
console.log(parseInt(num3));
console.log(parseFloat(num3));

// info: Numero Hexadecimal (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex, 16)); // note: especificar variable donde esta el numero y luego la base

// info: Obtener los valores maximos y minimos en JavaScript
let min_presicion = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_js);
console.log(max_valor_js);
