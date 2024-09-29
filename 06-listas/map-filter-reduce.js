// info: Metodos avanzados
// log: .map() - .filter() - .reduce()

const array = [
  "Buenos Aires",
  "Cordoba",
  "Mendoza",
  "Tucuman",
  "Rosario",
  "Santa Fe",
  "Mar del Plata",
];

const val = array.forEach((v) => {
  console.log(v);
  return 4;
});
console.log(val);

// info: .map()
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

// info: .filter()
const listaObjetos = [
  { nombre: "Lautaro", edad: 35 },
  { nombre: "Leire", edad: 34 },
  { nombre: "Gorka", edad: 28 },
  { nombre: "Lucia", edad: 3 },
  { nombre: "Amaia", edad: 29 },
];

// const personasMayores = listaObjetos.filter((valor) => {
//   if (valor.edad >= 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

const personasMayores = listaObjetos.filter((valor) => valor.edad >= 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter((obj) => obj.nombre !== "Leire");
console.log(nuevaLista);

// info: .reduce()

const suma = listaObjetos.reduce((agr, cur) => agr + cur.edad, 0);
console.log(suma);
