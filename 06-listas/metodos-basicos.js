// info: Trabajar con listas
let var1 = { id: false };
let array = [1, "Hola", true, undefined, null, { nombre: "Lautaro" }];

console.log(array[5]);

// info: Acceder a los valores de un array a traves de su posicion
// note: array[indice] => 0, 1, 2, 3, 4, 5, .....
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

// info: Introducir nuevos valores a un array
// log: .push() - .unshift()

// note: .push() - Agrega un nuevo elemento al final del array
array.push("Soy el ultimo elemento");
console.log(array);

// note: .unshift() - Agrega un nuevo elemento al principio del array
array.unshift("Soy el primer elemento");
console.log(array);

// info: Eliminar elementos de un array
// log: .pop() - .shift()

// note: .pop() - Elimina el ultimo elemento del array
array.pop();
console.log(array);

// note: .shift() - Elimina el primer elemento del array
array.shift();
console.log(array);

// info: Eliminar, modificar y agregar elementos de un array
// log: .splice()
// note: .splice(indice, valor a eliminar) - Elimina elementos de un array
array.splice(0, 1);
console.log(array);

// note: .splice(indice, valor a eliminar, valor nuevo) - Reemplaza elementos de un array
array.splice(0, 1, "Soy el primer elemento");
console.log(array);

// note: .splice(indice, valor a eliminar, valor nuevo) - Modifica elementos de un array
array.splice(0, 1, "Soy el primer elemento", "Soy el segundo elemento");
console.log(array);