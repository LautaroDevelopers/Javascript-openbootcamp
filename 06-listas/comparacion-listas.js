// info: ordernar listas

// info: every()

const array = [1, 2, 3, 6, 5, 4, 7, 8, 9, 10];

// const resul = array.every((valor) => {
//   if (typeof valor === "string" && valor.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

const resul = array.every((valor) => valor > 0);
console.log(resul);

// info: Comparaciones de listas
const ar1 = [1, 2, 3, 6, 5, 4];
const ar2 = [1, 2, 3, 6, 5, 4];
const resul2 = ar1 === ar2;
console.log(resul2);

const compararArray = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, index) => valor === array_2[index]);
  return res;
};

console.log(compararArray(ar1, ar2));

const ar3 = [1, 2, 3, 6, 5, 4, 8, 9, 10];
console.log(compararArray(ar1, ar3));
