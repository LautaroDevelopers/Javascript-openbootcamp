// info: Operaciones aritmeticas

let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicación (*)
console.log(a * b);
// División (/)
console.log(a / b);

console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// info: Redondeo

let c = 3.3;
let d = c * 3;

console.log(d);
// log: .toFixed(x) - Limitar el numero de decimales al valor x
console.log(d.toFixed(4)); // note: .toFixed() toma la cantidad de decimales que se quiera mostrar
console.log(typeof d.toFixed(4));

let e = 1839.123456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// log: .toPrecision(z) - Limitar el numero de cifras significativas

console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));
