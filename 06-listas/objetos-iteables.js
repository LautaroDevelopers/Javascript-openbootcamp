// info: .some()
const array = [1, 2, 3, 6, 5, 4, 7, 8, 9, 10];

const resul = array.some((valor) => valor >= 5);
console.log(resul);

const existe = array.some((valor) => valor === 90);
console.log(existe);

const listaObjetos = [
  { nombre: "Lautaro", edad: 35 },
  { nombre: "Leire", edad: 34 },
  { nombre: "Gorka", edad: 28 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

const existeLautaro = listaObjetos.some((valor) => valor.nombre == "Leire");
console.log(existeLautaro);

// info: Obtener una lista a partir de un objeto iterable
const str = "Hola soy un string";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
