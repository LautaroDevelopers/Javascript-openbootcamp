// info: Obtener una lista a partir de otra .slice(start, end)
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// warning: No modifica el valor del array original
console.log(array.slice(4, 7));

const array2 = array.slice(2, 5);
console.log(array2);

const array3 = array.slice(2, -2);
console.log(array3);
