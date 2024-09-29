// info: Iterar elementos de una lista
const lista = [1, "Hola", true, undefined, null, { nombre: "Lautaro" }];

// log: forma antingua y poco eficiente
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// log: forma moderna ES6
let suma = 0;
const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrayNums.forEach((valor) => {
  suma += valor;
  console.log(valor);
});

console.log(suma);

// info: Buscar un valor en una lista .find()
const val = arrayNums.find((valor) => {
  if (valor === 5) {
    return true;
  }
});

console.log(val);

const listaObjetos = [
  { nombre: "Lautaro", edad: 35 },
  { nombre: "Leire", edad: 34 },
  { nombre: "Gorka", edad: 28 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

// const objeto = listaObjetos.find(o => {
//   if (o.nombre === 'Lautaro') {
//     return true
//   }
// })

const objeto = listaObjetos.find((o) => o.nombre === "Gorka");
console.log(objeto.edad);

const { edad } = listaObjetos.find((o) => o.nombre === "Lautaro");
console.log(edad);

