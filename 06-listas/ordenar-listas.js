// info: .sort() => Modifica el array

const array = [1, 2, 3, 6, 5, 4, 7, 8, 9, 10];

array.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return +1;
  } else {
    return 0;
  }
});

console.log(array);

// info: Ordenar unicamente array numericos
const arrayNumerico = [200, 1, 2, 3, 6, 5, 4, 7, 8, 9, 10];
arrayNumerico.sort((a, b) => b - a);
console.log(arrayNumerico);

// info: Array de objetos

const arrayObjetos = [
  { nombre: "Lautaro", edad: 35 },
  { nombre: "Leire", edad: 34 },
  { nombre: "Gorka", edad: 28 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Amaia", edad: 29 },
  { nombre: "Inmaculada", edad: 15 },
];

// arrayObjetos.sort((a, b) => {
//   if (a.edad > b.edad) {
//     return -1;
//   } else if (a.edad < b.edad) {
//     return +1;
//   } else {
//     return 0;
//   }
// });
// console.log(arrayObjetos);

console.log(arrayObjetos.sort((a, b) => a.edad - b.edad));
